import React from 'react';
import { Row, Col, Button, Input, Checkbox, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { RegistrationHeader, RegistrationForm, RegistrationContent } from './components';

const { Link } = Typography;

const HolderPage = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Welcome to Kantor' Secondary='To begin, create your account.' />
			<RegistrationContent>
				<Row gutter={[16, 16]}>
					<Col span='12'>
						<Input size='large' placeholder='First name' />
					</Col>
					<Col span='12'>
						<Input size='large' placeholder='Last name' />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input size='large' placeholder='Date of birth' />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input size='large' placeholder='Email' />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input.Password size='large' placeholder='Enter password' />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Input.Password
							size='large'
							placeholder='Confirm password'
							iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<Checkbox size='large'>
							I agree to Kantor's <Link>Terms of use</Link> and <Link>Privacy Policy.</Link>
						</Checkbox>
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default HolderPage;
