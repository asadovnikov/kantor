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

exports.lambdaHandler = async (event, context) => {
	var response = {};
	var params = {
		TableName: tableName,
		Item: {
			tr_id: uuidv4(),
			year: 12,
			title: 'title',
			info: {
				plot: 'Nothing happens at all.',
				rating: 0,
				tr: event.body,
			},
		},
	};

	var p = await docClient.put(params).promise();
	// var d = p.send();

	try {
		// const ret = await axios(url);
		debugger;
		response = {
			statusCode: 200,
			body: JSON.stringify({
				message: 'not hello world',
				// location: ret.data.trim()
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}

	return response;
};
