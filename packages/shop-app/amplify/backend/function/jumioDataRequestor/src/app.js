/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token');
	next();
});

const jumioScanUri = 'https://lon.netverify.com/api/netverify/v2/scans';
const appName = 'Cryptomine';
// const appNameDescription = 'Exchange';

const RetrieveJumioDataURI = (scanRef) => `${jumioScanUri}/${scanRef}/data`;
const RetrieveJumioScanDocuments = (scanRef) => `${jumioScanUri}/${scanRef}/images`;
const JumioToken = '665a4231-b257-4c05-95a8-0a5fbc5c6e0c';
const JumioSecret = 'HCrEE23pJJDO1rY2kNwK43PDtCALyJKj';
const JumioUserAgent = `${appName} BackOffice/v1.0`;

const headers = {
	'Content-Type': 'application/json',
	'User-Agent': JumioUserAgent,
};

/**********************
 * Example get method *
 **********************/

const retrieveData = async (scanRef) => {
	const { data: scanData } = await axios.get(RetrieveJumioDataURI(scanRef), {
		headers: {
			...headers,
		},
		auth: {
			username: JumioToken,
			password: JumioSecret,
		},
	});
	const { data: providedDocumentsData } = await axios.get(RetrieveJumioScanDocuments(scanRef), {
		headers: {
			...headers,
		},
		auth: {
			username: JumioToken,
			password: JumioSecret,
		},
	});
	return { scanData, providedDocumentsData };
};

app.get('/jumiodata/:scanRef', async (req, res) => {
	// Add your code here
	const { scanRef } = req.params;
	try {
		const result = await retrieveData(scanRef);
		res.json({ success: 'get call succeed!', url: result });
	} catch (err) {
		console.log(err);
	}
});

app.listen(3000, function () {
	console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
