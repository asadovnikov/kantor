import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignInForm from '../Pages/registration/SignInForm';
import SignUpForm from '../Pages/registration/SignUpForm';
import ResetPasswordPage from '../Pages/registration/ResetPasswordPage';

export const authRoutes = [
	<Route path='/reset-password' component={ResetPasswordPage} />,
	<Route path='/signin' component={SignInForm} />,
	<Route path='/signup' component={SignUpForm} />,
];

export const AuthFlow = () => {
	return (
		<>
			<Route path='/reset-password' component={ResetPasswordPage} />
			<Route path='/signin' component={SignInForm} />
			<Route path='/signup' component={SignUpForm} />
		</>
	);
};
