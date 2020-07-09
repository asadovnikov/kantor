/* eslint-disable-line */ const aws = require('aws-sdk');
const { addCustomer } = require('./addCustomer');

exports.handler = async (event, context, callback) => {
	const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
	const groupParams = {
		GroupName: process.env.GROUP,
		UserPoolId: event.userPoolId,
	};

	const addUserParams = {
		GroupName: process.env.GROUP,
		UserPoolId: event.userPoolId,
		Username: event.userName,
	};

	console.log(JSON.stringify(event));

	try {
		await cognitoidentityserviceprovider.getGroup(groupParams).promise();
	} catch (e) {
		await cognitoidentityserviceprovider.createGroup(groupParams).promise();
	}

	try {
		await addCustomer(event);
	} catch (error) {
		console.log(error);
	}

	try {
		await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
		callback(null, event);
	} catch (e) {
		callback(e);
	}
};
