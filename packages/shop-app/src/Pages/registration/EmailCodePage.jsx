import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';
import { MaterialCodeInput } from './components/LabeledInput';
import { LinkButton } from './components/MaterialButtons';
import { useParams } from 'react-router-dom';
const { Title, Text, Link } = Typography;

const EmailCodePage = ({ email, onChange, onApply }) => {
	let { validationId } = useParams();
	if (validationId) {
		email = validationId;
	}
	const [verfificationState, setVerificationState] = useState();
	const [isValid, setIsValid] = useState();
	const [codes, setCodes] = useState({
		code1: undefined,
		code2: undefined,
		code3: undefined,
		code4: undefined,
		code5: undefined,
		code6: undefined,
	});

	useEffect(() => {
		const isValid =
			!isNaN(codes.code1) &&
			!isNaN(codes.code2) &&
			!isNaN(codes.code3) &&
			!isNaN(codes.code4) &&
			!isNaN(codes.code5) &&
			!isNaN(codes.code6);
		setIsValid(isValid);

		if (isValid && onChange) {
			onChange(`${codes.code1}${codes.code2}${codes.code3}${codes.code4}${codes.code5}${codes.code6}`);
		}

		return () => {};
	}, [codes]);

	return (
		<RegistrationForm>
			<Row justify='center'>
				<Col>
					<Title level={2}>Enter 6-digit code</Title>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Text type='secondary'>We've sent you a message with the code to:</Text>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Text type='secondary'>email: {email}</Text>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<LinkButton
						onClick={() => {
							alert(1);
						}}>
						<Link type='secondary'>Resend message </Link>
					</LinkButton>
				</Col>
			</Row>
			<RegistrationContent isValid={isValid} onAction={onApply} actionText={`Verify`}>
				<Row gutter={[16, 16]} justify='center'>
					<Col>
						<Text type='secondary' style={{ textAlign: 'center' }}>
							Verify the code from our message
						</Text>
					</Col>
				</Row>
				<Row gutter={[16, 16]} justify='center'>
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
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default EmailCodePage;
