// import 'date-fns';
import React, { useState } from 'react';
// import FloatingLabelInput from 'react-floating-label-paper-input';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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

export const MaterialCurrencySelect = ({ value, onChange }) => {
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

export const CurrencySelector = () => {
	const [currency, setCurrency] = React.useState('EUR');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<TextField
			id='standard-select-currency'
			select
			label='Select'
			value={currency}
			onChange={handleChange}
			helperText='Please select your currency'>
			{currencies.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
};

/**
 *
 * Text input
 * select
 * date picker
 * Validation flow (masked input ##phone, postal code, email)
 * provide a form with submit action
 */
export const MaterialTxt = (props) => {
	const { inputValue, onChange, labelKey, children, ...rest } = props;
	return (
		<div>
			<TextField
				required
				style={{ width: '100%' }}
				value={inputValue}
				onChange={onChange}
				fullWidth={false}
				outlined
				{...rest}
				label={labelKey}></TextField>
		</div>
	);
};

export const MaterialCodeInput = ({ value, onChange }) => {
	const classes = useStyles();
	return (
		<TextField
			required
			className={classes.root}
			style={{ width: '100%' }}
			value={value}
			onChange={onChange}
			fullWidth={false}
			outlined
			size='medium'
		/>
	);
};

export const MaterialPass = ({ inputValue, onChange, children, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl fullWidth>
			<InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
			<Input
				{...rest}
				required
				id='password'
				autoComplete='current-password'
				type={showPassword ? 'text' : 'password'}
				style={{ width: '100%' }}
				value={inputValue}
				onChange={onChange}
				fullWidth={false}
				outlined
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export const MaterialDatePicker = ({ inputValue, onChange, labelKey }) => {
	return (
		<KeyboardDatePicker
			disableFuture
			openTo='year'
			format='MM/dd/yyyy'
			label={labelKey}
			value={inputValue}
			views={['year', 'month', 'date']}
			onChange={onChange}
			KeyboardButtonProps={{
				'aria-label': 'change date',
			}}
		/>
	);
};

// export const LabeledInput = ({ value, labelKey, onChange }) => {
// 	const [inputState, setInputState] = useState(labelKey);
// 	const isValid = () => {
// 		return inputState;
// 	};

// 	const getValidationMessages = () => {
// 		return `${inputState} is require`;
// 	};

// 	return (
// 		<FloatingLabelInput
// 			type={'text'}
// 			labelName={inputState}
// 			name={inputState}
// 			value={value}
// 			isValid={isValid}
// 			onChange={(e) => {
// 				e.preventDefault();
// 				if (onChange) {
// 					onChange(e.currentTarget.value);
// 				}
// 			}}
// 			errorMessage={getValidationMessages}
// 		/>
// 	);
// };

// export const LabeledDateInput = ({ value, labelKey, onChange }) => {
// 	const [inputState, setInputState] = useState(labelKey);
// 	const isValid = () => {
// 		return inputState;
// 	};

// 	const getValidationMessages = () => {
// 		return `${inputState} is require`;
// 	};

// 	return (
// 		<FloatingLabelInput
// 			type={'inputMask'}
// 			labelName={labelKey}
// 			name={`_${inputState}`}
// 			maskChar={' '}
// 			mask={99 - 99 - 9999}
// 			placeHolder={'MM-DD-YYYYY'}
// 			value={value}
// 			isValid={isValid}
// 			onChange={(e) => {
// 				e.preventDefault();
// 				if (onChange) {
// 					onChange(e.currentTarget.value);
// 				}
// 			}}
// 			errorMessage={getValidationMessages}
// 		/>
// 	);
// };
