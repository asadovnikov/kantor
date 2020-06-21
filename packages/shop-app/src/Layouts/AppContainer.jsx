import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { TopToolbar } from '../Components/TopToolbar';
import { NavigationMenu } from '../Components/NavigationMenu';
import { makeStyles } from '@material-ui/core/styles';
import { navigationDefaultWidth } from '../Utils/constants';
import Box from '@material-ui/core/Box';
import { AppFooter } from '../Components/AppFooter';

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

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	navigationVisible: {
		paddingLeft: navigationDefaultWidth,
	},
}));

export const AppContainer = ({ children }) => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className='app-wrapper'>
			<NavigationMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

			<Box className={mobileOpen && classes.navigationVisible} style={{ width: '100%', paddingTop: '64px' }}>
				{/* <Box className={classes.toolbar}>&nbsp;</Box> */}
				<div>
					<main className='app-wrapper'>
						<div className={classes.toolbar} />
						<div className='app-main'>
							<TopToolbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
							<div className='app-content'>
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
