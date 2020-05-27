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
  const transaction = helpers.extractTransaction(JSON.parse(event.body));
  const customers = await helpers.resolveCustomer(docClient)(transaction);
  if(Array.isArray(customers)){
    if(customers.length > 0 ){
      response = {
        statusCode: 200,
        body: JSON.stringify(customers)
      }
    }
    else {
      transaction.id = uuidv4();
      const customer = await helpers.createCustomer(docClient)(transaction);
      response = {
        statusCode: 200,
        body: JSON.stringify(customer)
      }
    }
  }
  else {
    response = {
      statusCode: 500,
      body: JSON.stringify(customers)
    }
  }
  return response;
};
