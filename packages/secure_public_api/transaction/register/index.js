'use strict';
console.log('Loading function');
var AWS = require('aws-sdk');
const { resolveCustomer } = require('./resolveCustomer');
const { registerCustomer } = require('./registerCustomer');
const { mapCustomer } = require('./mapCustomer');
const { updateCustomerLimits } = require('./updateLimits');

// var sns = require('aws-sdk/clients/sns');
// var publisher = new sns();
const { v4: uuidv4 } = require('uuid');
const AWSendpoint = 'http://docker.for.mac.localhost:8000';
var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: new AWS.Endpoint(AWSendpoint) });
// var docClient = new dynamodb.DocumentClient();
// const WARNING_TOPIC_ARN = process.env.WARNING_TOPIC_ARN;
const transactionsTbl = 'STTransactionStoreTbl-dev'; //process.env.TRANSACTION_TABLE_NAME;

exports.handler = async (event, context, callback) => {
  var response = {};
  console.log('An event received:\n', event);
  console.log('Reading transaction from request:\n', event.body);
  const { transaction } = JSON.parse(event.body);
  var params = {
    TableName: transactionsTbl,
    Item: {
      tr_id: uuidv4(),
      ...transaction
    },
  };
  console.log('Building put object request:\n', params);

  try {
    var result = await docClient.put(params).promise();
    console.log(`Item ${params.Item.tr_id} stored successfully:\n`, result);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Transaction: ${params.Item.tr_id} was registered.`,
      }),
    };
    var customers = await resolveCustomer({ transaction: params.Item });
    if (customers.length > 0) {
      console.log('Updating customer limits');
      await updateCustomerLimits({ customer: await mapCustomer({ customers, transaction }), transaction });
      console.log('Customer limits has been updated.');
    }
    else {
      console.log(`Warning: transaction from unknown customer\n`, transaction);
      await registerCustomer({ transaction: params.Item })
      // console.log('publishing sns topic');
      // notify about strange situation
      // const message = {
      //   Message: 'Received transaction from unknown customer'
      //   TopicArn: WARNING_TOPIC_ARN,
      //   MessageAttributes:{
      //     transaction: {
      //       DataType: 'String',
      //       StringValue: JSON.stringify(params.Item)
      //     }
      //   }
      // }
      // await publisher.publish(message).promise();
      // console.log('topic successfully published!');
      //register customer
    }
    // console.log('publishing sns topic');
    // await publisher.publish({ Message: params.Item, TopicArn: WARNING_TOPIC_ARN }).promise();
    // console.log('topic successfully published!');
  } catch (err) {
    console.log('Error registering transaction:', err);
    response = {
      statusCode: 403,
      body: JSON.stringify({
        message: `Transaction: ${params.Item.tr_id} failed to be stored. Following error received: ${err}`,

      }),
    };
  }

  return response;
};