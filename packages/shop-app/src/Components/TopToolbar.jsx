import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderUserbox } from './HeaderUserbox';
import { navigationDefaultWidth } from '../Utils/constants';
import { AppName } from './AppName';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	appBar: {
		background: 'rgba(255, 255, 255, 0.95)',
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
}));

export const TopToolbar = ({ mobileOpen, handleDrawerToggle }) => {
	const classes = useStyles();
	const [isAuth, setIsAuth] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();

	const [open, setOpen] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	let isMount = true;
	Hub.listen('auth', (data) => {
		const { payload } = data;
		if (payload.event === 'signIn') {
			setIsAuth(true);
		} else if (payload.event === 'signOut') {
			if (isMount) {
				setIsAuth(true);
				isMount = false;
				window.location = window.location;
			}
		} else if (payload.event === 'signIn_failure') {
			setOpen(true);
		}
	});
	Auth.currentAuthenticatedUser()
		.then((user) => {
			console.log(user);
			setEmail(user.attributes.email);
			setFirstName(user.attributes['custom:firstName'] || 'Manually');
			setLastName(user.attributes['custom:lastName'] || 'Created');
			setIsAuth(true);
		})
		.catch((err) => {
			console.log(err);
			setIsAuth(false);
		});
	return (
		<AppBar position='fixed' className={`${classes.appBar} app-sidebar--light`} elevation={1}>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					onClick={handleDrawerToggle}
					className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<AppName />
				<div className={classes.grow} />
				{isAuth === true ? (
					<HeaderUserbox firstName={firstName} lastName={lastName} email={email} />
				) : (
					<Link to='/signin'>Sign in </Link>
				)}

				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}>
					<Alert onClose={handleClose} variant='filled' severity='error' color='error'>
						Incorrect username or password!
					</Alert>
				</Snackbar>
			</Toolbar>
		</AppBar>
	);
};
