import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Select, Row, Col, Input, Typography } from 'antd';
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
const { Option } = Select;
const { Title } = Typography;

const rateURI = (currency) =>
	`https://api.coinlayer.com/api/live?access_key=68067b671383b2e296479c087ece3398&target=${currency}&symbols=BTC`;

const BTCForm = ({ value = {}, onChange }) => {
	const [FiatAmount, setFiatAmount] = useState(value.FiatAmount);
	const [FiatCurrency, setFiatCurrency] = useState('EUR');
	const [btc, setBTC] = useState(0);

	axios.get(rateURI(FiatCurrency)).then(({ data }) => {
		const {
			rates: { BTC },
		} = data;
		// debugger;
		console.log(FiatAmount / BTC);
		setBTC(FiatAmount / BTC);
		// console.log(response);
	});

	const triggerChange = (changedValue) => {
		const obj = { ...value, ...changedValue };
		axios.get(rateURI(obj.FiatCurrency)).then(({ data }) => {
			const {
				rates: { BTC },
			} = data;
			// debugger;
			console.log(obj.FiatAmount / BTC);
			setBTC(obj.FiatAmount / BTC);
			// console.log(response);
		});
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
		<>
			<Row justify='center'>
				<Col>
					<Title level={4}>Buy BTC</Title>
				</Col>
			</Row>
			<Row>
				<Col span={16} offset={4}>
					<Input type='text' value={value.FiatAmount || FiatAmount} onChange={onFiatAmountChange} />
				</Col>
			</Row>
			<Row>
				<Col span={16} offset={4}>
					<Select value={value.FiatCurrency || FiatCurrency} onChange={onFiatCurrencyChange}>
						<Option value='EUR'>Euro</Option>
						<Option value='USD'>US Dollar</Option>
					</Select>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Title level={4}>{btc} BTC</Title>
				</Col>
			</Row>
		</>
	);
};

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
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
		<Row>
			<Col span={8} offset={8}>
				<Card title='Payment form'>
					<Form
						onFinish={onFinishForm}
						labelCol={{
							span: 4,
						}}
						wrapperCol={{
							span: 20,
						}}
						layout='horizontal'
						size='large'
						initialValues={{
							payment: {
								FiatAmount: 1,
								FiatCurrency: 'EUR',
							},
						}}>
						<Form.Item
							name='payment'
							rules={[
								{
									validator: checkPayment,
								},
							]}>
							<BTCForm />
						</Form.Item>

						<Form.Item>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Col>
		</Row>
	);
};

export default withAuthenticator(PaymentPage);
