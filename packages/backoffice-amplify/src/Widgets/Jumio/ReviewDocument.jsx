import React, { useState } from 'react';
import { Row, Col, Switch } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { API, graphqlOperation } from 'aws-amplify';
import { updateJumioVerifyMetaData } from '../../backGraph/mutations';

const retriveJumioData = async (scanRef) => {
	const { data } = await API.get('api6c829185', `/jumiodata/${scanRef}`);
	return data;
};

export const ReviewDocumentWidget = ({ status = 'PENDING', jumioDocId }) => {
	const [reviewedSate, setReviewedState] = useState(status === 'VERIFIED');
	const [saving, setSaving] = useState(false);

	const updateVerificationStatus = async (reviewed) => {
		return await API.graphql(
			graphqlOperation(updateJumioVerifyMetaData, {
				input: {
					id: jumioDocId,
					JumioVerifyStatus: reviewed ? 'VERIFIED' : 'PENDING',
				},
			})
		);
	};
	const reviewDocument = () => {
		setSaving(true);
		setReviewedState(!reviewedSate);
		updateVerificationStatus(!reviewedSate)
			.catch((err) => console.error(err))
			.finally(() => {
				setSaving(false);
			});
	};
	return (
		<>
			<Col key='ReviewStatus' span={24}>
				<Row gutter={[16, 16]} justify='start'>
					<Col>
						<Switch
							checked={reviewedSate}
							loading={saving}
							onChange={reviewDocument}
							checkedChildren={<CheckOutlined />}
							unCheckedChildren='Reviewed'
							defaultChecked
						/>
					</Col>
				</Row>
			</Col>
		</>
	);
};
