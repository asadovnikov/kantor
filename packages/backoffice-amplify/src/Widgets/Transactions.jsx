import React, { useState, useEffect } from 'react';
import { DataTable } from '../Components';
import { Empty, Spin, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { API, graphqlOperation } from 'aws-amplify';
import { listTransactions } from '../graphql/queries';

const { Text } = Typography;

const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const dataColumns = [
	{
		title: 'Date',
		dataIndex: 'createdOn',
		key: 'CreatedOn',
	},
	{
		title: 'User',
		dataIndex: 'Firstname',
		key: 'Firstname',
		render: (text, record) => {
			// console.log(record);
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
		title: 'Fiat Amount',
		dataIndex: 'FiatAmount',
		key: 'FiatAmount',
		render: (text, record) => {
			return (
				<Text>
					{parseInt(text) / 100} {record.FiatCurrency}
				</Text>
			);
		},
	},
	{
		title: 'BTC Amount',
		dataIndex: 'CryptoAmount',
		key: 'CryptoAmount',
		render: (text, record) => {
			return (
				<Text>
					{text} {record.CryptoCurrency}
				</Text>
			);
		},
	},
	{
		title: 'BTC address',
		dataIndex: 'CryptoAddress',
		key: 'CryptoAddress',
	},
];

export const TransactionsWidget = () => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let canceled = false;
		API.graphql(graphqlOperation(listTransactions))
			.then(
				({
					data: {
						listTransactions: { items },
					},
				}) => {
					if (!canceled) {
						console.log(items);
						setTransactions(items);
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, []);

	return (
		<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
			{transactions.length > 0 ? (
				<DataTable
					data={transactions.map((transaction) => {
						return {
							...transaction,
							createdOn: new Date(transaction.createdOn).toLocaleString(),
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
