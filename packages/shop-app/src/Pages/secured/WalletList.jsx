import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
// import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { WalletForm } from './Wallets';
import { v4 as uuid } from 'uuid';

import { API, graphqlOperation } from 'aws-amplify';
import { listUserWalletss } from '../../graphql/queries';

import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from '../registration/components';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
}));

const DataList = ({ checked, wallets, loading, onWalletStateToggle }) => {
	const classes = useStyles();
	return (
		<List fullWidth subheader={<ListSubheader>Wallets</ListSubheader>} className={classes.root}>
			{wallets.map((wallet) => {
				return (
					<ListItem>
						<ListItemText id={`${wallet.id}`} primary={wallet.name} secondary={wallet.Address} />
						<ListItemSecondaryAction>
							<Switch
								edge='end'
								onChange={onWalletStateToggle(wallet.id)}
								checked={checked.indexOf(wallet.id) !== -1}
								inputProps={{ 'aria-labelledby': wallet.id }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};

export const WalletListForm = () => {
	const [checked, setChecked] = useState([]);
	const [wallets, setWallets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [addWalletForm, setAddWalletForm] = useState(false);
	const [loadData, setLoadData] = useState();

	useEffect(async () => {
		setLoading(true);
		try {
			const {
				data: {
					listUserWalletss: { items },
				},
			} = await API.graphql(graphqlOperation(listUserWalletss));
			console.log(items);
			setChecked(items.filter((wallet) => wallet.State !== 'Active').map((wallet) => wallet.id));
			setWallets(items);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const onWalletAdded = ({ data: { createUserWallets } }) => {
		setAddWalletForm(false);
		const items = [...wallets, createUserWallets];
		setWallets(items);
		setChecked(items.filter((wallet) => wallet.State !== 'Active').map((wallet) => wallet.id));
	};

	const handleAction = () => {
		setAddWalletForm(true);
	};
	return (
		<>
			{addWalletForm === true ? (
				<WalletForm onWalletAdded={onWalletAdded} />
			) : (
				<RegistrationForm>
					<RegistrationHeader Main={`List of Wallets`} />
					<RegistrationContent actionText={`Add wallet`} onAction={handleAction}>
						<RegistrationContentRow>
							<DataList wallets={wallets} checked={checked} loading={loading} onWalletStateToggle={handleToggle} />
						</RegistrationContentRow>
					</RegistrationContent>
				</RegistrationForm>
			)}
		</>
	);
};
