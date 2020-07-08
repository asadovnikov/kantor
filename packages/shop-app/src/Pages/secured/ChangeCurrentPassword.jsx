import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import {
	RegistrationHeader,
	RegistrationContent,
	RegistrationForm,
	RegistrationContentRow,
} from '../registration/components';
import { ChangeCurrentPasswordWidget } from '../../Widgets';

export const ChangeCurrentPasswordPage = () => {
	const [valid, setValid] = useState(false);
	const [newPassword, setNewPassword] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let isCancelled = false;
		const isValid = newPassword && newPassword.length === 6 && password && password.length > 0;
		if (!isCancelled) {
			setValid(isValid);
		}
		return () => (isCancelled = true);
	}, [newPassword, password]);

	const changePassword = () => {
		setLoading(true);
		Auth.currentAuthenticatedUser()
			.then((user) => {
				return Auth.changePassword(user, password, newPassword);
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	};

	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Change your password'
				Secondary={`Enter your current and a new password you want to use.`}
			/>
			<RegistrationContent isLoading={loading} isValid={valid} onAction={changePassword} actionText='Change password'>
				<RegistrationContentRow>
					<ChangeCurrentPasswordWidget
						newPassword={newPassword}
						onNewPassword={setNewPassword}
						password={password}
						onPassword={setPassword}
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};
