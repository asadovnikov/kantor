const axios = require('axios');
const { v4: uuid } = require('uuid');
const { awsmobile } = require('./aws-exports');
const graphql = require('graphql');
const { createJumioVerifyMetaData, updateVerification } = require('./graphql/mutations');
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
		console.log(JSON.stringify(jumioData));
	} catch (error) {
		console.log(error);
	}
};

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
				console.log(JSON.stringify(jumioData));
			} catch (error) {
				console.log(error);
			}
		}
	}
};

module.exports = async (tempLinkId, req) => {
	try {
		const { transactionId } = await resolveLink(tempLinkId);
		await addJumioMeta(transactionId, JSON.stringify(req.body), JSON.stringify(req.body), 'ID Verify');
		await updateVerificationState(transactionId, req.body);
	} catch (error) {
		console.log(error);
	}
	//res.redirect(shopSuccessUri);
};
