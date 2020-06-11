import React, { useState } from 'react';
import { Input, Typography, Space, message } from 'antd';
import { Auth } from 'aws-amplify';
// import { LoadingOutlined } from '@ant-design/icons';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Link } = Typography;

const SignInForm = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loadingState, setLoadingState] = useState(false);
	const doSignIn = () => {
		setLoadingState(true);
		Auth.signIn(userName, password)
			.then((result) => {
				console.log(result);
				message.success('We are done!');
			})
			.catch((err) => {
				message.error('Error: check your user name and password');
			})
			.finally(() => setLoadingState(false));
	};
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Sign in to your account'
				Secondary={`Don't have account?`}
				SecondaryExtra={
					<Link href='https://ant.design' target='_blank'>
						Register now for free.
					</Link>
				}
			/>

			<RegistrationContent isLoading={loadingState} onAction={doSignIn} actionText='Sign in'>
				<RegistrationContentRow>
					<Input
						size='large'
						id='username'
						key='username'
						type='email'
						name='username'
						value={userName}
						onChange={(props) => {
							setUserName(props.target.value);
						}}
						placeholder='Email'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input.Password
						size='large'
						id='password'
						key='password'
						name='password'
						value={password}
						onChange={(props) => setPassword(props.target.value)}
						placeholder='Enter password'
						iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Space>
						<Typography.Text type='secondary'>Forgot your password?</Typography.Text>
						<Link>Reset password</Link>
					</Space>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default SignInForm;
