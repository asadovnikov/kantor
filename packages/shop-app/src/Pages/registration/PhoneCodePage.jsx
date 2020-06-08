import React from 'react';
import { Row, Col, Typography, Input, Button, Card, Space } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';
const { Title, Text, Link } = Typography;

const PhoneCodePage = () => {
	return (
		<RegistrationForm>
			<Row justify='center'>
				<Col>
					<Title level={2}>Enter 4-digit code</Title>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Text type='secondary'>We've sent you a message with the code to:</Text>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Text type='secondary'>(+380) 936334660</Text>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Link type='secondary'>Resend message</Link>
				</Col>
			</Row>
			<RegistrationContent>
				<Row gutter={[16, 16]} justify='center'>
					<Col span='14'>
						<Text type='secondary'>Verify the code from our message</Text>
						<Space>
							<Input />
							<Input />
							<Input />
							<Input />
						</Space>
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default PhoneCodePage;
