const axios = require('axios');
const { v4: uuid } = require('uuid');
const { awsmobile } = require('./aws-exports');
const graphql = require('graphql');
const { createJumioVerifyMetaData, updateVerification, createComment } = require('./graphql/mutations');
const { getTemporaryLinks } = require('./graphql/queries');

const { print } = graphql;
const appsyncUrl = awsmobile.aws_appsync_graphqlEndpoint;
const apiKey = awsmobile.aws_appsync_apiKey;

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

const verifyStatus = (jumioData) => {
	return jumioData.callBackType === 'NETVERIFYID' && jumioData.verificationStatus === 'APPROVED_VERIFIED' ? 'VERIFIED' : 'PENDING'
}

const addJumioMeta = async (verificationId, data, meta, verType) => {
	const jumioMeta = {
		input: {
			id: uuid(),
			dataInput: JSON.stringify(data),
			verificationID: verificationId,
			inputType: verType,
			metaInfo: meta,			
			JumioVerifyStatus: verifyStatus(data),			
		},
	};
	try {
		const jumioData = await axios({
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
		const {data} = jumioData;
		console.log(JSON.stringify(data));
	} catch (error) {
		console.log(error);
	}
};

const addComment = async (customerId, comment) => {
	const commentData = {
		input: {
			id: uuid(),
      content: comment,
      customerID: customerId,
      Author: 'Background Processing',
      AuthorEmail: 'automation@cryptomine.com'	
		},
	};
	try {
		const commentDataResult = await axios({
			url: appsyncUrl,
			method: 'post',
			headers: {
				'x-api-key': apiKey,
			},
			data: {
				query: print(createComment),
				variables: commentData,
			},
		});
		const {data} = commentDataResult;
		console.log(JSON.stringify(data));
	} catch (error) {
		console.log(error);
	}
}

const updateVerificationState = async (verificationId, jumioData) => {
	if (jumioData.callBackType === 'NETVERIFYID') {
		if (jumioData.verificationStatus === 'APPROVED_VERIFIED') {
			const verificationData = {
				input: {
					id: verificationId,
					idVerification: 'VALIDATED',
				},
			};
			try {
				const jumioData = await axios({
					url: appsyncUrl,
					method: 'post',
					headers: {
						'x-api-key': apiKey,
					},
					data: {
						query: print(updateVerification),
						variables: verificationData,
					},
				});
				const {data} = jumioData;
				console.log(JSON.stringify(data));
				await addComment(jumioData.customerId, 'ID verified by Jumio');
			} catch (error) {
				console.log(error);
			}
		}
	}
};

module.exports = async (tempLinkId, req) => {
	try {
		const { transactionId } = await resolveLink(tempLinkId);
		await addJumioMeta(transactionId, req.body, JSON.stringify(req.body), 'ID Verify');
		await updateVerificationState(transactionId, req.body);
	} catch (error) {
		console.log(error);
	}
	//res.redirect(shopSuccessUri);
};
