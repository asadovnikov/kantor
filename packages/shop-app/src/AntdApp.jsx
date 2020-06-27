import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { DemoRouting } from './Components/DemoRouting';
import { Routing } from './Routing/Routing';
import './App.css';
import { bigFontsTheme, blackTheme } from './Theme';
import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { currentUser } from './Utils/currentUser';

import { AppContainer } from './Layouts/AppContainer';

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

export const AntdApp = () => {
	const classes = useStyles();
	const [user, setCurrentUser] = useState({});
	const [isAdmin, setIsAdmin] = useState(false);
	const [theme, setTheme] = useState(bigFontsTheme);
	useEffect(() => {
		currentUser((account) => {
			// setCurrentUser(account);
			setIsAdmin(account && account.isAdmin);
			// const nte = account && account.isAdmin ? blackTheme : bigFontsTheme;
			// setTheme(blackTheme);
		});
	}, []);
	// const mui = createMuiTheme(theme);

	return (
		<ThemeProvider theme={bigFontsTheme}>
			<CssBaseline />
			<AppContainer>
				<Routing />
			</AppContainer>
		</ThemeProvider>
	);
};
