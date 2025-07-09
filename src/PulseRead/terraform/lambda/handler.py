import json
import boto3
import os
from datetime import datetime

bedrock_runtime = boto3.client('bedrock-runtime', region_name='us-west-2')
s3 = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('pulse-summaries')

def lambda_handler(event, context):
    # 1. Extract the S3 object info from the event
    record = event['Records'][0]
    bucket = record['s3']['bucket']['name']
    key = record['s3']['object']['key']

    print(f"Triggered by bucket: {bucket}")
    print(f"Triggered by key: {key}")

    # 2. Read the content of the file
    response = s3.get_object(Bucket=bucket, Key=key)
    raw_text = response['Body'].read().decode('utf-8')

    # 3. Create prompt for Bedrock
    prompt = f"\n\nHuman: Please summarize this feedback:\n\n{raw_text}\n\nAssistant:"

    # 4. Call Bedrock model
    bedrock_response = bedrock_runtime.invoke_model(
        modelId='anthropic.claude-v2',
        body=json.dumps({
            "prompt": prompt,
            "max_tokens_to_sample": 200
            }),
        contentType='application/json',
        accept='application/json'
    )

    result = json.loads(bedrock_response['body'].read())
    summary = result.get('completion', '[No summary]')

    # 5. Save summary to second S3 bucket
    summary_bucket = 'pulseread-summary-bucket'
    summary_key = key.replace(".txt", "_summary.txt")

    if not summary or summary.strip() == '':
        summary = '[Model returned empty summary]'

    s3.put_object(
        Bucket=summary_bucket,
        Key=summary_key,
        Body=summary.encode('utf-8')
    )

    # 6. Log result (can extend to another S3 bucket or DynamoDB)
    print("Claude response object:", result)
    print("Extracted summary:", summary)

        # Send to DynamoDB
    table.put_item(Item={
        'id': key,
        'timestamp': datetime.utcnow().isoformat(),
        'source_file': key,
        'original_text': raw_text,
        'summary': summary
    })

    return {
        'statusCode': 200,
        'body': json.dumps({'summary': summary})
    }

