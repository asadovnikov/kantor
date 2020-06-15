import React, { useState, useEffect } from 'react';
import { RegistrationContainer } from '../components/RegistrationContainer';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

import { MaterialPass, MaterialTxt, MaterialDatePicker } from '../../registration/components/LabeledInput';

export const HolderPage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [firstName, setFirstName] = useState(value.firstName);
	const [lastName, setLastName] = useState(value.lastName);
	const [email, setEmail] = useState(value.email);
	const [dateOfBirth, setDateOfBirth] = useState(value.dateOfBirth);
	const [password, setPassword] = useState(value.password);
	const [agree, setAgree] = useState(value.agree);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		const valid = (firstName && lastName && email && dateOfBirth && password && agree) === true;
		// debugger;
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
	return (
		<RegistrationContainer main='Welcome to Kantor' secondary='To begin, create your account.'>
			<Grid item xs={12} sm={6}>
				<MaterialTxt
					value={firstName}
					onChange={({ target: { value } }) => {
						// debugger;
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
					onChange={({ target: { value } }) => {
						setEmail(value);
						triggerChange();
					}}
					labelKey={`Email`}
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
				<FormControlLabel
					control={<Checkbox color='secondary' name='acceptTerms' value='yes' />}
					label={
						<>
							<span>
								I agree to Kantor's <Link href='/terms'>Terms of use</Link> and{' '}
								<Link href='/policy'>Privacy Policy.</Link>
							</span>
						</>
					}
				/>
			</Grid>
			{/* <Grid item xs={12}>
				<Checkbox
					size='large'
					checked={agree}
					onChange={({ target: { checked } }) => {
						setAgree(checked);
						triggerChange();
					}}>
					I agree to Kantor's <Link>Terms of use</Link> and <Link>Privacy Policy.</Link>
				</Checkbox>
			</Grid> */}
		</RegistrationContainer>
	);
};
