const axios = require('axios');
const { v4: uuid } = require('uuid');
const { awsmobile } = require('./aws-exports');
const graphql = require('graphql');

const { createTemporaryLinks } = require('./graphql/mutations');

const { print } = graphql;
const appsyncUrl = awsmobile.aws_appsync_graphqlEndpoint;
const apiKey = awsmobile.aws_appsync_apiKey;

// const successURI = awsmobile.aws_cloud_logic_custom.find((resource) => resource.name === 'shopRestKycSuccess').endpoint;
const callBackURI = awsmobile.aws_cloud_logic_custom.find((resource) => resource.name === 'shopRestKycCallback')
	.endpoint;

// const shopSuccessUri = 'http://shop.kantor.kosevych.info/waitingkyc';
// const shopFailedUri = 'http://shop.kantor.kosevych.info/kycfailed';

const verifyAddress = 'https://lon.netverify.com/api/v4/initiate';

const redirectAddress = 'https://shop.kantor.kosevych.info';
const headers = {
	'Content-Type': 'application/json',
	'User-Agent': 'kantorClient kantorApp/v.1.1',
};

const storeTempLink = async (linkID, customerId, verificationId, redirectLink) => {
	// const graphCall = new AWS.HttpRequest(appsyncUrl, region);
	const tempLink = {
		input: {
			id: linkID,
			customerId: customerId,
			transactionId: verificationId,
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
};

module.exports = async (customerId, verificationId) => {
	const internalLinkId = uuid();
	const { data } = await axios.post(
		verifyAddress,
		{
			customerInternalReference: `${customerId}`,
			userReference: `${verificationId}`,
			successUrl: `${redirectAddress}/processingkyc/${internalLinkId}`,
			errorUrl: `${redirectAddress}/kycfailed/${internalLinkId}`,
			callbackUrl: `${callBackURI}/kycresult/callback/${internalLinkId}`,
			workflowId: 100,
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
	await storeTempLink(internalLinkId, customerId, verificationId, redirectUrl);
	return redirectUrl;
};
