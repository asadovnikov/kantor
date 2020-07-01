import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';
import { id, address, finance } from '../assets';
import { Card, Col, Row, Avatar } from 'antd';

import { VerificationSuccessWidget } from './IllustrateResult';

const { Meta } = Card;
const StageItem = ({ onClick, icon, title, description }) => {
	return (
		<Row justify='center'>
			<Col span={8}>
				<Card onClick={onClick} hoverable style={{ marginTop: 16 }}>
					<Meta avatar={<Avatar shape='square' size={84} src={icon} />} title={title} description={description} />
				</Card>
			</Col>
		</Row>
	);
};

const verificationURI = 'https://p5m841cnq5.execute-api.us-east-1.amazonaws.com/dev/startkyc';

export const KYCStatusWidget = () => {
	const { customer = {} } = useContext(AuthContext);
	const { KYCVerification = {} } = customer;
	const goodStatus = 'VALIDATED';

	const { poaVerification = 'FAILED', idVerification = 'FAILED', financeVerification = 'FAILED' } = KYCVerification;

	const startJumio = async () => {
		try {
			var form = document.createElement('form');
			document.body.appendChild(form);
			form.method = 'post';
			form.action = `${verificationURI}/${customer.id}.${KYCVerification.id}`;
			form.innerHTML = `<input type='hidden' name='user' value='${customer.id}' />`;
			form.submit();
		} catch (err) {
			console.error(err);
		}
	};
	// console.log(KYCVerification);
	return (
		<div className='site-card-wrapper'>
			{idVerification !== goodStatus && (
				<StageItem
					key='idVerification'
					icon={id}
					onClick={startJumio}
					title='ID Verification'
					description='We need photo of your id document to prove your identity'
				/>
			)}
			{poaVerification !== goodStatus && (
				<StageItem
					key='addressVerification'
					icon={address}
					title='Address Verification'
					description='We need to prove specified address'
				/>
			)}
			{financeVerification !== goodStatus && (
				<StageItem
					key='financeVerification'
					icon={finance}
					title='Financial documents'
					description='You should prove your income'
				/>
			)}
			{idVerification === goodStatus && poaVerification === goodStatus && financeVerification === goodStatus && (
				<VerificationSuccessWidget />
			)}
		</div>
	);
};
