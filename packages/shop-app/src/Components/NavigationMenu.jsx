import React from 'react';
import { Auth } from 'aws-amplify';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { Button } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { WalletIcon, TransactionIcon, VerificationIcon, BuyBitcoinIcon, LogoutIcon } from '../assets/Icons';

import SidebarWidget from './SidebarWidget';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { navigationDefaultWidth } from '../Utils/constants';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: navigationDefaultWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${navigationDefaultWidth}px)`,
			marginLeft: navigationDefaultWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: {
		minHeight: 22,
	},
	drawerPaper: {
		width: navigationDefaultWidth + 1,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export const NavigationMenu = (props) => {
	const routing = useHistory();
	const { window, mobileOpen, handleDrawerToggle } = props;
	const classes = useStyles();
	const theme = useTheme();

	const drawer = (
		<div className='sidebar-navigation'>
			<div className={classes.toolbar} />
			<SidebarWidget />
			<Divider />
			<List>
				<ListItem
					button
					key={'Buy BTC'}
					onClick={() => {
						// setToPayment(true);
						routing.push('/payment');
					}}>
					<ListItemIcon>
						<span className='sidebar-icon'>
							<BuyBitcoinIcon />
						</span>
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
						<span className='sidebar-icon'>
							<TransactionIcon />
						</span>
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
						<div className='mr-2'>
							<WalletIcon />
						</div>
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
						<span className='sidebar-icon'>
							<VerificationIcon />
						</span>
					</ListItemIcon>
					<ListItemText primary={'Verification'} />
				</ListItem>
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<nav className={classes.drawer} aria-label='mailbox folders'>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden smUp implementation='css'>
				<Drawer
					container={container}
					variant='temporary'
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation='css'>
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant='permanent'
					open>
					<div className=' app-sidebar app-sidebar-fixed app-sidebar--light'>
						<div className='app-sidebar--content'>{drawer}</div>
						<div className='app-sidebar--footer'>
							<Button
								onClick={async () => {
									routing.push('/signin');
									await Auth.signOut();
								}}
								startIcon={<LogoutIcon />}>
								Sign out
							</Button>
						</div>
					</div>
				</Drawer>
			</Hidden>
		</nav>
	);
};
