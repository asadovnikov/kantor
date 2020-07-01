const gql = require('graphql-tag');

exports.getTemporaryLinks = gql`
	query GetTemporaryLinks($id: ID!) {
		getTemporaryLinks(id: $id) {
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
