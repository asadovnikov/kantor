import React, { useState } from 'react';
import { Input, Typography, Space, message } from 'antd';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { MaterialPass, MaterialTxt } from './components/LabeledInput';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Link } = Typography;

const SignInForm = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loadingState, setLoadingState] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isVerified, setIsVerified] = useState(true);
	const doSignIn = () => {
		setLoadingState(true);
		// debugger;
		Auth.signIn(userName, password)
			.then((result) => {
				console.log(result);
				// message.success('We are done!');
				setIsLoggedIn(true);
			})
			.catch((err) => {
				console.log(err);
				if (err.code === 'UserNotConfirmedException') {
					setIsVerified(false);
				} else {
					message.error('Error: check your user name and password');
				}
			})
			.finally(() => setLoadingState(false));
	};
	return (
		<RegistrationForm>
			{isLoggedIn === true && <Redirect to='/' />}
			{isVerified === false && <Redirect to={`/verify-email/${userName}`} />}
			<RegistrationHeader
				Main='Sign in to your account'
				Secondary={`Don't have account?`}
				SecondaryExtra={<Link href='/signup'>Register now for free.</Link>}
			/>

			<RegistrationContent isLoading={loadingState} onAction={doSignIn} actionText='Sign in'>
				<RegistrationContentRow>
					<MaterialTxt
						inputValue={userName}
						onChange={(props) => {
							setUserName(props.target.value);
						}}
						id='email'
						autoComplete='email'
						labelKey='Email'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialPass
						inputValue={password}
						onChange={(props) => setPassword(props.target.value)}
						labelKey='Enter password'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Space>
						<Typography.Text type='secondary'>Forgot your password?</Typography.Text>
						<Link href='/reset-password'>Reset password</Link>
					</Space>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default SignInForm;
