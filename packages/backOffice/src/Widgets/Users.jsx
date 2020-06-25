import React, { useState, useEffect } from 'react';
import { DataTable } from '../Components';
import { Empty, Spin, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { API, graphqlOperation } from 'aws-amplify';
import { listCustomers } from '../graphql/queries';

const { Text } = Typography;

const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const dataColumns = [
	{
		title: 'Name',
		dataIndex: 'Firstname',
		key: 'Firstname',
		render: (text, record) => {
			console.log(record);
			return (
				<Space direction='vertical'>
					<Text strong>
						{text} {record.Surname}
					</Text>
					<Text type='secondary'>{record.Email}</Text>
				</Space>
			);
		},
	},
	{
		title: 'KYC',
		dataIndex: 'KYCState',
		key: 'KYCState',
	},
	{
		title: 'Tier',
		dataIndex: 'Tier',
		key: 'Tier',
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

export const UserWidget = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

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
						setUsers(items);
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
