import React from 'react';
import { DataTable } from '../Components';
import { Empty, Typography } from 'antd';

const { Text } = Typography;

const dataColumns = [
	{
		title: 'Date',
		dataIndex: 'createdOn',
		key: 'CreatedOn',
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

export const PersonTransactionsWidget = ({ person = {} }) => {
	const { PaymentTransactions = {} } = person;

	const { items = [] } = PaymentTransactions;

	return (
		<>
			{items.length > 0 ? (
				<DataTable
					pagination={{ pageSize: 5 }}
					scroll={{ y: 300 }}
					bordered={true}
					size='small'
					data={items.map((item) => {
						return {
							...item,
							createdOn: new Date(item.createdOn).toLocaleString(),
						};
					})}
					columns={dataColumns}
				/>
			) : (
				<Empty />
			)}
		</>
	);
};
