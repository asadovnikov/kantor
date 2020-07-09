import React, { useState } from 'react';
import { message } from 'antd';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';
import HolderPage from './HolderPage';
import AddressPage from './AddressPage';
import FinancePage from './FinancePage';
import { EmailCodePage } from './EmailCodePage';
import { ErrorMessage } from '../../Components';

const SignUpForm = () => {
	const userRegistrationInfo = {
		firstName: '',
		lastName: '',
		email: '',
		dateOfBirth: '',
		password: '',
		agree: false,
		region: '',
		country: '',
		homeAddress: '',
		homeAddress2: '',
		city: '',
		postalCode: '',
	};
	const [step, setStep] = useState(0);
	const [basicInfo, setBasicInfo] = useState({});
	const [extendedInfo, setExtendedInfo] = useState({});
	const [financeInfo, setFinanceInfo] = useState({});
	const [verificationCode, setVerificationCode] = useState();
	const [currentUser, setCurrentUser] = useState();
	const [loadingState, setLoadingState] = useState(false);
	const [commitUser, setCommitUser] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

	const doVerify = () => {
		setLoadingState(true);
		Auth.confirmSignUp(currentUser.username, verificationCode)
			.then(() => {
				message.success('We are done here');
				setCommitUser(true);
			})
			.catch((e) => {
				console.log('failed with error', e);
			})
			.finally(() => setLoadingState(false));
	};

	const doSignUp = () => {
		setLoadingState(true);

		const { email, password, ...rest } = basicInfo;
		const username = email;
		const pre = {
			...rest,
			...extendedInfo,
			...financeInfo,
		};
		const attrs = {};
		Object.keys(pre).forEach((key) => {
			attrs[`custom:${key}`] = pre[key]; //TODO: why the hack
		});

		const dataObj = {
			username,
			password,
			attributes: {
				email,
				...attrs,
			},
		};
		console.log(dataObj);
		// window.grecaptcha
		// 	.execute('6LfH3_sUAAAAAM7TSfxBwVfwqhZLt2meltrUSJIg', { action: 'submit' })
		// 	.then(function (token) {
		// 		Auth.signUp({
		// 			...dataObj,
		// 			validationData: {
		// 				Name: 'recaptchaToken',
		// 				Value: token,
		// 			},
		// 		})
		// 			.then(({ user }) => {
		// 				console.log(user);
		// 				setCurrentUser(user);
		// 				setStep(3);
		// 				message.success('Verification email was sent');
		// 			})
		// 			.catch((err) => {
		// 				console.error(err);
		// 				message.error('Something went wrong, please check provided data');
		// 			});
		// 	})
		debugger;
		Auth.signUp(dataObj)
			.then(({ user }) => {
				console.log(user);
				setCurrentUser(user);
				setStep(3);
				message.success('Verification email was sent');
			})
			.catch((err) => {
				console.error(err);
				showMessage(true);
			})
			.finally(() => {
				setLoadingState(false);
			});
	};

	// const steps = [];
	return (
		<>
			<ErrorMessage
				message={`Something went wrong, please check provided data!`}
				open={showMessage}
				onClose={() => setShowMessage(false)}
			/>
			{step === 0 && (
				<HolderPage value={basicInfo} onChange={(props) => setBasicInfo(props)} onApply={() => setStep(1)} />
			)}
			{step === 1 && (
				<AddressPage value={extendedInfo} onChange={(props) => setExtendedInfo(props)} onApply={() => setStep(2)} />
			)}
			{step === 2 && (
				<FinancePage
					isLoading={loadingState}
					value={financeInfo}
					onChange={(props) => setFinanceInfo(props)}
					onApply={() => doSignUp()}
				/>
			)}
			{step === 3 && (
				<EmailCodePage
					isLoading={loadingState}
					email={basicInfo.email}
					onChange={(props) => setVerificationCode(props)}
					onApply={() => doVerify()}
				/>
			)}
			{commitUser === true && <Redirect to='/' />}
		</>
	);
};

export default SignUpForm;
