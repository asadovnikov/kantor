
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
// const AWSendpoint = 'http://docker.for.mac.localhost:8000';
// var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: new AWS.Endpoint(AWSendpoint) });
var docClient = new AWS.DynamoDB.DocumentClient();
// const WARNING_TOPIC_ARN = process.env.WARNING_TOPIC_ARN;
var customersTbl = 'STCustomerStoreTbl-dev';//process.env.CUSTOMERS_TABLE_NAME;

exports.registerCustomer = async (event) => {
  console.log('RegisterCustomer received an event:\n', event);
  const { transaction } = event;

  const fields = [
    'Firstname',
    'Surname',
    'DateOfBirth',
    'StreetLine1',
    'StreetLine2',
    'City',
    'PostalCode',
    'StateProvince',
    'Country',
    'Email',
    'Telephone'
  ];

  const { FiatCurrency, FiatAmount } = transaction;

  const customer = {};
  fields.forEach(attr => {
    if (transaction.hasOwnProperty(attr)) {
      customer[attr] = transaction[attr];
    }
  });

  var putQuery = {
    TableName: customersTbl,
    Item: {
      id: uuidv4(),
      Tier: 'High',
      KYC_State: 'unknown',
      FiatCurrency,
      FiatDailyAmount: FiatAmount,
      FiatMonthlyAmount: FiatAmount,
      ...customer
    }
  }

  console.log('Building put customer request:\n', putQuery);
  try {
    var result = await docClient.put(putQuery).promise();
    console.log(`Item ${putQuery.Item.id} stored successfully:\n`, result);
    return putQuery.Item;
  } catch (err) {
    console.log('Failed registering new customers. \n', putQuery);
    handlePutItemError(err);
    throw err;
  }

  function handlePutItemError(err) {
    if (!err) {
      console.error('Encountered error object was empty');
      return;
    }
    if (!err.code) {
      console.error(`An exception occurred, investigate and configure retry strategy. Error: ${JSON.stringify(err)}`);
      return;
    }
    switch (err.code) {
      case 'ConditionalCheckFailedException':
        console.error(`Condition check specified in the operation failed, review and update the condition check before retrying. Error: ${err.message}`);
        return;
      case 'TransactionConflictException':
        console.error(`Operation was rejected because there is an ongoing transaction for the item, generally safe to retry ' +
       'with exponential back-off. Error: ${err.message}`);
        return;
      case 'ItemCollectionSizeLimitExceededException':
        console.error(`An item collection is too large, you're using Local Secondary Index and exceeded size limit of` +
          `items per partition key. Consider using Global Secondary Index instead. Error: ${err.message}`);
        return;
      default:
        break;
      // Common DynamoDB API errors are handled below
    }
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
        console.error(`The request signature is incorrect most likely due to an invalid AWS access key ID or secret key, fix before retrying.`
          + `Error: ${err.message}`);
        return;
      case 'ValidationException':
        console.error(`The input fails to satisfy the constraints specified by DynamoDB, `
          + `fix input before retrying. Error: ${err.message}`);
        return;
      case 'RequestLimitExceeded':
        console.error(`Throughput exceeds the current throughput limit for your account, `
          + `increase account level throughput before retrying. Error: ${err.message}`);
        return;
      default:
        console.error(`An exception occurred, investigate and configure retry strategy. Error: ${err.message}`);
        return;
    }
  }


}