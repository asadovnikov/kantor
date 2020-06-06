console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const {helpers} = require('./bundle');
var docClient = new AWS.DynamoDB.DocumentClient();
const tblName = process.env.API_SHOPAPPAPI_TRANSACTIONTABLE_NAME;

exports.handler = async (event) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  let transaction = {};
  try {
    transaction = await helpers.extractTransactionFromRequest(event);
  }
  catch(err) {
    console.log('Error:\n', JSON.stringify(err));
    return {
      statusCode: 400,
      body: `Error: Invalid request. ${JSON.stringify(err)}`
    }
  }
  try {  
    transaction.id = uuidv4();
    transaction.createdOn = new Date().toISOString();
    transaction.updatedOn = new Date().toISOString();
    await docClient.put({
      TableName: tblName,
      Item: transaction
    }).promise();
  } catch (error) {
      console.log('Error:\n', JSON.stringify(error));
  }

  return {
    statusCode: 201,
    body: JSON.stringify({
      transactionRecord: JSON.stringify(transaction.id)
    })
  }
};
