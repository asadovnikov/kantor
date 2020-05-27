console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
var docClient = new AWS.DynamoDB.DocumentClient();
console.log('import helpers');

const {helpers} = require('./moduler');

exports.handler = async (event, context) => {
  let response = {

  };
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const transaction = helpers.extractTransaction(event.body !== undefined ? JSON.parse(event.body) : event);
  const customers = await helpers.lookupCustomers(docClient)(transaction);
  if(Array.isArray(customers)){
    const knownCustomer = helpers.matchCustomer(transaction, customers);
    if(knownCustomer === transaction) {
      transaction.id = uuidv4();
      const customer = await helpers.createCustomer(docClient)(transaction);
      return {
        statusCode: 200,
        body: JSON.stringify({KYC: customer})
      }
    }
    if( knownCustomer !== null) {
      return {
        statusCode: 200,
        body: JSON.stringify(customers)
      };
    }
  }
  else {
    response = {
      statusCode: 500,
      body: JSON.stringify(event)
    }
  }
  return response;
};
