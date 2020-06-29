import React from 'react';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& .MuiInputBase-input': {
// 			'font-size': '3vw',
// 			textAlign: 'center',
// 		},
// 	},
// 	formControl: {
// 		// margin: theme.spacing(1),
// 		minWidth: 120,
// 	},
// 	selectEmpty: {
// 		marginTop: theme.spacing(2),
// 	},
// }));

/**
 *
 * Text input
 * select
 * date picker
 * Validation flow (masked input ##phone, postal code, email)
 * provide a form with submit action
 */
export const TextInput = (props) => {
	const { inputValue, onChange, labelKey, children, ...rest } = props;
	return <TextField required fullWidth value={inputValue} onChange={onChange} outlined {...rest} label={labelKey} />;
};
