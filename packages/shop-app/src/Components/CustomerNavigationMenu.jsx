import React from 'react';
// import clsx from 'clsx';
import { useHistory, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

export const TemporaryDrawer = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [toPayment, setToPayment] = React.useState(false);
	const [toTransaction, setToTransaction] = React.useState(false);
	const routing = useHistory();

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setOpen(open);
	};

	const list = () => (
		<div className={classes.list} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
			{/* {toPayment === true && <Redirect to='/payment' />}
			{toTransaction === true && <Redirect to='/mytransactions' />} */}
			<List>
				<ListItem
					button
					key={'Buy BTC'}
					onClick={() => {
						// setToPayment(true);
						routing.push('/payment');
					}}>
					<ListItemIcon>
						<MonetizationOnOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary={'Buy BTC'} />
				</ListItem>
				<ListItem
					button
					key={'My transactions'}
					onClick={() => {
						routing.push('/mytransactions');
						// setToTransaction(true);
					}}>
					<ListItemIcon>
						<HistoryOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary={'My transactions'} />
				</ListItem>
				<ListItem
					button
					key={'My wallets'}
					onClick={() => {
						routing.push('/walletlist');
					}}>
					<ListItemIcon>
						<HistoryOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary={'My wallets'} />
				</ListItem>
				<ListItem
					button
					key={'Verification'}
					onClick={() => {
						routing.push('/kyc/0');
					}}>
					<ListItemIcon>
						<MonetizationOnOutlinedIcon />
					</ListItemIcon>
					<ListItemText primary={'Verification'} />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key={'Settings'}>
					<ListItemIcon>
						<SettingsSharpIcon />
					</ListItemIcon>
					<ListItemText primary={'Settings'} />
				</ListItem>
			</List>
			<List>
				<ListItem button key={'LogOut'}>
					<ListItemIcon>
						<SettingsSharpIcon />
					</ListItemIcon>
					<ListItemText primary={'Log out'} />
				</ListItem>
			</List>
			<div>add footer</div>
		</div>
	);

	return (
		<>
			<IconButton
				color='inherit'
				aria-label='open drawer'
				onClick={toggleDrawer(true)}
				edge='start'
				className={classes.menuButton}>
				<MenuIcon />
			</IconButton>
			<Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</>
	);
};
