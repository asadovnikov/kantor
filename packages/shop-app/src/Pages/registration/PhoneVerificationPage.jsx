import React, { useState } from 'react';
import { Row, Col, Input, Button, Select } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
const { Option } = Select;

const VerifyPhonePage = () => {
	const [countryCode, setCountryCode] = useState('us');
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Enter your phone number'
				Secondary={`We'll send you a message to confirm it's really you.`}
			/>
			<RegistrationContent>
				<Row gutter={[16, 16]}>
					<Col span='8'>
						<PhoneInput
							country='us'
							inputProps={{
								name: 'phoneCode',
								required: true,
								enableAreaCodes: false,
								countryCodeEditable: false,
								enableSearch: true,
							}}
						/>
						{/* <Select defaultValue='UA' size='large' placeholder='Country' style={{ width: '100%' }}>
							<Option value='US'>UA +380</Option>
							<Option value='UK'>UK +790</Option>
						</Select> */}
					</Col>
					<Col span='16'>
						<Input size='large' placeholder='Phone number' />
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

export default VerifyPhonePage;
