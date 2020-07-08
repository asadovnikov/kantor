import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { RegistrationHeader, RegistrationContent, RegistrationForm, RegistrationContentRow } from '../components';
import { ResetPasswordWidget } from '../../../Widgets';

export const RequestPasswordChangePage = ({ email, onEmailChange, onApply }) => {
	const [valid, setValid] = useState(false);
	const [notValidEmail, setNotValidEmail] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		let isCanceled = false;
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const validationResult = re.test(String(email).toLowerCase());
		if (!isCanceled) {
			setNotValidEmail(!validationResult);
			setValid(validationResult);
		}
		return () => (isCanceled = true);
	}, [email]);

	const resetPassword = () => {
		setLoading(true);
		Auth.forgotPassword(email)
			.then((data) => {
				console.log(data);
				onApply();
			})
			.catch((err) => {
				onApply();
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Reset your password'
				Secondary='Provide your registration email so we can send a verification code there.'
			/>
			<RegistrationContent isLoading={loading} isValid={valid} onAction={resetPassword}>
				<RegistrationContentRow>
					<ResetPasswordWidget email={email} onEmailChanged={onEmailChange} notValidEmail={notValidEmail} />
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};
