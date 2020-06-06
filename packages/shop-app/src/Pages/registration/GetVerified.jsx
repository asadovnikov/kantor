import React from 'react';
import { Row, Col, Typography, Button, Card, Space } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';
const { Title, Text } = Typography;

const GetVerifiedPage = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Get Verified'
				Secondary='Before you can start using Kantor, you will need to complete the following steps.'
			/>
			<RegistrationContent>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Space>
							<Title level={4}>1.</Title>
							<Title type='secondary' level={4}>
								{' '}
								Enter your info and upload documents
							</Title>
						</Space>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Space>
							<Title level={4}>2.</Title>
							<Title type='secondary' level={4}>
								{' '}
								Provide basic financial information
							</Title>
						</Space>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Space>
							<Title level={4}>3.</Title>
							<Title type='secondary' level={4}>
								{' '}
								Enable extra security
							</Title>
						</Space>
					</Col>
				</Row>
				<Row gutter={[24, 24]} justify='center' style={{ margin: '50px 0' }}>
					<Col span='16'>
						<Button shape='round' size='large' type='primary' block>
							Start Your Verification
						</Button>
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default GetVerifiedPage;
