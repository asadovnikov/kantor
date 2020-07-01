import React from 'react';
import { logoImage } from '../assets';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500,
	},
	image: {
		width: 70,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	main: {
		fontFamily: 'Playfair Display',
		color: '#1b6ca8',
		fontSize: '24px',
	},
	secondary: {
		fontFamily: 'Montserrat',
		color: '#1b6ca8',
		fontSize: '8px',
	},
	dividerStroke: {
		height: '100%',
		width: '1px',
		background: '#1b6ca8',
	},
}));

const LogoBlock = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item>
					<Box className={classes.image}>
						<img className={classes.img} alt='logo' src={logoImage} />
					</Box>
				</Grid>
				<Grid item spacing={3}>
					<Box className={classes.dividerStroke}></Box>
				</Grid>
				<Grid item xs={12} sm container spacing={0}>
					<Grid item xs container direction='column' spacing={0}>
						<Grid item xs>
							<Typography className={classes.main} variant='body2'>
								Cryptomine
							</Typography>
							<Typography className={classes.secondary} variant='body2'>
								Exchange
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export const ApplicationName = () => {
	return <LogoBlock />;
	// return (
	// 	<Grid container direction='row' justify='flex-start' alignItems='center' className='application-name-container'>
	// 		<Grid xs item className='application-name-logo'>
	// 			<img src={logoImage} alt='logo' />
	// 		</Grid>
	// 		<Grid
	// 			item
	// 			xs
	// 			container
	// 			direction='column'
	// 			justify='flex-start'
	// 			alignItems='center'
	// 			className='application-name-details-container'>
	// 			<Grid item className='application-name-header'>
	// 				Cryptomine
	// 			</Grid>
	// 			<Grid item className='application-name-footer'>
	// 				Exchange
	// 			</Grid>
	// 		</Grid>
	// 	</Grid>
	// );
};
