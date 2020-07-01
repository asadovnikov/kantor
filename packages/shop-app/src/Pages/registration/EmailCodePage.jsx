import React, { useState } from 'react';
import MaskedInput from 'react-maskedinput';
import { Row, Col, Space } from 'antd';
import { Typography, Container } from '@material-ui/core';
import { RegistrationForm, RegistrationContent, RegistrationHeader, RegistrationContentRow } from './components';
// import { MaterialCodeInput } from './components/LabeledInput';
// import { LinkButton } from './components/MaterialButtons';
import { useParams } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// 	emailCodeInput: {
// 		backgroundColor: theme.palette.background.paper,
// 		padding: theme.spacing(6),
// 		textAlign: 'center',
// 		fontSize: '3vw',
// 	},
// }));

const { Title, Text, Link } = Typography;

export const EmailCodePage = ({ email, onChange = () => {}, onApply, isLoading }) => {
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
			// setIsValid(validCode);
			return validCode;
		}
		return false;
	};
	// const [verfificationState, setVerificationState] = useState();
	const [isValid, setIsValid] = useState(false);
	// const [codes, setCodes] = useState({
	// 	code1: undefined,
	// 	code2: undefined,
	// 	code3: undefined,
	// 	code4: undefined,
	// 	code5: undefined,
	// 	code6: undefined,
	// });

	// useEffect(() => {
	// 	const isValid =
	// 		!isNaN(codes.code1) &&
	// 		!isNaN(codes.code2) &&
	// 		!isNaN(codes.code3) &&
	// 		!isNaN(codes.code4) &&
	// 		!isNaN(codes.code5) &&
	// 		!isNaN(codes.code6);
	// 	setIsValid(isValid);

	// 	if (isValid && onChange) {
	// 		onChange(`${codes.code1}${codes.code2}${codes.code3}${codes.code4}${codes.code5}${codes.code6}`);
	// 	}

	// 	return () => {};
	// }, [codes]);

	return (
		<RegistrationForm>
			<RegistrationHeader Main='Enter 6-digit code' Secondary={`We've sent you a message with the code to: ${email}`} />
			{/* <Row justify='center'>
				<Col>
					<LinkButton
						onClick={() => {
							alert(1);
						}}>
						<Link type='secondary'>Resend message </Link>
					</LinkButton>
				</Col>
			</Row> */}
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
				{/* <Row gutter={[16, 16]} justify='center'>
					<Col span='14'>
						<Space>
							<MaterialCodeInput
								value={codes.code1}
								onChange={({ target: { value } }) => setCodes({ ...codes, code1: value })}
							/>
							<MaterialCodeInput
								value={codes.code2}
								onChange={({ target: { value } }) => setCodes({ ...codes, code2: value })}
							/>
							<MaterialCodeInput
								value={codes.code3}
								onChange={({ target: { value } }) => setCodes({ ...codes, code3: value })}
							/>
							<MaterialCodeInput
								value={codes.code4}
								onChange={({ target: { value } }) => setCodes({ ...codes, code4: value })}
							/>
							<MaterialCodeInput
								value={codes.code5}
								onChange={({ target: { value } }) => setCodes({ ...codes, code5: value })}
							/>
							<MaterialCodeInput
								value={codes.code6}
								onChange={({ target: { value } }) => setCodes({ ...codes, code6: value })}
							/>
						</Space>
					</Col>
				</Row> */}
			</RegistrationContent>
		</RegistrationForm>
	);
};

//export default EmailCodePage;
