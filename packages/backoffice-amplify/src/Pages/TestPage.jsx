import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { createCustomer, createVerification, createTransaction } from '../graphql/mutations';
import { getCustomer } from '../graphql/queries';
// import { UserWidget } from '../Widgets';

const currentRate = 0.0001213;
const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const TestPage = () => {
	const [message, setMessage] = useState();

	const userId = '82495a76-a487-4bab-8e13-f2774446aa26';

	const createCustomerTransaction = async () => {
		try {
			// debugger;
			const {
				data: { getCustomer: customer },
			} = await API.graphql(graphqlOperation(getCustomer, { id: userId }));
			const fiatAmount = getRandomInt(1, 100);
			const cryptoAmount = fiatAmount * currentRate;
			const result = await API.graphql(
				graphqlOperation(createTransaction, {
					input: {
						id: uuid(),
						Firstname: customer.Firstname,
						Surname: customer.Surname,
						DateOfBirth: customer.DateOfBirth,
						StreetLine1: customer.StreetLine1,
						StreetLine2: customer.StreetLine2,
						City: customer.City,
						PostalCode: customer.PostalCode,
						StateProvince: customer.StateProvince,
						Country: customer.Country,
						Email: customer.Email,
						Telephone: customer.Telephone,
						FiatCurrency: 'EUR',
						FiatBaseAmount: `${fiatAmount * 100}`,
						FiatAmount: `${fiatAmount * 100}`,
						CryptoCurrency: 'BTC',
						CryptoAmount: `${cryptoAmount}`,
						CryptoAddress: '3FwCAjjt9Xwhvc3kpZgrBLYSc1LkhsihBk',
						GWReference: uuid(),
						BankReference: uuid(),
						MerchantRef: uuid(),
						transactionCustomerId: userId,
					},
				})
			);
			setMessage(JSON.stringify(result));
		} catch (err) {
			setMessage(JSON.stringify(err));
			console.log(err);
		}
	};

	const createCustomerHndl = async () => {
		try {
			const verificationId = uuid();
			const verification = await API.graphql(
				graphqlOperation(createVerification, {
					input: {
						id: verificationId,
						idVerification: 'NOT_REQUIRED',
						poaVerification: 'NOT_REQUIRED',
						financeVerification: 'NOT_REQUIRED',
					},
				})
			);
			console.log(verification);
			const result = await API.graphql(
				graphqlOperation(createCustomer, {
					input: {
						id: uuid(),
						Firstname: `${verificationId}`,
						Surname: 'GraphApiSecondName',
						StreetLine1: 'GraphApi 4724  Longview Avenue',
						City: 'Some',
						PostalCode: '04086',
						StateProvince: 'NY',
						Country: 'US',
						Email: `${verificationId}@otso.city`,
						FiatCurrency: 'USD',
						FiatTotalAmount: '0',
						FiatDailyAmount: '0',
						FiatMonthlyAmount: '0',
						Tier: 'INITIAL',
						KYCState: 'INITIATED',
						VerificationID: verificationId,
						customerKYCVerificationId: verificationId,
					},
				})
			);
			console.log(result);
			setMessage(JSON.stringify(result));
		} catch (err) {
			setMessage(JSON.stringify(err));
			console.log(err);
		}
	};

	return (
		<>
			<Space direction='vertical'>
				<Button onClick={createCustomerHndl}>Create customer</Button>
				<Button onClick={createCustomerTransaction}>Create transaction</Button>
				<Button>Create Comment</Button>
				<Button>Create KYC document</Button>
				<Button>Create Verification</Button>
			</Space>
			<div>{message}</div>
		</>
	);
};
