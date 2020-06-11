import React, { useState } from 'react';
import { Input, Typography, Space, message } from 'antd';
import { Auth } from 'aws-amplify';
// import { LoadingOutlined } from '@ant-design/icons';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import HolderPage from './HolderPage';
import AddressPage from './AddressPage';
import FinancePage from './FinancePage';
const { Link } = Typography;

const SignUpForm = () => {
	const [step, setStep] = useState(0);
	const [basicInfo, setBasicInfo] = useState({});
	const [extendedInfo, setExtendedInfo] = useState({});
	const [financeInfo, setFinanceInfo] = useState({});
	const [loadingState, setLoadingState] = useState(false);
	const doSignUp = () => {
		setLoadingState(true);
		debugger;
		const { email, password, ...rest } = basicInfo;
		const username = email;

		const dataObj = {
			username,
			password,
			attributes: {
				email,
				...rest,
				...extendedInfo,
				...financeInfo,
			},
		};
		console.log(dataObj);
		Auth.signUp(dataObj)
			.then((data) => {
				console.log(data);
				message.success('We are done here');
			})
			.catch((err) => {
				console.error(err);
				message.error(err.message);
			})
			.finally(() => {
				setLoadingState(false);
			});
		// Auth.signIn(userName, password)
		// 	.then((result) => {
		// 		console.log(result);
		// 		message.success('We are done!');
		// 	})
		// 	.catch((err) => {
		// 		message.error('Error: check your user name and password');
		// 	})
		// 	.finally(() => setLoadingState(false));
	};

	const steps = [];
	return (
		<>
			{step === 0 && (
				<HolderPage value={basicInfo} onChange={(props) => setBasicInfo(props)} onApply={() => setStep(1)} />
			)}
			{step === 1 && (
				<AddressPage value={extendedInfo} onChange={(props) => setExtendedInfo(props)} onApply={() => setStep(2)} />
			)}
			{step === 2 && (
				<FinancePage value={financeInfo} onChange={(props) => setFinanceInfo(props)} onApply={() => doSignUp()} />
			)}
		</>
	);
};

export default SignUpForm;
