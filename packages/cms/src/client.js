// import gql from 'graphql-tag';
const {AWSAppSyncClient} = require('aws-appsync');
const {awsmobile} = require('./aws-exports');

// const { AUTH_TYPE } = AWSAppSyncClient;

exports.appClient = new AWSAppSyncClient({
	url: awsmobile.aws_appsync_graphqlEndpoint,
	region: awsmobile.aws_appsync_region,
	auth: {
		type: 'API_KEY', // or type: awsconfig.aws_appsync_authenticationType,
		apiKey: awsmobile.aws_appsync_apiKey,
	},
});
