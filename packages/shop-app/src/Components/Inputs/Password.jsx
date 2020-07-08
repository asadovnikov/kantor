import React, { useState } from 'react';
import { FormControl, InputAdornment, InputLabel, Input, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';

export const PasswordInput = ({ label, inputValue, onChange, children, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<FormControl fullWidth>
			<InputLabel required={true} htmlFor='standard-adornment-password'>
				{label}
			</InputLabel>
			<Input
				{...rest}
				id='password'
				type={showPassword ? 'text' : 'password'}
				style={{ width: '100%' }}
				value={inputValue}
				onChange={onChange}
				fullWidth={false}
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
