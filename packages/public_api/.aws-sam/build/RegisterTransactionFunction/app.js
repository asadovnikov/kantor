'use strict';
console.log('Loading function');

// import { DynamoDB, Endpoint } from 'aws-sdk';

// const ddb = new DynamoDB({ apiVersion: '2012-08-10' });
// ddb.endpoint = new Endpoint('http://docker.for.mac.localhost:8000');

// if (process.env['DYNAMO_LOCAL_ENDPT']) {
// 	ddb.endpoint = new Endpoint('http://localhost:8000');
// }

// ddb.

var AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
// const AWSaccessKeyId = 'not-important';
// const AWSsecretAccessKey = 'not-important';
// const AWSregion = 'local';
const AWSendpoint = 'http://docker.for.mac.localhost:8000'; // This is required
// AWS.config.update({
// 	endpoint: AWSendpoint,
// });
var docClient = new AWS.DynamoDB.DocumentClient({ endpoint: new AWS.Endpoint(AWSendpoint) });
// var docClient = new AWS.DynamoDB.DocumentClient();

var tableName = 'requests_table';
// var tableName = 'TestCommittedTransactions';

exports.lambdaHandler = async (event, context, callback) => {
	var response = {};
	console.log('An event received:\n', event);
	console.log('Reading transaction from request:\n', event.body);
	const { transaction } = JSON.parse(event.body);
	var params = {
		TableName: tableName,
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
	} catch (err) {
		console.log('Error registering transaction:', err);
		response = {
			statusCode: 403,
			body: JSON.stringify({
				message: `Transaction: ${params.Item.tr_id} failed to be stored. Following error received: ${err}`,

			}),
		};
		// return err;
	}

	return response;
};
