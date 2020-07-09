import React, { useState, useEffect } from 'react';
// import { message } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserWallets } from '../shopGraph/mutations';
import { v4 as uuid } from 'uuid';
import { TextInput } from '../Components/Inputs';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { defaultVerticalSpacing } from '../Utils/constants';
import SaveIcon from '@material-ui/icons/Save';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import WAValidator from 'wallet-address-validator';

const { validate: walletValidator } = WAValidator;
const useStyles = makeStyles((theme) => ({
	topMargin: {
		marginTop: theme.spacing(4),
	},
	bottomMargin: {
		marginBottom: theme.spacing(8),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

export const AddWalletWidget = ({ onWalletAdded }) => {
	const classes = useStyles();
	const [walletName, setWalletName] = useState('');
	const [valid, setValid] = useState(false);
	const [walletAddress, setWalletAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const [isWalletValid, setIsWalletValid] = useState(true);

	useEffect(() => {
		debugger;
		setValid(walletValidator(walletAddress, 'bitcoin') === true && walletName.length > 0);
		// setValid(walletName.length > 0 && walletAddress.length > 0);
	}, [walletName, walletAddress]);
	const addWallet = async () => {
		setLoading(true);

		try {
			const wallet = await API.graphql(
				graphqlOperation(createUserWallets, {
					input: {
						id: uuid(),
						name: walletName,
						Address: walletAddress,
						State: 'ACTIVE',
					},
				})
			);
			if (onWalletAdded) {
				onWalletAdded(wallet);
			}
			// message.info(JSON.stringify(wallet));
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<Grid container spacing={defaultVerticalSpacing}>
			<Grid item xs={12} className={classes.marginTop}>
				<TextInput
					labelKey={`Wallet name`}
					value={walletName}
					onChange={({ target: { value } }) => setWalletName(value)}
				/>
			</Grid>
			<Grid item xs={12} className={classes.marginBottom}>
				<TextInput
					labelKey={`Wallet address`}
					value={walletAddress}
					error={!isWalletValid}
					helperText={!isWalletValid ? 'Incorrect wallet address' : ''}
					onChange={({ target: { value } }) => {
						setIsWalletValid(walletValidator(value, 'bitcoin'));
						setWalletAddress(value);
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Box mt={4}>
					<Button
						startIcon={<SaveIcon />}
						onClick={addWallet}
						disabled={valid !== true}
						variant='contained'
						className='text-uppercase font-weight-bold'
						color='primary'>
						Save
					</Button>
				</Box>
			</Grid>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Grid>
	);
};
