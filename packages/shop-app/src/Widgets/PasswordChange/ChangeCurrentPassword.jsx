import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput, PasswordInput } from '../../Components/Inputs';
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

export const ChangeCurrentPasswordWidget = ({ password, newPassword, onPassword, onNewPassword }) => {
	const classes = useStyles();
	return (
		<Grid container spacing={defaultVerticalSpacing}>
			<Grid item xs={12} className={classes.marginBottom}>
				<PasswordInput
					label={`Old password`}
					value={password}
					onChange={({ target: { value } }) => {
						onPassword(value);
					}}
				/>
			</Grid>
			<Grid item xs={12} className={classes.marginBottom}>
				<PasswordInput
					label={`New password`}
					value={newPassword}
					onChange={({ target: { value } }) => {
						onNewPassword(value);
					}}
				/>
			</Grid>
		</Grid>
	);
};
