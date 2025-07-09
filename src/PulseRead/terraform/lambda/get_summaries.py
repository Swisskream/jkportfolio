import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('pulse-summaries')

def lambda_handler(event, context):
    response = table.scan()
    items = response.get('Items',[])

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,GET,POST'
        },
        'body': json.dumps(items)
    }