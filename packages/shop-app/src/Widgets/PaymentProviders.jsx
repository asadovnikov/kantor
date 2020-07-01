import React from 'react';
import { Grid } from '@material-ui/core';
import visa from '../assets/images/providers/visa.svg';
import mastercard from '../assets/images/providers/mastercard.svg';
import maestro from '../assets/images/providers/maestro.svg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	image: {
		width: 70,
		height: 70,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	imgMaestro: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
}));

export const PaymentProvidersWidget = () => {
	const classes = useStyles();
	return (
		<Grid container justify='center' spacing={2}>
			<Grid item xs className={classes.image} justify='center'>
				<img className={classes.img} alt='Visa' src={visa} />
			</Grid>
			<Grid item xs className={classes.image} justify='center'>
				<img className={classes.img} alt='Master Card' src={mastercard} />
			</Grid>
		</Grid>
	);
};
