import React from 'react';
import { Result, Typography, Row, Col } from 'antd';
import emailSent from './emailSent.png';
import { RegistrationForm } from './components';

const { Text, Link } = Typography;

const EmailSentPage = () => {
	return (
		<RegistrationForm>
			<Result
				icon={<img src={emailSent} alt='Check your email' />}
				title='Check your inbox!'
				extra={
					<>
						<Row gutter={[16, 16]} justify='center'>
							<Col>
								<Text>We've sent you an email with the next steps.</Text>
							</Col>
						</Row>
						<Row gutter={[16, 16]} justify='center'>
							<Col>
								<Link>Resend email</Link>
							</Col>
						</Row>
					</>
				}
			/>
		</RegistrationForm>
	);
};

export default EmailSentPage;
