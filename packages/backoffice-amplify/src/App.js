import React from 'react';
// import logo from './logo.svg';
import './App.less';
import { AdminAppLayout } from './AdminApp';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

const AuthFlow = ({ children }) => (
	<AmplifyAuthenticator>
		<AmplifySignIn headerText='My Custom Sign In Text' slot='sign-in'></AmplifySignIn>
		{children}
	</AmplifyAuthenticator>
);

const AuthFlowApp = () => (
	<AmplifyAuthenticator>
		<AmplifySignIn headerText='My Custom Sign In Text' slot='sign-in'></AmplifySignIn>
	</AmplifyAuthenticator>
);

function App() {
	return <AdminAppLayout />;
}

export default withAuthenticator(App);
