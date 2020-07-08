import React, { useState } from 'react';
import MaskedInput from 'react-maskedinput';
import { Auth } from 'aws-amplify';
import { ProgressElementButton, ErrorMessage } from '../../Components';
import { Typography, Container } from '@material-ui/core';
import { RegistrationForm, RegistrationContent, RegistrationHeader, RegistrationContentRow } from './components';
import { useParams } from 'react-router-dom';

export const EmailCodePage = ({ email, onChange = () => {}, onApply, isLoading }) => {
	const [codeSending, setCodeSending] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	let { validationId } = useParams();
	// const classes = useStyles;
	if (validationId) {
		email = validationId;
	}
	const validateValue = (val = '') => {
		const codes = val.split(' ');
		if (codes.length === 6) {
			let validCode = true;
			codes.forEach((code) => {
				if (isNaN(code)) {
					validCode = false;
				}
			});
			return validCode;
		}
		return false;
	};
	const [isValid, setIsValid] = useState(false);
	const ResendCode = () => {
		return (
			<ProgressElementButton
				loading={codeSending}
				onClick={() => {
					setCodeSending(true);
					Auth.resendSignUp(email)
						.then((data) => {
							console.log(data);
						})
						.catch((err) => {
							console.log(err);
							setShowMessage(true);
						})
						.finally(() => setCodeSending(false));
				}}>
				<Typography variant='body2' color='primary'>
					Resend code
				</Typography>
			</ProgressElementButton>
		);
	};
	return (
		<RegistrationForm>
			<RegistrationHeader
				Extra={<ResendCode />}
				Main='Enter 6-digit code'
				Secondary={`We've sent you a message with the code to: ${email}`}
			/>
			<RegistrationContent isLoading={isLoading} isValid={isValid} onAction={onApply} actionText={`Verify`}>
				<RegistrationContentRow>
					<Typography variant='body2' align='center'>
						Verify the code from our message
					</Typography>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Container align='center'>
						<MaskedInput
							name='ValidationCode'
							id='ValidationCodeInput'
							placeholderChar='—'
							mask='1 1 1 1 1 1'
							onChange={({ target: { value } }) => {
								const validationResult = validateValue(value);
								if (validationResult) {
									onChange(value.split(' ').join(''));
								}
								setIsValid(validationResult);
							}}
						/>
					</Container>
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

//export default EmailCodePage;
