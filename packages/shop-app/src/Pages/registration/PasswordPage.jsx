import React from 'react';
import { Row, Col, Typography, Input, Button, Card, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';
const { Title, Text } = Typography;

const PasswordPage = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main={`Let's set your password`}
				Secondary={`This is your safety belt. Make sure it's string enough.`}
			/>
			<RegistrationContent>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input.Password placeholder='Enter password' />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input.Password
							placeholder='Confirm password'
							iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
						/>
					</Col>
				</Row>
				<Row gutter={[24, 24]} justify='center' style={{ margin: '50px 0' }}>
					<Col span='16'>
						<Button shape='round' size='large' type='primary' block>
							Continue
						</Button>
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default PasswordPage;
