import React from 'react';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Descriptions } from 'antd';

const data = [
	{
		date: '10 May, 2020, 18:38:04',
		fiatAmount: '10',
		fiatCurrency: 'EUR',
		cryptoAmount: '0.0011644520634077173',
		wallet: 'My BTC wallet',
	},
	{
		date: '3 May, 2020, 17:30:47',
		fiatAmount: '15',
		fiatCurrency: 'EUR',
		cryptoAmount: '0.0017466025405844415',
		wallet: 'My BTC wallet',
	},
	{
		date: '27 April, 2020, 11:15:01',
		fiatAmount: '20',
		fiatCurrency: 'EUR',
		cryptoAmount: '0.0002328803387445922',
		wallet: 'My BTC wallet',
	},
	{
		date: '8 March, 2020, 10:08:17',
		fiatAmount: '50',
		fiatCurrency: 'EUR',
		cryptoAmount: '0.005822008468614805',
		wallet: 'My BTC wallet',
	},
];

const details = () => {
	return data.map((item) => {
		return (
			<>
				<Descriptions bordered size='small' title={item.date}>
					<Descriptions.Item label='Bought'>{item.cryptoAmount} BTC</Descriptions.Item>
					<Descriptions.Item label='Payment'>
						{item.fiatAmount} {item.fiatCurrency}
					</Descriptions.Item>
					<Descriptions.Item label='Destination'>{item.wallet}</Descriptions.Item>
					<Descriptions.Item label='Details'>
						BTC exchange rate: 8583.73
						<br />
					</Descriptions.Item>
				</Descriptions>
				<br />
				<br />
			</>
		);
	});
};

const MyTransactions = () => {
	const res = details();
	return (
		<FormLayout>
			<FormHeader Main='My transactions' Secondary='Review you successful transactions' />
			<FormContent>
				<ul>
					<li>Дата транзакции</li>
					<li>Сколько списали</li>
					<li>Адрес кошелька не имя</li>
					<li>Рейт не нужен</li>
				</ul>
				<FormContentRow>{res}</FormContentRow>
			</FormContent>
		</FormLayout>
	);
};

export default withAuthenticator(MyTransactions);
