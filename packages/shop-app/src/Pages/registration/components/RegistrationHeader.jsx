import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
// import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	subHeader: {
		fontWeight: `300 !important;`,
	},
	header: {},
}));

export const RegistrationHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra, Extra } = params;
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<Typography variant='h3' className={classes.header} gutterBottom align='center'>
				{Main}
			</Typography>
			{Secondary.length > 0 && (
				<>
					<Typography variant='h6' className={classes.subHeader} gutterBottom align='center'>
						{Secondary} {SecondaryExtra}
					</Typography>
				</>
			)}
			<Box align='center'>{Extra}</Box>
		</Grid>
	);
};
