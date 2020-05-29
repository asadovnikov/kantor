
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
    const isAllowed = helpers.kycCheck(lookupResult.result, transaction);
    const message = helpers.successResponse('We are done here!');
    return {
      KYC: lookupResult.result.KYC_State,
      Tier: lookupResult.result.Tier,
      PaymentAllowed: isAllowed,
      ...message
    }
  } catch (error) {
    helpers.reportMessage('Error processing request.');
    console.log(helpers.buildTrace());
    // TODO: response builder
    return error;
  }
};