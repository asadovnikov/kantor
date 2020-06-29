import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, Redirect } from 'react-router-dom';
import { Typography } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { MaterialPass, MaterialTxt } from './components/LabeledInput';
// const { Title } = Typography;

const ResetPasswordPage = () => {
	const [userName, setUserName] = useState();
	const [code, setCode] = useState();
	const [pass, setPass] = useState();
	// const [userName, setUserName] = useState();
	const [loadingState, setLoadingState] = useState(false);
	const [codeWasSent, setCodeWasSent] = useState(false);

	const [passwordChanged, setPasswordChanged] = useState(false);

	// const changePass = async () => {
	// 	const res = await Auth.forgotPassword(userName);
	// 	console.log(res);

	// 	const changeResult = await Auth.forgotPasswordSubmit(userName, code, pass);
	// 	return changeResult;
	// };

	const onApply = () => {
		setLoadingState(true);
		if (!codeWasSent) {
			Auth.forgotPassword(userName)
				.then((data) => {
					console.log(data);
					setCodeWasSent(true);
				})
				.catch((err) => {
					console.error(err);
				})
				.finally(() => {
					setLoadingState(false);
				});
		} else {
			Auth.forgotPasswordSubmit(userName, code, pass)
				.then((data) => {
					console.log(data);
					setPasswordChanged(true);
				})
				.catch((err) => console.error(err))
				.finally(() => setLoadingState(false));
		}
	};
	return (
		<RegistrationForm>
			{passwordChanged === true && <Redirect to='/signin' />}
			<RegistrationHeader
				Main={`Reset your password`}
				Secondary={`Provide your registration email so we can send a verification code there`}
				Extra={
					<Typography.Link>
						<Link to='/signin'>Back to Sign in</Link>
					</Typography.Link>
				}
			/>
			<RegistrationContent
				onAction={onApply}
				loading={loadingState}
				actionText={codeWasSent === true ? 'Change password' : 'Send code'}>
				{codeWasSent === false && (
					<RegistrationContentRow>
						<MaterialTxt
							value={userName}
							onChange={({ target: { value } }) => {
								setUserName(value);
							}}
							size='large'
							labelKey='Email'
						/>
					</RegistrationContentRow>
				)}

				{codeWasSent === true && (
					<>
						<RegistrationContentRow>
							<MaterialTxt
								value={code}
								onChange={({ target: { value } }) => {
									setCode(value);
								}}
								size='large'
								labelKey='Enter your code'
							/>
						</RegistrationContentRow>
						<RegistrationContentRow>
							<MaterialPass
								value={pass}
								onChange={({ target: { value } }) => {
									setPass(value);
								}}
								labelKey='Enter new password'
							/>
						</RegistrationContentRow>
					</>
				)}
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default ResetPasswordPage;
