console.log('Loading function');
var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const {helpers} = require('./bundle');
var docClient = new AWS.DynamoDB.DocumentClient();

const kycVerificationTable = process.env.API_SHOPAPPAPI_KYCDOCUMENTTABLE_NAME;
const customersTable = process.env.API_SHOPAPPAPI_CUSTOMERTABLE_NAME;

exports.handler = async (event, context) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  for(const record of event.Records){
    console.log('Record recieved');
    console.log('DynamoDB Record: %j', record.dynamodb);
    try {
      console.log('Extracting transaction.');
      const transaction = helpers.extractTransactionFromDBEvent(record.dynamodb);
      console.log(JSON.stringify(transaction));
      console.log('Performing logic')
        const verification = await helpers.KYCVerificationWorker(docClient, kycVerificationTable, uuidv4).createVerificationRecord();
        console.log(JSON.stringify(verification));
        transaction.KYCVerification = verification.id;
        const customer = await helpers.CustomerWorker(docClient, customersTable, uuidv4).createCustomer(transaction);
        console.log(JSON.stringify(customer));
      
    } catch (e) {
      console.log(e);
    }
  }
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};

/**
 * 1. extract person
 * 2. lookup for person
 * 3. update limits
 */