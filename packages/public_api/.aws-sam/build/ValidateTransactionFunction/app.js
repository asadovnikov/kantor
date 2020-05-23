'use strict';

console.log('Loading function');
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000"
// });
// const doc = require('dynamodb-doc');

// const dynamo = new doc.DynamoDB();

let answer = function (err, data) {
	let response = {};
	if (err) {
		console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
		response = {
			statusCode: 401,
			body: JSON.stringify(err),
		};
	} else {
		console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
		response = {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	}
};

exports.lambdaHandler = async (event, context) => {
	let response = {};
	// docClient.
	// var params = {
	// 	TableName: 'TestCommittedTransactions',
	// 	Key: {
	// 		year: 12,
	// 		title: 'title',
	// 	},
	// };

	try {
		// const ret = await axios(url);
		response = {
			statusCode: 200,
			body: JSON.stringify({
				message: 'hello world',
				// location: ret.data.trim()
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}

	return response;
};
