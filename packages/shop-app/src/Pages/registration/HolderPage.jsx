import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Checkbox, Typography, DatePicker } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';

const { Link } = Typography;

const HolderPage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [firstName, setFirstName] = useState(value.firstName);
	const [lastName, setLastName] = useState(value.lastName);
	const [email, setEmail] = useState(value.email);
	const [dateOfBirth, setDateOfBirth] = useState(value.dateOfBirth);
	const [password, setPassword] = useState(value.password);
	const [agree, setAgree] = useState(value.agree);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		setIsValid((firstName && lastName && email && dateOfBirth && password && agree) === true);
	}, [firstName, lastName, email, dateOfBirth, password, agree]);

	const triggerChange = () => {
		if (onChange) {
			onChange({ firstName, lastName, email, dateOfBirth, password });
		}
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Welcome to Kantor' Secondary='To begin, create your account.' />
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<Row gutter={[16, 16]}>
					<Col span='12'>
						<Input
							value={firstName}
							onChange={({ target: { value } }) => {
								setFirstName(value);
								triggerChange();
							}}
							size='large'
							placeholder='First name'
						/>
					</Col>
					<Col span='12'>
						<Input
							value={lastName}
							onChange={({ target: { value } }) => {
								setLastName(value);
								triggerChange();
							}}
							size='large'
							placeholder='Last name'
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<DatePicker
							value={dateOfBirth}
							onChange={(date) => {
								setDateOfBirth(date);
								triggerChange();
							}}
							size='large'
							placeholder='Date of birth'
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input
							value={email}
							type='email'
							onChange={({ target: { value } }) => {
								setEmail(value);
								triggerChange();
							}}
							size='large'
							placeholder='Email'
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input.Password
							value={password}
							onChange={({ target: { value } }) => {
								setPassword(value);
								triggerChange();
							}}
							size='large'
							placeholder='Enter password'
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Checkbox
							size='large'
							checked={agree}
							onChange={({ target: { checked } }) => {
								setAgree(checked);
								triggerChange();
							}}>
							I agree to Kantor's <Link>Terms of use</Link> and <Link>Privacy Policy.</Link>
						</Checkbox>
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default HolderPage;
