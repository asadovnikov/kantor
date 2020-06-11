import React from 'react';
// import AmplifyTheme from '../registration/components/AmplifyTheme';
import { Authenticator, withAuthenticator, SignIn } from 'aws-amplify-react';
import { Input, Typography, Space } from 'antd';
// import { AmplifySignIn } from '@aws-amplify/ui-react';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Link } = Typography;

class MySignIn extends SignIn {
	constructor(props) {
		super(props);
		console.log(props);
		this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
	}

	showComponent(theme) {
		return (
			<>
				<FormContentRow>
					<Input
						size='large'
						id='username'
						key='username'
						name='username'
						onChange={this.handleInputChange}
						placeholder='Email'
					/>
				</FormContentRow>
				<FormContentRow>
					<Input.Password
						size='large'
						placeholder='Enter password'
						iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					/>
				</FormContentRow>
				<FormContentRow>
					<Space>
						<Typography.Text type='secondary'>Forgot your password?</Typography.Text>
						<Link>Reset password</Link>
					</Space>
				</FormContentRow>
			</>
		);
	}
}

const SignInForm = () => {
	// const AlwaysOn = (props) => {
	// 	return (
	// 		<div>
	// 			<div>I am always here to show current auth state: {props.authState}</div>
	// 			<button onClick={() => props.onStateChange('signUp')}>Show Sign Up</button>
	// 		</div>
	// 	);
	// };

	// const handleAuthStateChange = (state) => {
	// 	if (state === 'signedIn') {
	// 		/* Do something when the user has signed-in */
	// 	}
	// };
	return (
		<FormLayout>
			<FormHeader Main={`Well hello!`} />
			<FormContent>
				<FormContentRow>
					<Authenticator hideDefault={true}>
						<MySignIn />
					</Authenticator>
				</FormContentRow>
			</FormContent>
		</FormLayout>
	);
};

export default SignInForm;
