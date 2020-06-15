import React, { useState } from 'react';
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
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import { SignUp } from './Pages/RegistrationFlow/SignUp';
import { blueTheme } from '../theme';
import { ThemeProvider } from '@material-ui/styles';
import { TemporaryDrawer } from './CustomerNavigationMenu';

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
	const [isLoggedOut, setLoggedOut] = useState(false);
	Hub.listen('auth', (data) => {
		console.log('============auth=============');
		console.log(data);
		console.log('============end=============');
		const { payload } = data;
		if (payload.event === 'signIn') {
			setIsAuth(true);
			setLoggedOut(false);
		} else if (payload.event === 'signOut') {
			setLoggedOut(true);
			setIsAuth(true);
		}
	});
	Auth.currentAuthenticatedUser()
		.then((user) => {
			console.log(user);
			setIsAuth(true);
		})
		.catch((err) => {
			console.log(err);
			setIsAuth(false);
		});
	return (
		<ThemeProvider theme={blueTheme}>
			<AppBar position='static' color='default' elevation={0}>
				<Toolbar>
					<TemporaryDrawer />
					<Typography className={classes.title} color='inherit' variant='h6' noWrap>
						Kantor Shop
					</Typography>
					<div className={classes.grow} />
					{isAuth === false && <Link to='/signin'>Sign in </Link>}
					{isAuth === true && (
						<Button
							type='primary'
							onClick={async () => {
								try {
									await Auth.signOut({ global: true });
								} catch (error) {
									console.log('error signing out: ', error);
								}
							}}>
							Log out
						</Button>
					)}
					{isLoggedOut === true && <Redirect to='/signin' />}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};
