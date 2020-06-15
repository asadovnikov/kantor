import React from 'react';
import { Row, Col } from 'antd';
// import finance from './assets/financeVerification1.png';
import { finance, address, id } from '../../assets';
import { RegistrationHeader, RegistrationForm, RegistrationContent, ActionTile } from './components';

const DocumentsForm = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main={`Verify your documents`}
				Secondary={`In order to to payments we need to verify your documents fires`}
			/>
			<RegistrationContent>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<div>We do not need 'continue' button on this form</div>
						<ActionTile
							icon={id}
							title='Verify identity'
							description={`We need photo of your id document to prove your identity`}
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<ActionTile icon={address} title='Verify address' description={`We need to prove specified address`} />
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span='24'>
						<ActionTile icon={finance} title='Financial documents' description={`You should prove source of income`} />
					</Col>
				</Row>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default DocumentsForm;
