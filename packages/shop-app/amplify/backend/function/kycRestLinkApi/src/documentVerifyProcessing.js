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

const verifyAddress = 'https://upload.lon.netverify.com/api/netverify/v2/acquisitions';

const redirectAddress = 'https://shop.kantor.kosevych.info';
const headers = {
	'Content-Type': 'application/json',
	'User-Agent': 'kantorClient kantorApp/v.1.1',
};

// BC (Birth certificate)
// BS (Bank statement)
// CAAP (Cash advance application)
// CB (Council bill)
// CC (Credit card)
// CCS (Credit card statement)
// CRC (Corporate resolution certificate)
// CUSTOM (Custom document type - see below)
// HCC (Health care card)
// IC (Insurance card)
// LAG (Lease agreement)
// LOAP (Loan application)
// MEDC (Medicare card)
// MOAP (Mortgage application)
// PB (Phone bill)
// SEL (School enrolment letter)
// SENC (Seniors card)
// SS (Superannuation statement)
// SSC (Social security card)
// STUC (Student card)
// TAC (Trade association card)
// TR (Tax return)
// UB (Utility bill)
// VC (Voided check)
// VT (Vehicle title)
// WWCC (Working with children check)

const storeTempLink = async (linkID, customerId, verificationId, redirectLink, documentType) => {
	// const graphCall = new AWS.HttpRequest(appsyncUrl, region);
	const tempLink = {
		input: {
			id: linkID,
			customerId: customerId,
			transactionId: verificationId,
			link: redirectLink,
			comment: 'forming document verify link: ${documentType}',
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

module.exports = async (customerId, verificationId, documentType) => {
	const internalLinkId = uuid();
	const { data } = await axios.post(
		verifyAddress,
		{
			customerId: `${customerId}`,
			merchantScanReference: `${verificationId}`,
			country: 'USA',
			type: documentType,
			successUrl: `${redirectAddress}/processingkyc/${internalLinkId}`,
			errorUrl: `${redirectAddress}/kycfailed/${internalLinkId}`,
			callbackUrl: `${callBackURI}/kycresult/callback/${internalLinkId}`,
			enableExtraction: true,
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
	const { clientRedirectUrl } = data;
	await storeTempLink(internalLinkId, customerId, verificationId, clientRedirectUrl, documentType);
	return clientRedirectUrl;
};
