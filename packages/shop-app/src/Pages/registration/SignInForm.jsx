import React, { useState } from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { Space, message } from 'antd';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { MaterialPass, MaterialTxt } from './components/LabeledInput';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
const SignInForm = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loadingState, setLoadingState] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isVerified, setIsVerified] = useState(true);
	const doSignIn = () => {
		setLoadingState(true);

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
	const RegistrationLink = () => {
		return (
			<ButtonBase component={RouterLink} to='/signup'>
				<Typography variant='body2' color='primary'>
					Register now for free.
				</Typography>
			</ButtonBase>
		);
	};
	return (
		<RegistrationForm>
			{isLoggedIn === true && <Redirect to='/' />}
			{isVerified === false && <Redirect to={`/verify-email/${userName}`} />}
			<RegistrationHeader
				Main='Sign in to your account'
				Secondary={`Don't have account?`}
				Extra={<RegistrationLink />}
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
						<Typography color='primary' variant='body2' type='secondary'>
							Forgot your password?
						</Typography>
						<RouterLink to='/reset-password'>Reset password</RouterLink>
					</Space>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default SignInForm;
