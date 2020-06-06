import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { AccountCard, RegistrationHeader, RegistrationForm } from './components';
const { Link } = Typography;

const SelectAccountType = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Create your account'
				Secondary='Already have an account?'
				SecondaryExtra={
					<Link href='https://ant.design' target='_blank'>
						Log in
					</Link>
				}
			/>
			<Row justify='center' style={{ margin: '50px 0' }}>
				<Col>
					<AccountCard cardType='personal' />
				</Col>
				<Col>
					<Divider type='vertical' style={{ height: 300 }}></Divider>
				</Col>
				<Col>
					<AccountCard cardType='corporate' />
				</Col>
			</Row>
		</RegistrationForm>
	);
};

export default SelectAccountType;
