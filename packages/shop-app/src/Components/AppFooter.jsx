import React from 'react';
// import { AppName } from './AppName';
import { Grid, Typography, Box, Link, Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import visa from '../assets/images/providers/visa.svg';
import mastercard from '../assets/images/providers/mastercard.svg';
import maestro from '../assets/images/providers/maestro.svg';

const useStyles = makeStyles((theme) => ({
	providerLogo: {
		height: '1.625rem',
	},
	dividerMargin: {},
	footerContainer: {
		minHeight: '300px',
	},
	footerEndRow: {
		padding: theme.spacing(2),
	},
}));

const NavigationSection = ({ title, links = [] }) => {
	return (
		<Box mb={3}>
			<Box mt={3} mb={1}>
				<Typography variant='button'>{title}</Typography>
			</Box>
			<Grid container direction='column' justify='flex-start' spacing={0}>
				{links.map((link) => {
					return (
						<Grid key={`${link.direction}_${link.title}`} item>
							{link.direction ? (
								<NavLink to={link.direction}>
									<Typography variant='body2'>{link.title}</Typography>
								</NavLink>
							) : (
								<Typography variant='body2'>{link.title}</Typography>
							)}
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'All rights reserved © '}
			<Link color='inherit' href='https://dev.kantor.kosevych.info/'>
				kantor.kosevych.info
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const FooterEndRow = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} className={classes.footerEndRow}>
			{children}
		</Grid>
	);
};

const FooterContainer = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid container className={classes.footerContainer}>
			<Grid item xs={12}>
				{children}
			</Grid>
		</Grid>
	);
};

const FooterEndContent = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container direction='row' justify='space-between' alignItems='flex-start'>
				<Box>
					<Copyright />
				</Box>
				<Box>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item>
							<img alt='Visa' className={classes.providerLogo} src={visa} />
						</Grid>
						<Grid item>
							<img alt='Master Card' className={classes.providerLogo} src={mastercard} />
						</Grid>

						<Grid item>
							<img alt='Maestro' className={classes.providerLogo} src={maestro} />
						</Grid>
					</Grid>
				</Box>
				<Box className='app-sidebar--light'>
					<span>crypto </span> <b style={{ textTransform: 'lowercase' }}>kantor</b>
				</Box>
			</Grid>
		</>
	);
};

const FooterNavigationSection = () => {
	return (
		<Grid item xs={12}>
			<Grid container>
				<Grid item xs={6} md={3}>
					<NavigationSection
						key='About'
						title='About'
						links={[
							{
								title: 'Terms and conditions',
								direction: '/terms-and-conditions',
							},
							{
								title: 'Privacy Policy',
								direction: '/privacy-policy',
							},
							{
								title: 'FAQ',
							},
						]}
					/>
				</Grid>
				<Grid item xs={6} md={3}>
					<NavigationSection
						key='Address'
						title='Address'
						links={[
							{
								title: 'Crypto Kantor LTD',
							},
							{
								title: '4 Private Drive',
							},
							{
								title: 'Little Whinging',
							},
							{
								title: 'Surrey',
							},
							{
								title: 'United Kingdom',
							},
						]}
					/>
				</Grid>
				<Grid item xs={6} md={6} container justify='flex-end'>
					<NavigationSection
						key='Contact'
						title='Contact'
						links={[
							{
								title: 'kantor@kosevych.info',
							},
							{
								title: 'admin.kantor@kosevych.info',
							},
						]}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export const AppFooter = () => {
	const classes = useStyles();
	return (
		<FooterContainer>
			<Grid container direction='column' justify='space-between' alignItems='stretch' style={{ height: '100%' }}>
				<Grid item>
					<FooterNavigationSection />
				</Grid>
				<Grid item></Grid>
				<Grid item>
					<Divider className={classes.dividerMargin} />
					<FooterEndRow>
						<FooterEndContent />
					</FooterEndRow>
				</Grid>
			</Grid>
		</FooterContainer>
	);
};
