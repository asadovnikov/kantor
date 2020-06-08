import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';

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
					</Col>
					<Col span='16'>
						<Input size='large' placeholder='Phone number' />
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default VerifyPhonePage;
