import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { Link, Redirect } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import { Layout, Row, Col, Button } from 'antd';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TemporaryDrawer } from './CustomerNavigationMenu';
import { HeaderUserbox } from './HeaderUserbox';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const { Header } = Layout;

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export const TestMenu = () => {
	const classes = useStyles();
	const [isAuth, setIsAuth] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [isLoggedOut, setLoggedOut] = useState(false);

	const [open, setOpen] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	let isMount = true;
	Hub.listen('auth', (data) => {
		console.log('============auth=============');
		console.log(data);
		console.log('============end=============');

		const { payload } = data;
		if (payload.event === 'signIn') {
			setIsAuth(true);
			setLoggedOut(false);
		} else if (payload.event === 'signOut') {
			if (isMount) {
				setLoggedOut(true);
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
		<AppBar position='static' color='default' elevation={0}>
			<Toolbar>
				{isAuth === true && <TemporaryDrawer />}
				<Typography className={classes.title} color='inherit' variant='h6' noWrap>
					Kantor Shop
				</Typography>
				<div className={classes.grow} />
				{isAuth === false && <Link to='/signin'>Sign in </Link>}
				{isAuth === true && (
					<HeaderUserbox firstName={firstName} lastName={lastName} email={email} />
					// <Button
					// 	type='primary'
					// 	onClick={async () => {
					// 		try {
					// 			await Auth.signOut({ global: true });
					// 		} catch (error) {
					// 			console.log('error signing out: ', error);
					// 		}
					// 	}}>
					// 	Log out
					// </Button>
				)}
				{isLoggedOut === true && <Redirect to='/' />}
			</Toolbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}>
				<Alert onClose={handleClose} variant='filled' severity='error' color='error'>
					Incorrect username or password!
				</Alert>
			</Snackbar>
		</AppBar>
	);
};
