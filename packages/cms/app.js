const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuid } = require('uuid');
// const https = require('https');
// const AWS = require('aws-sdk');
const urlParse = require('url').URL;
const { awsmobile } = require('./src/aws-exports');
// const gql = require('graphql-tag');
const graphql = require('graphql');

const { createTemporaryLinks, createComment, createJumioVerifyMetaData } = require('./src/graphql/mutations');
const { getTemporaryLinks } = require('./src/graphql/queries');

const { print } = graphql;
const appsyncUrl = awsmobile.aws_appsync_graphqlEndpoint;
// const region = awsmobile.aws_appsync_region;
const apiKey = awsmobile.aws_appsync_apiKey;
// const endpoint = new urlParse(appsyncUrl).hostname.toString();
const app = express();
const port = 3015;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const username = 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c';
// const password = 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf';

const shopSuccessUri = 'http://localhost:3000/waitingkyc';
const shopFailedUri = 'http://localhost:3000/kycfailed';

const verifyAddress = 'https://lon.netverify.com/api/v4/initiate';
// const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

const redirectAddress = 'https://8d0d047e21f7.ngrok.io';
const headers = {
	'Content-Type': 'application/json',
	'User-Agent': 'kantorClient kantorApp/v.1.1',
};

const uploadDocument = async () => {};

const resolveLink = async (linkId) => {
	try {
		const {
			data: {
				data: { getTemporaryLinks: linkData },
			},
		} = await axios({
			url: appsyncUrl,
			method: 'post',
			headers: {
				'x-api-key': apiKey,
			},
			data: {
				query: print(getTemporaryLinks),
				variables: { id: linkId },
			},
		});
		return linkData;
	} catch (err) {
		console.log(err);
	}
};

const addJumioMeta = async (verificationId, data, meta, verType) => {
	const jumioMeta = {
		input: {
			id: uuid(),
			dataInput: data,
			metaInfo: meta,
			inputType: verType,
			jumioVerifyMetaDataVerificationId: verificationId,
		},
	};
	try {
		const commentData = await axios({
			url: appsyncUrl,
			method: 'post',
			headers: {
				'x-api-key': apiKey,
			},
			data: {
				query: print(createJumioVerifyMetaData),
				variables: jumioMeta,
			},
		});
		console.log(JSON.stringify(commentData));
	} catch (error) {
		console.log(error);
	}
};

const addJournalEntry = async (customerId, message) => {
	const comment = {
		input: {
			id: uuid(),
			content: message,
			commentCustomerId: customerId,
			Author: 'backoffice automation',
			AuthorEmail: 'admin@kantor.kosevych.info',
		},
	};
	try {
		const commentData = await axios({
			url: appsyncUrl,
			method: 'post',
			headers: {
				'x-api-key': apiKey,
			},
			data: {
				query: print(createComment),
				variables: comment,
			},
		});
		console.log(JSON.stringify(commentData));
	} catch (error) {
		console.log(error);
	}
};

const storeTempLink = async (linkID, customerId, redirectLink) => {
	// const graphCall = new AWS.HttpRequest(appsyncUrl, region);
	const tempLink = {
		input: {
			id: linkID,
			customerId: customerId,
			transactionId: uuid(),
			link: redirectLink,
			comment: 'forming verify link',
		},
	};
	try {
		const tempLinkData = await axios({
			url: appsyncUrl,
			method: 'post',
			headers: {
				'x-api-key': apiKey,
			},
			data: {
				query: print(createTemporaryLinks),
				variables: tempLink,
			},
		});
		console.log(JSON.stringify(tempLinkData));
	} catch (err) {
		console.log(err);
	}
	await addJournalEntry(customerId, 'Initiated Jumio NetVerify for Identity verification');
};

app.post('/idverification/:customerId', async (req, res) => {
	try {
		const internalLinkId = uuid();
		const { customerId } = req.params;
		const { data } = await axios.post(
			verifyAddress,
			{
				customerInternalReference: `${customerId}`,
				userReference: 'uuid user',
				successUrl: `${redirectAddress}/success/${internalLinkId}`,
				errorUrl: `${redirectAddress}/failed/${internalLinkId}`,
				callbackUrl: `${redirectAddress}/callback/${internalLinkId}`,
			},
			{
				headers: {
					...headers,
				},
				auth: {
					username: 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c',
					password: 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf',
				},
			}
		);
		const { redirectUrl } = data;
		await storeTempLink(internalLinkId, customerId, redirectUrl);
		res.redirect(redirectUrl);
		// res.send(JSON.stringify(data));
	} catch (err) {
		res.send(JSON.stringify(err));
	}
	// res.send('Hello World!');
});

app.get('/', async (req, res) => {
	const item = await resolveLink('8a5c02e0-6ac5-4975-9cca-b0bc09932959');
	req.send(item);
});

app.post('/', async (req, res) => {
	try {
		// const basic = `Basic ${btoa(username + ':' + password)}`;
		const { data } = await axios.post(
			verifyAddress,
			{
				customerInternalReference: 'uuid customer',
				userReference: 'uuid user',
				successUrl: `${redirectAddress}/success`,
				errorUrl: `${redirectAddress}/failed`,
				callbackUrl: `${redirectAddress}/callback`,
			},
			{
				headers: {
					...headers,
				},
				auth: {
					username: 'ae47bd25-fe31-4097-ad8b-4dd3ed66ba6c',
					password: 'bpII95sj5Qs7s3eRgHbKnlcn5ulkT9kf',
				},
			}
		);
		const { redirectUrl } = data;
		res.redirect(redirectUrl);
		// res.send(JSON.stringify(data));
	} catch (err) {
		res.send(JSON.stringify(err));
	}
});

app.post('/success/:tempUriId', async (req, res) => {
	const { tempUriId } = req.params;
	try {
		const { customerId } = await resolveLink(tempUriId);
		await addJournalEntry(customerId, 'Documents successfully uploaded to Jumio');
		const verificationID = '42a39cb2-2cc3-4567-ad52-48040ba5f1d2';
		await addJumioMeta(verificationID, JSON.stringify(req.body), JSON.stringify(req.body), 'ID Verify');
	} catch (error) {
		console.log(error);
	}
	res.redirect(shopSuccessUri);
});

app.post('/failed/:tempUriId', async (req, res) => {
	const { tempUriId } = req.params;
	try {
	} catch (error) {
		const { customerId } = await resolveLink(tempUriId);
		await addJournalEntry(customerId, 'Failed Jumio processing');
		const verificationID = '42a39cb2-2cc3-4567-ad52-48040ba5f1d2';
		await addJumioMeta(verificationID, JSON.stringify(req.body), JSON.stringify(req.body), 'ID Verify');
	}
	res.redirect(shopFailedUri);
});

app.post('/callback/:tempUriId', async (req, res) => {
	const { tempUriId } = req.params;
	try {
		const { customerId } = await resolveLink(tempUriId);
		await addJournalEntry(customerId, 'Documents has been processed by Jumio');
		const verificationID = '42a39cb2-2cc3-4567-ad52-48040ba5f1d2';
		await addJumioMeta(verificationID, JSON.stringify(req.body), JSON.stringify(req.body), 'ID Verify');
	} catch (error) {
		console.log(error);
	}
	res.send('OK');
});

app.get('/success', async (req, res) => {
	res.send('OK');
});

app.get('/failed', async (req, res) => {
	res.send('OK');
});

app.get('/callback', async (req, res) => {
	res.send('OK');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
