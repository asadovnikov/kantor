import React, { useState } from 'react';
import { message } from 'antd';
import { Auth } from 'aws-amplify';
import { RequestPasswordChangePage } from './RequestPasswordChange';
import { ChangePasswordPage } from './ChangePassword';
import { useHistory } from 'react-router-dom';

export const ResetPasswordPage = () => {
	const [step, setStep] = useState(0);
	const [email, setEmail] = useState();
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const passwordChanged = async () => {
		setLoading(true);
		history.push('/signin');
		Auth.signOut();
	};

	return (
		<>
			{step === 0 && <RequestPasswordChangePage email={email} onEmailChange={setEmail} onApply={() => setStep(1)} />}
			{step === 1 && <ChangePasswordPage email={email} onApply={passwordChanged} />}
		</>
	);
};
