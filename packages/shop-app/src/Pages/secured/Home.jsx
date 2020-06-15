import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import gql from 'graphql-tag';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../..//graphql/queries';
import { appClient } from '../../client';
import { WithKantorAuth } from '../../Components/withKantorAuth';
import DocumentsForm from '../registration/DocumentsForm';
import { Tabs, List, Typography, Table } from 'antd';

const { Text } = Typography;

const { TabPane } = Tabs;

const columnsCustomers = [
	{
		title: 'Name',
		key: 'CustomerName',
		render: (text, record) => (
			<Text strong>
				{record.Firstname} {record.Surname}
			</Text>
		),
	},
	{
		title: 'Email',
		dataIndex: 'Email',
	},
	{
		title: 'KYC',
		dataIndex: 'KYC_State',
	},
	{
		title: 'Tier',
		dataIndex: 'Tier',
	},
	{
		title: 'Daily Amount',
		dataIndex: 'FiatDailyAmount',
	},
	{
		title: 'Monthly Amount',
		dataIndex: 'FiatMonthlyAmount',
	},
	{
		title: 'Country',
		dataIndex: 'Country',
	},
	{
		title: 'City',
		dataIndex: 'City',
	},
	{
		title: 'PostalCode',
		dataIndex: 'PostalCode',
	},
	{
		title: 'Amount',
		dataIndex: 'FiatAmount',
	},
	{
		title: 'Currency',
		dataIndex: 'FiatCurrency',
	},
	{
		title: 'Crypto',
		dataIndex: 'CryptoAmount',
	},
	{
		title: 'Crypto Currency',
		dataIndex: 'CryptoCurrency',
	},
];

const columns = [
	{
		title: 'Name',
		key: 'CustomerName',
		render: (text, record) => (
			<Text strong>
				{record.Firstname} {record.Surname}
			</Text>
		),
	},
	{
		title: 'Email',
		dataIndex: 'Email',
	},
	{
		title: 'Country',
		dataIndex: 'Country',
	},
	{
		title: 'City',
		dataIndex: 'City',
	},
	{
		title: 'PostalCode',
		dataIndex: 'PostalCode',
	},
	{
		title: 'Amount',
		dataIndex: 'FiatAmount',
	},
	{
		title: 'Currency',
		dataIndex: 'FiatCurrency',
	},
	{
		title: 'Crypto',
		dataIndex: 'CryptoAmount',
	},
	{
		title: 'Crypto Currency',
		dataIndex: 'CryptoCurrency',
	},
];

function HomePage() {
	const [paymentRequests, setPaymentRequests] = useState([]);
	const [registeredTransactions, setRegisteredTransactions] = useState([]);
	const [recordedUsers, setRecordedUsers] = useState([]);
	// API.graphql(graphqlOperation(queries.listTransactions)).then(({ data: { listTransactions } }) => {
	//   setRegisteredTransactions(listTransactions.items);
	// });
	useEffect(() => {
		let isMounted = true;

		API.graphql(graphqlOperation(queries.listTransactions)).then(({ data: { listTransactions } }) => {
			if (isMounted) {
				console.log(listTransactions.items);
				setRegisteredTransactions(listTransactions.items);
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		let areUsersMounted = true;

		API.graphql(graphqlOperation(queries.listCustomers)).then(({ data: { listCustomers } }) => {
			if (areUsersMounted) {
				console.log(listCustomers.items);
				setRecordedUsers(listCustomers.items);
			}
		});
		return () => {
			areUsersMounted = false;
		};
	}, []);

	useEffect(() => {
		let arePaymentsMounted = true;

		API.graphql(graphqlOperation(queries.listPaymentRequests)).then(({ data: { listPaymentRequests } }) => {
			if (arePaymentsMounted) {
				console.log(listPaymentRequests.items);
				setPaymentRequests(listPaymentRequests.items);
			}
		});
		return () => {
			arePaymentsMounted = false;
		};
	}, []);

	return (
		<WithKantorAuth>
			<DocumentsForm />
		</WithKantorAuth>
	);
}

export default HomePage;
