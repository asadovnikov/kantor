import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { DemoRouting } from './Components/DemoRouting';
import { TopToolbar } from './Components/TopToolbar';
import { TestMenu } from './Components/TestMenu';
import './App.css';
import { bigFontsTheme } from './Theme';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const Copyright = () => {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://dev.kantor.kosevych.info'>
				kantor.kosevych.info
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export const AntdApp = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={bigFontsTheme}>
			<CssBaseline />
			<TopToolbar />
			{/* <TestMenu /> */}
			<div className={classes.toolbar} />
			<main className='app-wrapper'>
				<Container>
					<Box mt={6}>
						<DemoRouting />
					</Box>
				</Container>
			</main>
			<footer>
				<Typography variant='h6' align='center' gutterBottom>
					Footer
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright />
			</footer>
		</ThemeProvider>
	);
};
