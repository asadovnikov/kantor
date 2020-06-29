console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const {helpers} = require('./bundle');
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    try {
      console.log('Extracting transaction.');
      const transaction = helpers.extractTransactionFromDBEvent(record.dynamodb);
      console.log(JSON.stringify(transaction));
    } catch (e) {
      console.log(e);
    }
  });
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};

/**
 * 1. extract person
 * 2. lookup for person
 * 3. update limits
 */