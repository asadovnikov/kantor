import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Select, Row, Col, Input, InputNumber, Typography } from 'antd';
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
const { Option } = Select;
const { Title } = Typography;

const rateURI = (currency) =>
	`https://api.coinlayer.com/api/live?access_key=68067b671383b2e296479c087ece3398&target=${currency}&symbols=BTC`;

const BTCForm = ({ value = {}, onChange }) => {
	const [number, setNumber] = useState(0);
	const [currency, setCurrency] = useState('EUR');
	const [btc, setBTC] = useState(0);

	const triggerChange = (changedValue) => {
		axios.get(rateURI(currency)).then(({ rates }) => {
			setBTC(rates.BTC * number);
		});
		if (onChange) {
			onChange({
				number,
				currency,
				btc,
				...value,
				...changedValue,
			});
		}
	};

	const onNumberChange = (e) => {
		const newNumber = parseInt(e.target.value || 0, 10);

		if (Number.isNaN(number)) {
			return;
		}

		if (!('number' in value)) {
			setNumber(newNumber);
		}

		triggerChange({
			number: newNumber,
		});
	};

	const onCurrencyChange = (newCurrency) => {
		if (!('currency' in value)) {
			setCurrency(newCurrency);
		}

		triggerChange({
			currency: newCurrency,
		});
	};
	return (
		<>
			<Row>
				<Col span={8} offset={8}>
					<Title level={4}>Buy BTC</Title>
				</Col>
			</Row>
			<Row>
				<Col span={16} offset={4}>
					<Input type='text' value={value.number || number} onChange={onNumberChange} />
				</Col>
			</Row>
			<Row>
				<Col span={16} offset={4}>
					<Input type='text' value={value.number || number} onChange={onNumberChange} />
				</Col>
			</Row>
			<Row>
				<Col span={16} offset={4}>
					<Select value={value.currency || currency} onChange={onCurrencyChange}>
						<Option value='EUR'>Euro</Option>
						<Option value='USD'>US Dollar</Option>
					</Select>
				</Col>
			</Row>
			<Row>
				<Col span={8} offset={8}>
					<Title level={4}>{btc}</Title>
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
	const checkPrice = (rule, value) => {
		if (value.number > 0) {
			return Promise.resolve();
		}

		return Promise.reject('Price must be greater than zero!');
	};

	const onFinishForm = ({ user }) => {
		console.log(user);
		buildHash(`p@s5w0Rd123200604201617${user.FiatCurrency}${user.FiatAmount * 100}`).then((hash) => {
			const formData = new FormData();
			formData.append('Signature', hash);
			formData.append('MerchantName', 'Dummy1');
			formData.append('MerchantPassword', 'p@s5w0Rd123');
			formData.append('MerchantRef', '200604201617');
			formData.append('Currency', user.FiatCurrency);
			formData.append('Amount', user.FiatAmount * 100);
			formData.append('SuccessURL', 'https://dev.kantor.kosevych.info/success');
			formData.append('FailURL', 'https://dev.kantor.kosevych.info/success/failed');
			formData.append('CallbackURL', 'https://dev.kantor.kosevych.info/kyc');
			formData.append('Firstname', 'John');
			formData.append('Surname', 'Philips');
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
				<Card title='Buy BTC'>
					<Form
						onFinish={onFinishForm}
						labelCol={{
							span: 4,
						}}
						wrapperCol={{
							span: 20,
						}}
						layout='horizontal'
						size='large'>
						<Form.Item
							name={['user', 'FiatAmount']}
							label='Input'
							rules={[
								{
									required: true,
									type: 'number',
									min: 1,
									max: 9999,
									message: 'Please enter amount',
								},
							]}>
							<InputNumber />
						</Form.Item>
						<Form.Item
							name={['user', 'FiatCurrency']}
							label='Currency'
							rules={[
								{
									required: true,
									message: 'Please select currency',
								},
							]}>
							<Select placeholder='Please select a currency'>
								<Option value='EUR'>EUR</Option>
								<Option value='USD'>USD</Option>
							</Select>
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
