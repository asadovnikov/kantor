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
		key: 'createdOn',
		sorter: {
			compare: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
			multiple: 1,
		},
	},
	{
		title: 'Name',
		dataIndex: 'customerName',
		key: 'customerName',
		ellipsis: true,
	},
	{
		title: 'Email',
		dataIndex: 'Email',
		key: 'Email',
		ellipsis: true,
		sorter: {
			compare: (a, b) => (a.Email > b.Email) - (a.Email < b.Email),
			multiple: 1,
		},
	},
	{
		title: 'Fiat',
		dataIndex: 'transactionFiat',
		key: 'transactionFiat',
		ellipsis: true,
	},
	{
		title: 'BTC',
		dataIndex: 'transactionCrypto',
		key: 'transactionCrypto',
		ellipsis: true,
	},
	{
		title: 'BTC address',
		dataIndex: 'CryptoAddress',
		key: 'CryptoAddress',
		ellipsis: true,
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
							customerName: `${transaction.Firstname}, ${transaction.Surname}`,
							transactionFiat: `${(parseInt(transaction.FiatAmount) / 100).toFixed(2)} ${transaction.FiatCurrency}`,
							transactionCrypto: `${parseFloat(transaction.CryptoAmount).toFixed(8)} ${transaction.CryptoCurrency}`,
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
