/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	API_KYCRESTLINK_APIID
	API_KYCRESTLINK_APINAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const axios = require('axios');

// declare a new express app
var app = express();
app.use(bodyParser.json());
// app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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

const token = Buffer.from(`${JumioToken}:${JumioSecret}`, 'utf8').toString('base64');

/**********************
 * Example get method *
 **********************/

const getJumioImage = async (imgSrc) => {
	const data = await axios.get(imgSrc, {
		headers: {
			'Content-Type': 'image/jpeg',
			'User-Agent': JumioUserAgent,
		},
		auth: {
			username: JumioToken,
			password: JumioSecret,
		},
		responseType: 'stream',
	});
	return data;
};

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

app.get('/jumio', function (req, res) {
	// Add your code here
	res.json({ success: 'get call succeed!', data: req.url });
});

app.get('/jumio/:scanRef', async (req, res) => {
	// Add your code here
	const { scanRef } = req.params;
	try {
		console.log('Jumio request');
		const result = await retrieveData(scanRef);
		console.log(`Jumio request done: ${JSON.stringify(result)}`);
		res.json({ success: 'get call succeed!', data: result });
	} catch (err) {
		console.log(err);
	}
});

app.get('/jumio/document/:documentRef', async (req, res) => {
	// Add your code here
	const { documentRef } = req.params;
	try {
		const result = await getJumioImage(documentRef);
		result.data.pipe(res);

		// res.json({ success: 'get call succeed!', doc: documentRef });
	} catch (err) {
		console.log(err);
	}
});

app.listen(3010, function () {
	console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
