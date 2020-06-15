import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Select, Input, Space } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from '../registration/components';
import { MaterialPass, MaterialTxt, MaterialCurrencySelect } from '../registration/components/LabeledInput';
// import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
const { Option } = Select;
// const { Title, Text } = Typography;

const walletsData = [
	{
		name: 'Main wallet',
		value: 'ifklsadhfklhaadsf',
	},
	{
		name: 'Brother wallet',
		value: 'dsns,mbfadsbfsda',
	},
];

const useStyles = makeStyles((theme) => ({
	listItem: {
		padding: theme.spacing(0, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
	},
	fee: {
		marginTop: '-10px',
	},
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const rateURI = (currency) =>
	`https://api.coinlayer.com/api/live?access_key=68067b671383b2e296479c087ece3398&target=${currency}&symbols=BTC`;

const BTCForm = ({ value = {}, onChange }) => {
	const classes = useStyles();
	const [FiatAmount, setFiatAmount] = useState(0);
	const [FiatCurrency, setFiatCurrency] = useState('EUR');
	const [fee, setFee] = useState(0);
	const [btc, setBTC] = useState(0);
	const [btcWallet, setBTCWallet] = useState();
	const [loading, setLoading] = useState(false);

	const doPayment = async () => {
		setLoading(true);
		try {
			const hash = await buildHash(`p@s5w0Rd123200604201617${FiatCurrency}${FiatAmount * 100}`);
			const user = await Auth.currentAuthenticatedUser();
			const formData = new FormData();
			formData.append('Signature', hash);
			formData.append('MerchantName', 'Dummy1');
			formData.append('MerchantPassword', 'p@s5w0Rd123');
			formData.append('MerchantRef', '200604201617');
			formData.append('Currency', FiatCurrency);
			formData.append('Amount', FiatAmount * 100);
			formData.append('SuccessURL', 'https://dev.kantor.kosevych.info/success');
			formData.append('FailURL', 'https://dev.kantor.kosevych.info/success/failed');
			formData.append('CallbackURL', 'https://dev.kantor.kosevych.info/kyc');
			formData.append('Firstname', user.attributes['custom:firstName'] || 'Jerome');
			formData.append('Surname', user.attributes['custom:lastName'] || 'K. Jerome');
			formData.append('StreetLine1', user.attributes['custom:homeAddress'] || '92 West Broadway');
			formData.append('StreetLine2', '');
			formData.append('City', user.attributes['custom:city'] || 'New York');
			formData.append('PostalCode', user.attributes['custom:postalCode'] || 10007);
			formData.append('StateProvince', user.attributes['custom:region'] || 'NY');
			formData.append('Country', user.attributes['custom:country'] || 'US');
			formData.append('Email', user.attributes.email);
			formData.append('Telephone', user.attributes.phone_number);
			formData.append('DateOfBirth', user.attributes['custom:dateOfBirth'] || '1982-08-29');
			var form = document.createElement('form');
			document.body.appendChild(form);
			form.method = 'post';
			form.action = 'https://gw-test.cgate.tech/orion/hosted/Payment.aspx';
			form.innerHTML = [...formData.entries()].map((e) => `<input type='hidden' name='${e[0]}' value='${e[1]}' />`);
			form.submit();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
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

	useEffect(() => {
		let isMounted = true;
		setLoading(true);
		try {
			if (FiatAmount > 0) {
				axios
					.get(rateURI(FiatCurrency))
					.then(({ data }) => {
						const {
							rates: { BTC },
						} = data;
						// debugger;

						console.log(FiatAmount / BTC);
						setBTC((FiatAmount / BTC).toFixed(6));
						setFee(FiatAmount - FiatAmount / 10);
					})
					.finally(() => {
						setLoading(false);
					});
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
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
		<RegistrationContent actionText='Buy BTC' isLoading={loading} onAction={doPayment}>
			<RegistrationContentRow>
				<div style={{ textAlign: 'center' }}>
					<Input
						className='fiat-amount-input'
						type='text'
						value={value.FiatAmount || FiatAmount}
						onChange={onFiatAmountChange}
					/>
				</div>
			</RegistrationContentRow>
			<RegistrationContentRow>
				<MaterialCurrencySelect value={value.FiatCurrency || FiatCurrency} onChange={onFiatCurrencyChange} />
			</RegistrationContentRow>
			<RegistrationContentRow>
				<List>
					<ListItem disableGutters dense>
						<ListItemText primary='Subtotal' />
						<Typography variant='subtitle1' className={classes.total}>
							{fee} {FiatCurrency}
						</Typography>
					</ListItem>
					<ListItem disableGutters dense className={classes.fee}>
						<ListItemText primary='Fee' />
						<Typography variant='body2'>10%</Typography>
					</ListItem>
					<ListItem disableGutters>
						<ListItemText primary='Receive approximately' />
						<Typography variant='body2'>{btc} BTC</Typography>
					</ListItem>
				</List>
			</RegistrationContentRow>
			<RegistrationContentRow>
				<FormControl className={classes.formControl} fullWidth>
					<InputLabel htmlFor='age-native-simple'>Send destination wallet</InputLabel>
					<Select
						fullWidth
						size='large'
						placeholder='Select destination wallet'
						value={btcWallet}
						onChange={(value) => {
							setBTCWallet(value);
						}}>
						{walletsData.map((wallet) => (
							<MenuItem value={wallet.value}>{wallet.name}</MenuItem>
						))}
					</Select>
				</FormControl>
			</RegistrationContentRow>
		</RegistrationContent>
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

	return (
		<RegistrationForm>
			<RegistrationHeader Main={`Buy BTC`} Secondary={`Let's buy some crypto`} />
			<BTCForm />
		</RegistrationForm>
	);
};

export default withAuthenticator(PaymentPage);
