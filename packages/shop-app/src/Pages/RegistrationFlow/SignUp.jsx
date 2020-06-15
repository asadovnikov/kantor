import React, { useState } from 'react';
import { message } from 'antd';
import { Auth } from 'aws-amplify';
import { HolderPage } from './Steps/HolderPage';
// import { LoadingOutlined } from '@ant-design/icons';
// import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';

// import HolderPage from './HolderPage';
// import AddressPage from './AddressPage';
// import FinancePage from './FinancePage';
// import EmailCodePage from './EmailCodePage';

export const SignUp = () => {
	const [step, setStep] = useState(0);
	const [basicInfo, setBasicInfo] = useState({});
	const [extendedInfo, setExtendedInfo] = useState({});
	const [financeInfo, setFinanceInfo] = useState({});
	const [verificationCode, setVerificationCode] = useState();
	const [currentUser, setCurrentUser] = useState();
	const [loadingState, setLoadingState] = useState(false);

	const doVerify = () => {
		setLoadingState(true);
		Auth.confirmSignUp(currentUser.username, verificationCode)
			.then(() => {
				message.success('We are done here');
			})
			.catch((e) => {
				console.log('failed with error', e);
			})
			.finally(() => setLoadingState(false));
	};

	const doSignUp = () => {
		setLoadingState(true);
		debugger;
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
		Auth.signUp(dataObj)
			.then(({ user }) => {
				console.log(user);
				setCurrentUser(user);
				setStep(3);
				message.success('Verification email was sent');
			})
			.catch((err) => {
				console.error(err);
				message.error('Something went wrong, please check provided data');
			})
			.finally(() => {
				setLoadingState(false);
			});
	};

	const steps = [];
	return (
		<>
			{step === 0 && (
				<HolderPage value={basicInfo} onChange={(props) => setBasicInfo(props)} onApply={() => setStep(1)} />
			)}
			{/* {step === 1 && (
				<AddressPage value={extendedInfo} onChange={(props) => setExtendedInfo(props)} onApply={() => setStep(2)} />
			)}
			{step === 2 && (
				<FinancePage value={financeInfo} onChange={(props) => setFinanceInfo(props)} onApply={() => doSignUp()} />
			)}
			{step === 3 && (
				<EmailCodePage
					email={basicInfo.email}
					onChange={(props) => setVerificationCode(props)}
					onApply={() => doVerify()}
				/>
			)} */}
		</>
	);
};
