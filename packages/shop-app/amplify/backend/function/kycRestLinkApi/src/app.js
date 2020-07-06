/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	API_SHOPAPPAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_SHOPAPPAPI_GRAPHQLAPIIDOUTPUT
	API_SHOPAPPAPI_TEMPORARYLINKSTABLE_ARN
	API_SHOPAPPAPI_TEMPORARYLINKSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express');
var bodyParser = require('body-parser');
const buildLink = require('./processing');
const buildDocVerifyLink = require('./documentVerifyProcessing');

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.post('/startkyc', async (req, res) => {
	const { verificationType, customerInfo, verificationId, documentType } = req.body;
	try {
		const customer = JSON.parse(customerInfo);
		if (verificationType === 'document') {
			const link = await buildDocVerifyLink(customer.id, verificationId, documentType);
			res.redirect(link);
		} else if (verificationType === 'netverify') {
			const link = await buildLink(customer.id, verificationId);
			res.redirect(link);
		} else {
			res.json({
				status: 'failed',
				reason: 'Unsupported verification type',
			});
		}
	} catch (error) {
		console.log(JSON.stringify(err));
		res.json(err);
	}
});

// app.post('/startkyc/:customerId.:verificationId', async (req, res) => {
// 	const { customerId, verificationId } = req.params;
// 	try {
// 		const link = await buildLink(customerId, verificationId);
// 		res.redirect(link);
// 	} catch (err) {
// 		console.log(JSON.stringify(err));
// 		res.json(err);
// 	}
// });

// app.post('/startkyc/document/:documentType.:customerId.:verificationId', async (req, res) => {
// 	const { customerId, verificationId, documentType } = req.params;
// 	try {
// 		const link = await buildDocVerifyLink(customerId, verificationId, documentType);
// 		res.redirect(link);
// 	} catch (err) {
// 		console.log(JSON.stringify(err));
// 		res.json(err);
// 	}
// });

app.listen(3000, function () {
	console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
