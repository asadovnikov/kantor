/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.createTemporaryLinks = gql`
	mutation CreateTemporaryLinks($input: CreateTemporaryLinksInput!, $condition: ModelTemporaryLinksConditionInput) {
		createTemporaryLinks(input: $input, condition: $condition) {
			id
			customerId
			transactionId
			link
			comment
			createdOn
			updatedOn
			owner
		}
	}
`;
