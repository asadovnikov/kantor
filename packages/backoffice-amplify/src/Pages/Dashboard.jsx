import React, { useState, useEffect } from 'react';
import { Statistic, Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { API, graphqlOperation } from 'aws-amplify';
import { listVerificationsCount, listPendingJumioCount } from '../backGraph/queries';

const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const buildVerificationStats = async () => {
	const {
		data: {
			listVerifications: { items },
		},
	} = await API.graphql(
		graphqlOperation(listVerificationsCount, {
			filter: {
				or: [
					{ financeVerification: { ne: 'VALIDATED' } },
					{ poaVerification: { ne: 'VALIDATED' } },
					{ idVerification: { ne: 'VALIDATED' } },
				],
			},
		})
	);
	return items;
};

const buildJumioStats = async () => {
	const {
		data: {
			listJumioVerifyMetaDatas: { items = [] },
		},
	} = await API.graphql(graphqlOperation(listPendingJumioCount, { filter: { JumioVerifyStatus: { eq: 'PENDING' } } }));
	return items;
};

const statsData = async () => {
	return [await buildVerificationStats(), await buildJumioStats()];
};

export const DashboardPage = () => {
	const [loading, setLoading] = useState(false);
	const [verificationCount, setVerificationCount] = useState();
	const [pendingKYCCount, setPendingKYCCount] = useState();
	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		statsData()
			.then((data) => {
				if (!isCancelled) {
					const [verification, jumio] = data;
					setPendingKYCCount(jumio.length);
					setVerificationCount(verification.length);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (isCancelled = true);
	}, []);
	buildVerificationStats().catch((err) => console.error(err));
	return (
		<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
			<Row gutter={16}>
				<Col span={12}>
					<Statistic title='Pending customers' value={verificationCount} />
				</Col>
				<Col span={12}>
					<Statistic title='Pending KYC documents' value={pendingKYCCount} />
				</Col>
			</Row>
		</Spin>
	);
};
