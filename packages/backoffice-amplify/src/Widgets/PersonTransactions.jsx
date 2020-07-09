import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { DataTable } from '../Components';
import { Empty, Typography, Spin, Space } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { listTransactions } from '../backGraph/queries';

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

export const PersonTransactionsWidget = ({ person = {} }) => {
	const { PaymentTransactions = {}, email } = person;
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
						setTransactions(items.filter((item) => item.Email === person.Email));
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, [person]);
	return (
		<>
			<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
				{transactions.length > 0 ? (
					<DataTable
						pagination={{ pageSize: 5 }}
						scroll={{ y: 300 }}
						bordered={true}
						size='small'
						data={transactions.map((item) => {
							return {
								...item,
								transactionFiat: `${(parseInt(item.FiatAmount) / 100).toFixed(2)} ${item.FiatCurrency}`,
								transactionCrypto: `${parseFloat(item.CryptoAmount).toFixed(8)} ${item.CryptoCurrency}`,
								createdOn: new Date(item.createdOn).toLocaleString(),
							};
						})}
						columns={dataColumns}
					/>
				) : (
					<Empty />
				)}
			</Spin>
		</>
	);
};
