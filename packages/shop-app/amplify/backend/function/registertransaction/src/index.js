console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
var docClient = new AWS.DynamoDB.DocumentClient();
const tblName = process.env.API_SHOPAPPAPI_TRANSACTIONTABLE_NAME;

const extractTransaction = (message) => {
  reportMessage('Extracting transaction from a message');
  if (isTransactionRequest(message)) {
    return prepareTrRequest(message);
  }
  if (message.transaction !== undefined) {
    if (isTransactionRequest(message.transaction)) {
      return prepareTrRequest(message.transaction);
    }
  }
  if (message.body !== undefined) {
    if (isTransactionRequest(message.body)) {
      return prepareTrRequest(message.body);
    }
    if (message.body.transaction !== undefined) {
      if (isTransactionRequest(message.body.transaction)) {
        return prepareTrRequest(message.body.transaction);
      }
    }
  }
  throw new Error('Failed extracting transaction details');
};

exports.handler = async (event) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);

  const transaction = extractTransaction(event.body !== undefined ? JSON.parse(event.body) : event);
  transaction.id = uuidv4();
  const result = await docClient.put({
    TableName: tblName,
    Item: transaction
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      request: JSON.stringify(result)
    })
  }
};
