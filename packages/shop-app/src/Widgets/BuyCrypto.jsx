import React, { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';
import { Input } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Container, Grid } from '@material-ui/core';
import { v4 as uuid } from 'uuid';

import { API, graphqlOperation } from 'aws-amplify';
import { listUserWalletss } from '../shopGraph/queries';
import { createTransaction } from '../shopGraph/mutations';
import { CurrencySelect } from '../Components/Inputs';
import { ProgressButton } from '../Components';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';

const buildHash = async (str) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(str);
	const hashArray = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', data)));
	return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
const rateURI = (currency) =>
	`https://api.coinlayer.com/api/live?access_key=68067b671383b2e296479c087ece3398&target=${currency}&symbols=BTC`;

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
	formContainer: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
}));

export const BuyCryptoWidget = () => {
	const classes = useStyles();
	const [FiatAmount, setFiatAmount] = useState(0);
	const [FiatCurrency, setFiatCurrency] = useState('EUR');
	const [wallets, setWallets] = useState([]);
	const [fee, setFee] = useState(0);
	const [btc, setBTC] = useState(0);
	const [btcWallet, setBTCWallet] = useState();
	const [valid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setIsValid(FiatAmount > 0 && btcWallet !== undefined);
	}, [FiatAmount, btcWallet]);

	const writeTransaction = async (userData) => {
		const { signature, ...rest } = userData;
		try {
			const result = await API.graphql(
				graphqlOperation(createTransaction, {
					input: { ...rest },
				})
			);
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setLoading(true);
		let isCancelled = false;
		try {
			API.graphql(graphqlOperation(listUserWalletss)).then(
				({
					data: {
						listUserWalletss: { items },
					},
				}) => {
					if (!isCancelled) {
						setWallets(items);
						// if (items.length > 0) {
						// 	setBTCWallet(items[0].Address);
						// }
					}
				}
			);
			// console.log(items);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
		return () => (isCancelled = true);
	}, []);

	const doPayment = async () => {
		setLoading(true);
		try {
			const hash = await buildHash(`p@s5w0Rd123200604201617${FiatCurrency}${FiatAmount * 100 + FiatAmount * 10}`);
			const user = await Auth.currentAuthenticatedUser();
			const userData = {
				id: uuid(),
				signature: hash,
				Firstname: user.attributes['custom:firstName'] || 'Jerome',
				Surname: user.attributes['custom:lastName'] || 'K. Jerome',
				DateOfBirth: user.attributes['custom:dateOfBirth'] || '1982-08-29',
				StreetLine1: user.attributes['custom:homeAddress'] || '92 West Broadway',
				City: user.attributes['custom:city'] || 'New York',
				PostalCode: user.attributes['custom:postalCode'] || 10007,
				StateProvince: user.attributes['custom:region'] || 'NY',
				Country: user.attributes['custom:country'] || 'US',
				Email: user.attributes.email,
				Telephone: user.attributes.phone_number,
				FiatCurrency: FiatCurrency,
				FiatAmount: `${FiatAmount * 100 + FiatAmount * 10}`,
				CryptoCurrency: 'BTC',
				CryptoAmount: `${FiatAmount / (await btcAmount())}`,
				CryptoAddress: btcWallet,
				GWReference: 'dummy@GateWay@ref',
				BankReference: 'dummy@bank@ref',
				MerchantRef: 'dummy@merchant@ref',
			};
			await writeTransaction(userData);

			const formData = new FormData();
			formData.append('Signature', userData.signature);
			formData.append('MerchantName', 'Dummy1');
			formData.append('MerchantPassword', 'p@s5w0Rd123');
			formData.append('MerchantRef', '200604201617');
			formData.append('Currency', userData.FiatCurrency);
			formData.append('Amount', userData.FiatAmount);
			formData.append('SuccessURL', 'https://shop.kantor.kosevych.info/success');
			formData.append('FailURL', 'https://shop.kantor.kosevych.info/failed');
			formData.append('CallbackURL', 'https://shop.kantor.kosevych.info/kyc');
			formData.append('Firstname', userData.Firstname);
			formData.append('Surname', userData.Surname);
			formData.append('StreetLine1', userData.StreetLine1);
			formData.append('StreetLine2', '');
			formData.append('City', userData.City);
			formData.append('PostalCode', userData.PostalCode);
			formData.append('StateProvince', userData.StateProvince);
			formData.append('Country', userData.Country);
			formData.append('Email', userData.Email);
			formData.append('Telephone', userData.Telephone);
			formData.append('DateOfBirth', userData.DateOfBirth);
			formData.append('CryptoCurrency', userData.CryptoCurrency);
			formData.append('CryptoAddress', userData.CryptoAddress);
			formData.append('CryptoAmount', userData.CryptoAmount);
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

	const btcAmount = async () => {
		const {
			data: {
				rates: { BTC },
			},
		} = await axios.get(rateURI(FiatCurrency));
		return BTC;
	};

	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		try {
			if (FiatAmount > 0) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				btcAmount().then((btc) => {
					if (!isCancelled) {
						setBTC((FiatAmount / btc).toFixed(6));
						setFee(FiatAmount + FiatAmount / 10);
					}
				});
			} else {
				setBTC(0);
				setFee(0);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}

		return () => {
			isCancelled = true;
		};
	}, [FiatAmount, FiatCurrency]);

	const triggerChange = (changedValue) => {
		// if (onChange) {
		// 	onChange({
		// 		FiatAmount,
		// 		FiatCurrency,
		// 		btc,
		// 		...value,
		// 		...changedValue,
		// 	});
		// }
	};

	const onFiatAmountChange = (e) => {
		const newFiatAmount = parseInt(e.target.value || 0, 10);

		if (Number.isNaN(FiatAmount)) {
			return;
		}

		setFiatAmount(newFiatAmount);

		triggerChange({
			FiatAmount: newFiatAmount,
		});
	};

	const onFiatCurrencyChange = (newFiatCurrency) => {
		setFiatCurrency(newFiatCurrency);

		triggerChange({
			FiatCurrency: newFiatCurrency,
		});
	};

	return (
		<>
			<Container maxWidth='xs' className={classes.formContainer}>
				<Grid container spacing={3} justify='center' alignItems='center'>
					<Grid item xs={12}>
						<Typography align='center' variant='h4'>
							Buy Crypto
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container justify='center' alignItems='center'>
							<Input className='fiat-amount-input' type='text' value={FiatAmount} onChange={onFiatAmountChange} />
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<CurrencySelect value={FiatCurrency} onChange={onFiatCurrencyChange} />
					</Grid>
					<Grid item container xs={12} spacing={1}>
						<Grid item xs={12}>
							<List>
								<ListItem disableGutters dense>
									<ListItemText primary='Will be charged' />
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
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<FormControl className={classes.formControl} fullWidth>
							<InputLabel htmlFor='destination-wallet-address'>Destination wallet</InputLabel>
							<Select
								fullWidth
								id='destination-wallet-address'
								size='large'
								placeholder='Select destination wallet'
								value={btcWallet}
								onChange={({ target: { value } }) => {
									setBTCWallet(value);
								}}>
								{wallets.map((wallet) => (
									<MenuItem key={wallet.Address} value={wallet.Address}>
										{wallet.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Grid container justify='center' alignItems='center'>
							<ProgressButton
								disabled={!valid}
								fullWidth
								onClick={doPayment}
								loading={loading}
								size='large'
								className='btn-success py-4 mt-5 px-5 text-uppercase font-weight-bold font-size-lg'>
								Buy{btc > 0 ? ` ~${btc} BTC` : ''}
							</ProgressButton>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
