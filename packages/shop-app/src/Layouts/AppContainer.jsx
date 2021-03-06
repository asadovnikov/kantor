import React, { useState, useContext } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { TopToolbar } from '../Components/TopToolbar';
import { NavigationMenu } from '../Components/NavigationMenu';
import { makeStyles } from '@material-ui/core/styles';
import { navigationDefaultWidth } from '../Utils/constants';
import Box from '@material-ui/core/Box';
import { AppFooter } from '../Components/AppFooter';
import { AuthContext } from '../Components/AuthContext';

// const Copyright = () => {
// 	return (
// 		<Typography variant='body2' color='textSecondary' align='center'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://dev.Cryptomine.kosevych.info'>
// 				Cryptomine.kosevych.info
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// };

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	navigationVisible: {
		paddingLeft: navigationDefaultWidth,
	},
}));

const UserAppLayout = ({ children }) => {
	const classes = useStyles();
	const { isAuthenticated } = useContext(AuthContext);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	return (
		<div className='app-wrapper'>
			{isAuthenticated === true && <NavigationMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />}

			<Box className={mobileOpen && classes.navigationVisible} style={{ width: '100%', paddingTop: '64px' }}>
				{/* <Box className={classes.toolbar}>&nbsp;</Box> */}
				<div>
					<main className='app-wrapper'>
						<div className={classes.toolbar} />
						<div className='app-main'>
							<TopToolbar mobileOpen={isAuthenticated} handleDrawerToggle={handleDrawerToggle} />
							<div className={`app-content ${isAuthenticated && 'withNavigation'}`}>
								<div className='app-content--inner'>
									<div className='app-content--inner__wrapper'>{children}</div>
								</div>
							</div>
						</div>
					</main>
				</div>
				<footer className='app-footer text-black-50 app-footer--opacity-bg'>
					<AppFooter />
				</footer>
			</Box>
		</div>
	);
};

export const AppContainer = ({ children, isAdmin }) => {
	return <UserAppLayout>{children}</UserAppLayout>;
};
