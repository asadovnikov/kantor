import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const currencies = [
	{
		value: 'USD',
		Display: 'US Dollar',
		label: '$',
	},
	{
		value: 'EUR',
		Display: 'Euro',
		label: '€',
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiInputBase-input': {
			'font-size': '3vw',
			textAlign: 'center',
		},
	},
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const CurrencySelect = ({ value, onChange }) => {
	const classes = useStyles();
	return (
		<FormControl className={classes.formControl} fullWidth>
			<InputLabel htmlFor='age-native-simple'>Select preferred currency</InputLabel>
			<Select
				fullWidth
				size='large'
				placeholder='Select one'
				value={value}
				onChange={({ target: { value } }) => {
					onChange(value);
				}}>
				{currencies.map((source) => (
					<MenuItem value={source.value}>{source.Display}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
