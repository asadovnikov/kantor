import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	spacer: {
		margin: theme.spacing(0.5, 0),
		// padding: theme.spacing(12, 4),
		// width: '550px',
	},
}));

export const RegistrationContentRow = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			{children}
		</Grid>
	);
};
