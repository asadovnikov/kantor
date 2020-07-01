import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Checkbox, Typography } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';
import Grid from '@material-ui/core/Grid';
import { MaterialPass, MaterialTxt, MaterialDatePicker } from './components/LabeledInput';

const { Link } = Typography;

const HolderPage = ({ value = {}, onChange, onApply }) => {
	const [firstName, setFirstName] = useState(value.firstName);
	const [lastName, setLastName] = useState(value.lastName);
	const [email, setEmail] = useState(value.email);
	const [dateOfBirth, setDateOfBirth] = useState(
		value.dateOfBirth || new Date(new Date().setYear(new Date().getFullYear() - 18))
	);
	const [password, setPassword] = useState(value.password);
	const [agree, setAgree] = useState(value.agree);
	const [isValid, setIsValid] = useState(false);
	const [notValidEmail, setNotValidEmail] = useState(false);

	useEffect(() => {
		const valid = (firstName && lastName && email && dateOfBirth && password && agree) === true;

		setIsValid((firstName && lastName && email && dateOfBirth && password && agree) === true);
		if (valid) {
			onChange({ firstName, lastName, email, dateOfBirth, password });
		}
	}, [firstName, lastName, email, dateOfBirth, password, agree]);

	const triggerChange = () => {
		// if (onChange) {
		// 	onChange({ firstName, lastName, email, dateOfBirth, password });
		// }
	};
	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setNotValidEmail(!re.test(String(email).toLowerCase()));
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Welcome to Kantor' Secondary='To begin, create your account.' />
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<MaterialTxt
							value={firstName}
							onChange={({ target: { value } }) => {
								setFirstName(value);
								triggerChange();
							}}
							labelKey='First name'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<MaterialTxt
							value={lastName}
							onChange={({ target: { value } }) => {
								setLastName(value);
								triggerChange();
							}}
							labelKey='Last name'
						/>
					</Grid>
					<Grid item xs={12}>
						<MaterialDatePicker
							inputValue={dateOfBirth}
							onChange={(date) => {
								setDateOfBirth(date);
								triggerChange();
							}}
							labelKey='Date of birth'
						/>
					</Grid>
					<Grid item xs={12}>
						<MaterialTxt
							inputValue={email}
							error={notValidEmail}
							onChange={({ target: { value } }) => {
								setEmail(value);
								validateEmail(value);
							}}
							labelKey={`Email`}
							helperText={notValidEmail && 'Provide valid email'}
						/>
					</Grid>
					<Grid item xs={12}>
						<MaterialPass
							value={password}
							onChange={({ target: { value } }) => {
								setPassword(value);
								triggerChange();
							}}
							labelKey='Enter password'
						/>
					</Grid>
					<Grid item xs={12}>
						<Checkbox
							size='large'
							checked={agree}
							onChange={({ target: { checked } }) => {
								setAgree(checked);
								triggerChange();
							}}>
							I agree to Kantor's <NavLink to='/terms-and-conditions'>Terms of use</NavLink> and{' '}
							<NavLink to='/privacy-policy'>Privacy Policy.</NavLink>
						</Checkbox>
					</Grid>
				</Grid>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default HolderPage;
