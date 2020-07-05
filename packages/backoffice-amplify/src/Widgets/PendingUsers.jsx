import React, { useState, useEffect } from 'react';
import { DataTable } from '../Components';
import { Empty, Spin, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listCustomers } from '../graphql/queries';
import { UserSwitchOutlined, MinusSquareOutlined, CheckOutlined } from '@ant-design/icons';

const { Text } = Typography;

const getKycIcon = (state) => {
	if (state === 'NOT_REQUIRED') {
		return <MinusSquareOutlined />;
	} else if (state === 'FAILED') {
		return <UserSwitchOutlined />;
	} else {
		return <CheckOutlined />;
	}
};
const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const PendingUserWidget = ({ kycState, showAll = false }) => {
	const dataColumns = [
		{
			title: 'Name',
			dataIndex: 'Firstname',
			key: 'Firstname',
			render: (text, record) => {
				console.log(record);
				return (
					<Link to={`/customer/${record.id}`}>
						<Space direction='vertical'>
							<Text strong>
								{text} {record.Surname}
							</Text>
							<Text type='secondary'>{record.Email}</Text>
						</Space>
					</Link>
				);
			},
		},
		{
			title: 'ID',
			key: 'IDVerification',
			dataIndex: 'KYCState',
			render: (text, record) => {
				return getKycIcon(record.KYCVerification.idVerification);
			},
		},
		{
			title: 'POA',
			key: 'POAVerification',
			dataIndex: 'KYCState',
			render: (text, record) => {
				return getKycIcon(record.KYCVerification.poaVerification);
			},
		},
		{
			title: 'Finance',
			key: 'FinanceVerification',
			dataIndex: 'KYCState',
			render: (text, record) => {
				return getKycIcon(record.KYCVerification.financeVerification);
			},
		},
		{
			title: 'Country',
			dataIndex: 'Country',
			key: 'Country',
		},
		{
			title: 'City',
			dataIndex: 'City',
			key: 'City',
		},
		{
			title: 'State/Province',
			dataIndex: 'StateProvince',
			key: 'StateProvince',
		},
		{
			title: 'Postal code',
			dataIndex: 'PostalCode',
			key: 'PostalCode',
		},
		{
			title: 'Created',
			dataIndex: 'createdOn',
			key: 'CreatedOn',
		},
	];
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const hasKYCStatus = (verification) => {
		return (
			verification.financeVerification === kycState ||
			verification.poaVerification === kycState ||
			verification.idVerification === kycState
		);
	};

	useEffect(() => {
		setLoading(true);
		let canceled = false;
		API.graphql(graphqlOperation(listCustomers))
			.then(
				({
					data: {
						listCustomers: { items },
					},
				}) => {
					if (!canceled) {
						console.log(items);
						if (showAll === true) {
							setUsers(items);
						} else {
							setUsers(
								items.filter((customer) => {
									return hasKYCStatus(customer.KYCVerification);
								})
							);
						}
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, []);

	return (
		<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
			{users.length > 0 ? (
				<DataTable
					data={users.map((user) => {
						return {
							...user,
							createdOn: new Date(user.createdOn).toLocaleString(),
						};
					})}
					columns={dataColumns}
				/>
			) : (
				<Empty />
			)}
		</Spin>
	);
};
