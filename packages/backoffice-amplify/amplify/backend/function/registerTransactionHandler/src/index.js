
console.log('Loading function');
var AWS = require('aws-sdk');

const { helpers } = require('./moduler');
const { v4: uuidv4 } = require('uuid');
// const AWSendpoint = 'http://docker.for.mac.localhost:8000';
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  helpers.reportMessage('Received event');

  try {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const transaction = helpers.extractTransaction(event.body !== undefined ? JSON.parse(event.body) : event);
    const lookupResult = await helpers.registerIfUnknown(docClient)(transaction, uuidv4());
    if (lookupResult.code > 200) {
      return lookupResult;
    }
    await helpers.updateCustomerLimits(docClient)(lookupResult.result, transaction);
    return helpers.successResponse('Transaction saved. ay!');
  } catch (error) {
    helpers.reportMessage('Error processing request.');
    console.log(helpers.buildTrace());
    // TODO: response builder
    return error;
  }
};