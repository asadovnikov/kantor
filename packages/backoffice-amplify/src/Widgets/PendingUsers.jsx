import React, { useState, useEffect } from 'react';
import { DataTable } from '../Components';
import { Empty, Spin, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listCustomers } from '../backGraph/queries';
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
			title: 'Email',
			dataIndex: 'Email',
			key: 'Email',
			ellipsis: true,
			width: 250,
			sorter: {
				compare: (a, b) => (a.Email > b.Email) - (a.Email < b.Email),
				multiple: 1,
			},
		},
		{
			title: 'Name',
			dataIndex: 'customerName',
			key: 'customerName',
			width: 250,
			ellipsis: true,
			sorter: {
				compare: (a, b) => (a.customerName > b.customerName) - (a.customerName < b.customerName),
				multiple: 1,
			},
		},
		{
			title: 'ID',
			width: 100,
			align: 'center',
			key: 'IDVerification',
			dataIndex: 'KYCState',
			render: (text, record) => {
				return getKycIcon(record.KYCVerification.idVerification);
			},
		},
		{
			title: 'POA',
			align: 'center',
			width: 100,
			key: 'POAVerification',
			dataIndex: 'KYCState',
			render: (text, record) => {
				return getKycIcon(record.KYCVerification.poaVerification);
			},
		},
		{
			title: 'Finance',
			align: 'center',
			width: 100,
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
			sorter: {
				compare: (a, b) => (a.Country > b.Country) - (a.Country < b.Country),
				multiple: 1,
			},
			ellipsis: true,
		},
		{
			title: 'City',
			dataIndex: 'City',
			key: 'City',
			ellipsis: true,
		},
		{
			title: 'Area',
			dataIndex: 'StateProvince',
			key: 'StateProvince',
			ellipsis: true,
		},
		{
			title: 'Zip',
			dataIndex: 'PostalCode',
			key: 'PostalCode',
			ellipsis: true,
		},
		{
			title: 'Created',
			dataIndex: 'createdOn',
			key: 'CreatedOn',
			width: 200,
			sorter: {
				compare: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
				multiple: 1,
			},
		},
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'id',
			fixed: 'right',
			width: 100,
			render: (text, record) => {
				console.log(record);
				return <Link to={`/customer/${record.id}`}>Details</Link>;
			},
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
							customerName: `${user.Firstname}, ${user.Surname}`,
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
