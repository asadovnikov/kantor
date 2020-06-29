console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const {helpers} = require('./bundle');
var docClient = new AWS.DynamoDB.DocumentClient();
const tblName = process.env.API_SHOPAPPAPI_PAYMENTREQUESTTABLE_NAME

exports.handler = async (event, context) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  let transaction = {};
  try {
    transaction = await helpers.extractTransactionFromRequest(event);
  }
  catch(err) {
    return {
      statusCode: 400,
      body: `Error: Invalid request. ${JSON.stringify(err)}`
    }
  }
  let response = {
    blocked: false
  }
  try { 
    transaction.id = uuidv4();
    transaction.createdOn = new Date().toISOString();
    transaction.updatedOn = new Date().toISOString();
    transaction.Status = 'RECEIVED';
    await docClient.put({
      TableName: tblName,
      Item: transaction
    }).promise();
    if(transaction.FiatAmount === 25000) {
      response = {
        blocked: true,
        reason: 'KYC verification required',
        redirect: `https://dev.kantor.kosevych.info/kyc/${transaction.id}`
      }
    }
  } catch (error) {
      console.log('Error:\n', JSON.stringify(error));
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
};
