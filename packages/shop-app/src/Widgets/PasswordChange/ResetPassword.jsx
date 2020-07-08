import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from '../../Components/Inputs';
import Grid from '@material-ui/core/Grid';
import { defaultVerticalSpacing } from '../../Utils/constants';
const useStyles = makeStyles((theme) => ({
	topMargin: {
		marginTop: theme.spacing(4),
	},
	bottomMargin: {
		marginBottom: theme.spacing(8),
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

export const ResetPasswordWidget = ({ onEmailChanged = () => {}, email, notValidEmail }) => {
	const classes = useStyles();
	// const validateEmail = (email) => {
	// 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	setNotValidEmail(!re.test(String(email).toLowerCase()));
	// };

	return (
		<Grid container spacing={defaultVerticalSpacing}>
			<Grid item xs={12} className={classes.marginTop}>
				<TextInput
					inputValue={email}
					error={notValidEmail}
					onChange={({ target: { value } }) => {
						onEmailChanged(value);
					}}
					labelKey={`Email`}
					helperText={notValidEmail && 'Provide valid email'}
				/>
			</Grid>
		</Grid>
	);
};
