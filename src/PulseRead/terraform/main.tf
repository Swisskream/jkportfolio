provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "input_bucket" {
  bucket = var.s3_bucket_name
}

resource "aws_s3_bucket" "summary_bucket" {
  bucket = var.s3_summary_bucket_name
}

resource "aws_dynamodb_table" "pulse_summaries" {
  name         = "pulse-summaries"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Project = "PulseRead"
  }
}

resource "aws_iam_role" "lambda_exec" {
  name               = "pulseReadLambdaRole"
  assume_role_policy = <<EOF
    {
        "Version": "2012-10-17",
        "Statement": [{
            "Effect": "Allow",
            "Principal": { "Service": "lambda.amazonaws.com" },
            "Action": "sts:AssumeRole"
        }]
    }
EOF
}

resource "aws_iam_role_policy" "lambda_s3_access" {
  name = "allow-lambda-s3-get"
  role = aws_iam_role.lambda_exec.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:GetObject"
        ],
        Resource = "${aws_s3_bucket.input_bucket.arn}/*"
      },
      {
        Effect = "Allow",
        Action = [
          "s3:ListBucket"
        ],
        Resource = "${aws_s3_bucket.input_bucket.arn}"
      },
      {
        Effect = "Allow",
        Action = [
          "s3:PutObject"
        ],
        Resource = "arn:aws:s3:::pulseread-summary-bucket/*"
      },
      {
        Effect = "Allow",
        Action = [
          "s3:PutObject"
        ],
        Resource = "${aws_s3_bucket.input_bucket.arn}/*"
      },
      {
        Effect = "Allow",
        Action = [
          "dynamodb:PutItem",
          "dynamodb:Scan"
        ],
        Resource = "${aws_dynamodb_table.pulse_summaries.arn}"
      },
      {
        Effect = "Allow",
        Action = [
          "bedrock:InvokeModel"
        ],
        Resource = "arn:aws:bedrock:us-west-2::foundation-model/anthropic.claude-v2"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "lambda_logs" {
  name       = "lambda-basic-logs"
  roles      = [aws_iam_role.lambda_exec.name]
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "pulse_lambda" {
  function_name    = var.lambda_function_name
  role             = aws_iam_role.lambda_exec.arn
  handler          = "handler.lambda_handler"
  timeout          = 30
  runtime          = "python3.12"
  filename         = "${path.module}/lambda/handler.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda/handler.zip")
}

resource "aws_lambda_function" "presign_lambda" {
  function_name    = "getPresignedURL"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "get_presigned_url.lambda_handler"
  runtime          = "python3.12"
  timeout          = 10
  filename         = "${path.module}/lambda/get_presigned_url.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda/get_presigned_url.zip")

  environment {
    variables = {
      INPUT_BUCKET_NAME = aws_s3_bucket.input_bucket.bucket
    }
  }
}

resource "aws_lambda_function" "get_summaries" {
  function_name = "getSummaries"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "get_summaries.lambda_handler"
  runtime       = "python3.12"
  timeout       = 10
  filename      = "${path.module}/lambda/get_summaries.zip"
  source_code_hash = filebase64sha256("${path.module}/lambda/get_summaries.zip")
}

resource "aws_s3_bucket_notification" "bucket_notify" {
  bucket = aws_s3_bucket.input_bucket.id

  lambda_function {
    lambda_function_arn = aws_lambda_function.pulse_lambda.arn
    events              = ["s3:ObjectCreated:*"]
  }

  depends_on = [aws_lambda_permission.allow_bucket]
}

resource "aws_lambda_permission" "allow_bucket" {
  statement_id  = "AllowExecutionFromS3"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.pulse_lambda.function_name
  principal     = "s3.amazonaws.com"
  source_arn    = aws_s3_bucket.input_bucket.arn
}

resource "aws_apigatewayv2_api" "presign_api" {
  name          = "PulseReadPresignAPI"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "presign_integration" {
  api_id                 = aws_apigatewayv2_api.presign_api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.presign_lambda.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "presign_route" {
  api_id    = aws_apigatewayv2_api.presign_api.id
  route_key = "GET /get-presigned-url"
  target    = "integrations/${aws_apigatewayv2_integration.presign_integration.id}"
}

resource "aws_apigatewayv2_route" "cors_options" {
  api_id    = aws_apigatewayv2_api.presign_api.id
  route_key = "OPTIONS /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.presign_integration.id}"
}

resource "aws_lambda_permission" "allow_apigw_presign" {
  statement_id  = "AllowInvokeFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.presign_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.presign_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_stage" "presign_stage" {
  api_id      = aws_apigatewayv2_api.presign_api.id
  name        = "prod"
  auto_deploy = true

  default_route_settings {
    throttling_rate_limit  = 100
    throttling_burst_limit = 50
    data_trace_enabled = true
    detailed_metrics_enabled = true
  }
}

resource "aws_apigatewayv2_integration" "summaries_integration" {
  api_id                 = aws_apigatewayv2_api.presign_api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.get_summaries.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "summaries_route" {
  api_id    = aws_apigatewayv2_api.presign_api.id
  route_key = "GET /get-summaries"
  target    = "integrations/${aws_apigatewayv2_integration.summaries_integration.id}"
}

resource "aws_lambda_permission" "allow_apigw_summaries" {
  statement_id  = "AllowInvokeFromAPIGatewayForSummaries"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_summaries.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.presign_api.execution_arn}/*/*"
}
