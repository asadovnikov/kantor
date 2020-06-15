import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { SignUp } from './Pages/RegistrationFlow/SignUp';
import { blackTheme } from './theme';
import { ThemeProvider } from '@material-ui/styles';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://dev.kantor.kosevych.info/'>
				kantor.kosevych.info
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

export const MaterialApp = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={blackTheme}>
			<CssBaseline />
			<AppBar position='static' color='default' elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
						Kantor shop
					</Typography>
					<nav>
						<Link variant='button' color='textPrimary' href='#' className={classes.link}>
							Support
						</Link>
					</nav>
					<Button href='#' color='primary' variant='outlined' className={classes.link}>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}
			<Container maxWidth='sm' component='main' className={classes.heroContent}>
				<SignUp />
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main'>
				<Grid container spacing={5} alignItems='flex-end'></Grid>
			</Container>
			{/* Footer */}
			<Container maxWidth='md' component='footer' className={classes.footer}>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
			{/* End footer */}
		</ThemeProvider>
	);
};
