import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignInForm from '../Pages/registration/SignInForm';
import SignUpForm from '../Pages/registration/SignUpForm';
import ResetPasswordPage from '../Pages/registration/ResetPasswordPage';

export const AuthFlow = ({ material = false }) => {
	return (
		<Switch>
			{material === false && (
				<>
					<Route path='/reset-password'>
						<ResetPasswordPage />
					</Route>
					<Route path='/signin'>
						<SignInForm />
					</Route>
					<Route path='/signup'>
						<SignUpForm />
					</Route>
				</>
			)}
		</Switch>
	);
};
