'use strict';
var AWS = require('aws-sdk');
const AWSendpoint = 'http://docker.for.mac.localhost:8000';
var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: new AWS.Endpoint(AWSendpoint) });
var customersTbl = 'STCustomerStoreTbl-dev';//process.env.CUSTOMERS_TABLE_NAME;

exports.resolveCustomer = async (event) => {
  var response = {};
  console.log('An event received:\n', event);
  console.log('Reading transaction from request:\n', event.transaction);
  const customer_email = event.transaction.Email;

  var query = {
    TableName: customersTbl,
    IndexName: 'byEmail',
    KeyConditionExpression: 'Email = :a',
    ExpressionAttributeValues: {
      ':a': customer_email
    }
  }

  try {
    const queryOutput = await docClient.query(query).promise();
    console.log(`Query successful. Found ${queryOutput.Count} items.\nQuery:\n`, query);
    return queryOutput.Items;
  }
  catch (err) {
    console.log('Failed requesting customers. \n', query);
    handleQueryError(err);
  }

  function handleQueryError(err) {
    if (!err) {
      console.error('Encountered error object was empty');
      return;
    }
    if (!err.code) {
      console.error(`An exception occurred, investigate and configure retry strategy. Error: ${JSON.stringify(err)}`);
      return;
    }
    // here are no API specific errors to handle for Query, common DynamoDB API errors are handled below
    handleCommonErrors(err);
  }

  function handleCommonErrors(err) {
    switch (err.code) {
      case 'InternalServerError':
        console.error(`Internal Server Error, generally safe to retry with exponential back-off. Error: ${err.message}`);
        return;
      case 'ProvisionedThroughputExceededException':
        console.error(`Request rate is too high. If you're using a custom retry strategy make sure to retry with exponential back-off.`
          + `Otherwise consider reducing frequency of requests or increasing provisioned capacity for your table or secondary index. Error: ${err.message}`);
        return;
      case 'ResourceNotFoundException':
        console.error(`One of the tables was not found, verify table exists before retrying. Error: ${err.message}`);
        return;
      case 'ServiceUnavailable':
        console.error(`Had trouble reaching DynamoDB. generally safe to retry with exponential back-off. Error: ${err.message}`);
        return;
      case 'ThrottlingException':
        console.error(`Request denied due to throttling, generally safe to retry with exponential back-off. Error: ${err.message}`);
        return;
      case 'UnrecognizedClientException':
        console.error(``
          + `Error: ${err.message}`);
        return;
      case 'ValidationException':
        console.error(``
          + `fix input before retrying. Error: ${err.message}`);
        return;
      case 'RequestLimitExceeded':
        console.error(` `
          + ` Error: ${err.message}`);
        return;
      default:
        console.error(`An exception occurred, investigate and configure retry strategy. Error: ${err.message}`);
        return;
    }
  }

}