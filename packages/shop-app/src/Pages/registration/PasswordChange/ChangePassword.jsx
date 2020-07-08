import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { ProgressElementButton, ErrorMessage } from '../../../Components';
import { RegistrationHeader, RegistrationContent, RegistrationForm, RegistrationContentRow } from '../components';
import { ChangePasswordWidget } from '../../../Widgets';

export const ChangePasswordPage = ({ email, onApply }) => {
	const [valid, setValid] = useState(false);
	const [code, setCode] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);
	const [sendingCode, setSendingCode] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		let isCancelled = false;
		const isValid = code && code.length === 6 && password && password.length > 0;
		if (!isCancelled) {
			setValid(isValid);
		}
		return () => (isCancelled = true);
	}, [code, password]);

	const resetPassword = () => {
		setLoading(true);
		Auth.forgotPasswordSubmit(email, code, password)
			.then((data) => {
				console.log(data);
				onApply();
			})
			.catch((err) => {
				console.log(err);
				setShowMessage(true);
			})
			.finally(() => setLoading(false));
	};

	const doResend = () => {
		setSendingCode(true);

		Auth.forgotPassword(email)
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
				setShowMessage(true);
			})
			.finally(() => {
				setSendingCode(false);
			});
	};

	return (
		<RegistrationForm>
			<RegistrationHeader
				Extra={
					<ProgressElementButton onClick={doResend} loading={sendingCode} color='primary'>
						Resend code
					</ProgressElementButton>
				}
				Main='Reset your password'
				Secondary={`Use the code provided in email sent to ${email}.`}
			/>
			<RegistrationContent isLoading={loading} isValid={valid} onAction={resetPassword} actionText='Reset password'>
				<RegistrationContentRow>
					<ChangePasswordWidget code={code} onCode={setCode} password={password} onPassword={setPassword} />
				</RegistrationContentRow>
			</RegistrationContent>
			<ErrorMessage
				message={`There is a problem with entered data, check provided email or code!`}
				open={showMessage}
				onClose={() => setShowMessage(false)}
			/>
		</RegistrationForm>
	);
};
