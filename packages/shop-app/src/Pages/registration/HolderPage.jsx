import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Checkbox, Typography, DatePicker } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { MaterialPass, MaterialTxt, MaterialDatePicker } from './components/LabeledInput';

const { Link } = Typography;

const HolderPage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [firstName, setFirstName] = useState(value.firstName);
	const [lastName, setLastName] = useState(value.lastName);
	const [email, setEmail] = useState(value.email);
	const [dateOfBirth, setDateOfBirth] = useState(value.dateOfBirth || new Date('2002-08-18T21:11:54'));
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
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setNotValidEmail(!re.test(String(email).toLowerCase()));
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Welcome to Kantor' Secondary='To begin, create your account.' />
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<Row gutter={[16, 16]}>
						<Col span='12'>
							<MaterialTxt
								value={firstName}
								onChange={({ target: { value } }) => {
									setFirstName(value);
									triggerChange();
								}}
								labelKey='First name'
							/>
						</Col>
						<Col span='12'>
							<MaterialTxt
								value={lastName}
								onChange={({ target: { value } }) => {
									setLastName(value);
									triggerChange();
								}}
								labelKey='Last name'
							/>
						</Col>
					</Row>
				</RegistrationContentRow>

				<RegistrationContentRow>
					<MaterialDatePicker
						inputValue={dateOfBirth}
						onChange={(date) => {
							setDateOfBirth(date);
							triggerChange();
						}}
						labelKey='Date of birth'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
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
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialPass
						value={password}
						onChange={({ target: { value } }) => {
							setPassword(value);
							triggerChange();
						}}
						labelKey='Enter password'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Checkbox
						size='large'
						checked={agree}
						onChange={({ target: { checked } }) => {
							setAgree(checked);
							triggerChange();
						}}>
						I agree to Kantor's <Link>Terms of use</Link> and <Link>Privacy Policy.</Link>
					</Checkbox>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default HolderPage;
