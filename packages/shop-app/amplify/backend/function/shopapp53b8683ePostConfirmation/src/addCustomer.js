const https = require('https');
const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');
const urlParse = require('url').URL;
const appsyncUrl = 'https://65bzidq5oremnlxqif7lckgqcy.appsync-api.us-east-1.amazonaws.com/graphql';
const region = 'us-east-1';
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const createCustomerQuery = require('./customer.js').mutation;
const createVerificationQuery = require('./verification.js').mutation;
const apiKey = 'da2-ay7fisbaqrd3tid7nrisjksjka';

const createVerification = async (verificationId) => {
	console.log('Add verification');
	const req = new AWS.HttpRequest(appsyncUrl, region);
	const verification = {
		input: {
			id: verificationId,
			idVerification: 'FAILED',
			poaVerification: 'FAILED',
			financeVerification: 'FAILED',
		},
	};

	req.method = 'POST';
	req.headers.host = endpoint;
	req.headers['Content-Type'] = 'application/json';
	req.body = JSON.stringify({
		query: createVerificationQuery,
		operationName: 'CreateVerification',
		variables: verification,
	});

	if (apiKey) {
		req.headers['x-api-key'] = apiKey;
	} else {
		const signer = new AWS.Signers.V4(req, 'appsync', true);
		signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
	}

	const data = await new Promise((resolve, reject) => {
		const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
			result.on('data', (data) => {
				resolve(JSON.parse(data.toString()));
			});
		});

		httpRequest.write(req.body);
		httpRequest.end();
	});

	return {
		statusCode: 200,
		body: data,
	};
};

exports.addCustomer = async (event) => {
	const req = new AWS.HttpRequest(appsyncUrl, region);
	const verificationId = uuid();
	const {
		request: { userAttributes },
	} = event;

	await createVerification(verificationId);

	const customer = {
		input: {
			id: event.userName,
			Firstname: userAttributes['custom:firstName'],
			Surname: userAttributes['custom:lastName'],
			DateOfBirth: userAttributes['custom:dateOfBirth'],
			StreetLine1: userAttributes['custom:homeAddress'],
			StreetLine2: userAttributes['custom:homeAddress2'],
			City: userAttributes['custom:city'],
			PostalCode: userAttributes['custom:postalCode'],
			StateProvince: userAttributes['custom:region'],
			Country: userAttributes['custom:country'],
			Email: userAttributes.email,
			Telephone: userAttributes['custom:phoneNumber'],
			FiatCurrency: 'EUR',
			FiatTotalAmount: `0`,
			FiatDailyAmount: '0',
			FiatMonthlyAmount: `0`,
			Tier: 'HIGH',
			KYCState: 'INITIATED',
			VerificationID: verificationId,
			customerKYCVerificationId: verificationId,
			EmploymentStatus: userAttributes['custom:employmentStatus'],
			SourceOfFunds: userAttributes['custom:sourceOfFunds'],
			Occupation: userAttributes['custom:occupation'],
			AnnualDeposit: userAttributes['custom:yearIncome'],
		},
	};

	req.method = 'POST';
	req.headers.host = endpoint;
	req.headers['Content-Type'] = 'application/json';
	req.body = JSON.stringify({
		query: createCustomerQuery,
		operationName: 'CreateCustomer',
		variables: customer,
	});

	if (apiKey) {
		req.headers['x-api-key'] = apiKey;
	} else {
		const signer = new AWS.Signers.V4(req, 'appsync', true);
		signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
	}
	console.log('Adding customer');
	const data = await new Promise((resolve, reject) => {
		const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
			result.on('data', (data) => {
				resolve(JSON.parse(data.toString()));
			});
		});

		httpRequest.write(req.body);
		httpRequest.end();
	});

	return {
		statusCode: 200,
		body: data,
	};
};
