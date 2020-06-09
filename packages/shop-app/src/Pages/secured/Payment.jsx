import React, { useEffect, useState } from 'react';
import { Select, Input, Typography, Space } from 'antd';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
const { Option } = Select;
const { Title, Text } = Typography;

const rateURI = (currency) =>
	`https://api.coinlayer.com/api/live?access_key=68067b671383b2e296479c087ece3398&target=${currency}&symbols=BTC`;

const BTCForm = ({ value = {}, onChange }) => {
	const [FiatAmount, setFiatAmount] = useState(0);
	const [FiatCurrency, setFiatCurrency] = useState('EUR');
	const [fee, setFee] = useState(0);
	const [btc, setBTC] = useState(0);

	useEffect(() => {
		let isMounted = true;
		if (FiatAmount > 0) {
			axios.get(rateURI(FiatCurrency)).then(({ data }) => {
				const {
					rates: { BTC },
				} = data;
				// debugger;

				console.log(FiatAmount / BTC);
				setBTC((FiatAmount / BTC).toFixed(6));
				setFee(FiatAmount / 10);
			});
		}
		return () => {
			isMounted = false;
		};
	}, [FiatAmount, FiatCurrency]);

	const triggerChange = (changedValue) => {
		if (onChange) {
			onChange({
				FiatAmount,
				FiatCurrency,
				btc,
				...value,
				...changedValue,
			});
		}
	};

	const onFiatAmountChange = (e) => {
		const newFiatAmount = parseInt(e.target.value || 0, 10);

		if (Number.isNaN(FiatAmount)) {
			return;
		}

		if (!('FiatAmount' in value)) {
			setFiatAmount(newFiatAmount);
		}

		triggerChange({
			FiatAmount: newFiatAmount,
		});
	};

	const onFiatCurrencyChange = (newFiatCurrency) => {
		if (!('FiatCurrency' in value)) {
			setFiatCurrency(newFiatCurrency);
		}

		triggerChange({
			FiatCurrency: newFiatCurrency,
		});
	};
	return (
		<FormContent actionText='Buy'>
			<FormContentRow>
				<Input
					className='fiat-amount-input'
					type='text'
					value={value.FiatAmount || FiatAmount}
					onChange={onFiatAmountChange}
				/>
			</FormContentRow>
			<FormContentRow>
				<Select
					size='large'
					className='fiat-currency-select'
					value={value.FiatCurrency || FiatCurrency}
					onChange={onFiatCurrencyChange}>
					<Option value='EUR'>Euro</Option>
					<Option value='USD'>US Dollar</Option>
				</Select>
			</FormContentRow>
			<FormContentRow>
				<Space direction='vertical' style={{ margin: '5px 0' }}>
					<Text strong>You receive</Text>
					<Text type='secondary' level={4}>
						~ {btc} BTC
					</Text>
					<Text strong>Processing fee</Text>
					<Text type='secondary' level={4}>
						{fee} {FiatCurrency} (10%)
					</Text>
				</Space>
			</FormContentRow>
			<FormContentRow>
				<Select size='large' block placeholder='Select destination wallet' className='btc-wallet-select'>
					<Option value='EUR'>Euro</Option>
					<Option value='USD'>US Dollar</Option>
				</Select>
			</FormContentRow>
		</FormContent>
	);
};

const buildHash = async (str) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(str);
	const hashArray = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', data)));
	return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};

const PaymentPage = () => {
	const checkPayment = (rule, value) => {
		if (value.FiatAmount > 0) {
			return Promise.resolve();
		}

		return Promise.reject('Payment must be greater than zero!');
	};

	const onFinishForm = ({ payment }) => {
		console.log(payment);
		buildHash(`p@s5w0Rd123200604201617${payment.FiatCurrency}${payment.FiatAmount * 100}`).then((hash) => {
			const formData = new FormData();
			formData.append('Signature', hash);
			formData.append('MerchantName', 'Dummy1');
			formData.append('MerchantPassword', 'p@s5w0Rd123');
			formData.append('MerchantRef', '200604201617');
			formData.append('Currency', payment.FiatCurrency);
			formData.append('Amount', payment.FiatAmount * 100);
			formData.append('SuccessURL', 'https://dev.kantor.kosevych.info/success');
			formData.append('FailURL', 'https://dev.kantor.kosevych.info/success/failed');
			formData.append('CallbackURL', 'https://dev.kantor.kosevych.info/kyc');
			formData.append('Firstname', 'Jerome');
			formData.append('Surname', 'K. Jerome');
			formData.append('StreetLine1', '92 West Broadway');
			formData.append('StreetLine2', '');
			formData.append('City', 'New York');
			formData.append('PostalCode', 10007);
			formData.append('StateProvince', 'NY');
			formData.append('Country', 'US');
			formData.append('Email', 'john.phillips.1972@gmail.com');
			formData.append('Telephone', '212 566 1901');
			formData.append('DateOfBirth', '1982-08-29');
			var form = document.createElement('form');
			document.body.appendChild(form);
			form.method = 'post';
			form.action = 'https://gw-test.cgate.tech/orion/hosted/Payment.aspx';
			form.innerHTML = [...formData.entries()].map((e) => `<input type='hidden' name='${e[0]}' value='${e[1]}' />`);
			form.submit();
		});
	};
	return (
		<FormLayout>
			<FormHeader Main={`Buy BTC`} Secondary={`Let's buy some crypto`} />
			<BTCForm />
		</FormLayout>
	);
};

export default withAuthenticator(PaymentPage);
