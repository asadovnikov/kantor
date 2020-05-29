'use strict';
var AWS = require('aws-sdk');
const { limits } = require('./limits');
// var sns = require('aws-sdk/clients/sns');
// var publisher = new sns();
// const { v4: uuidv4 } = require('uuid');
const AWSendpoint = 'http://docker.for.mac.localhost:8000';
var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: new AWS.Endpoint(AWSendpoint) });
// var docClient = new dynamodb.DocumentClient();
// const WARNING_TOPIC_ARN = process.env.WARNING_TOPIC_ARN;
// const TIER_UP_TOPIC_ARN = process.env.TIER_UP_TOPIC_ARN;
var customersTbl = 'STCustomerStoreTbl-dev';//process.env.CUSTOMERS_TABLE_NAME;

exports.updateCustomerLimits = async (event) => {
  console.log('UpdateCustomerLimits received an event:\n', event);

  const { customer, transaction } = event;

  if (customer.FiatCurrency !== transaction.FiatCurrency) {
    console.log('Error: transaction currency not equal to customer limits currency\n', event);
    // const message = {
    //   Message: 'Currency mismatch between customer currency and limits currency'
    //   TopicArn: WARNING_TOPIC_ARN,
    //   MessageAttributes:{
    //     transaction: {
    //       DataType: 'String',
    //       StringValue: JSON.stringify(event)
    //     }
    //   }
    // }
    // await publisher.publish(message).promise();
  }
  customer.FiatDayAmount = customer.FiatDayAmount + transaction.FiatAmount;
  customer.FiatMonthAmount = customer.FiatMonthAmount + transaction.FiatAmount;

  //TODO: refactor
  if (customer.FiatDayAmount < 1000 && customer.FiatMonthAmount < 20000) {
    //TODO: Handle situation with just created account
    customer.Tier = 'low';
  }
  else if (customer.FiatDayAmount < 5000 && customer.FiatMonthAmount < 100000) {
    if (customer.Tier === 'low') {
      console.log('Set Tier: medium for customer\n', customer);
      // const message = {
      //   Message: 'Level up customer tier'
      //   TopicArn: TIER_UP_TOPIC_ARN,
      //   MessageAttributes:{
      //     transaction: {
      //       DataType: 'String',
      //       StringValue: JSON.stringify(event)
      //     }
      //   }
      // }
      // await publisher.publish(message).promise();
    }
    customer.Tier = 'medium';
  }
  else {
    if (customer.Tier === 'low' || customer.Tier === 'medium') {
      console.log('Set Tier: heigh for customer\n', customer);
      // const message = {
      //   Message: 'Level up customer tier'
      //   TopicArn: TIER_UP_TOPIC_ARN,
      //   MessageAttributes:{
      //     transaction: {
      //       DataType: 'String',
      //       StringValue: JSON.stringify(event)
      //     }
      //   }
      // }
      // await publisher.publish(message).promise();
    }
    customer.Tier = 'high';
  }

  const updateQuery = {
    TableName: customersTbl,
    Key: { cst_id: customer.cst_id },
    UpdateExpression: 'SET Tier = :t, FiatDayAmount = :d, FiatMonthAmount = :m',
    ExpressionAttributeValues: {
      ':t': customer.Tier,
      ':d': customer.FiatDayAmount,
      ':m': customer.FiatMonthAmount
    }
  }

  try {
    const updateItemOutput = await docClient.update(updateQuery).promise();
    console.info('Successfully updated item.\n', updateItemOutput);
  }
  catch (err) {
    console.log('Failed updating limits.\n', updateQuery);
    handleUpdateItemError(err);
    throw err;
  }

  function handleUpdateItemError(err) {
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