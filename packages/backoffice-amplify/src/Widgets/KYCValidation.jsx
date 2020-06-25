import React, { useState } from 'react';
import { Row, Col, Radio } from 'antd';

const style = { padding: '8px 0', textAlign: 'center' };
const textStyle = { padding: '8px 0' };

const VerificationRow = ({ title, status, onStatusChange = () => {} }) => {
	const [verification, setVerification] = useState(status);

	const updateStatus = (value) => {
		// setVerification(value);
		onStatusChange(value);
	};

	return (
		<Row gutter={16}>
			<Col className='gutter-row' span={6}>
				<div style={textStyle}>{title}</div>
			</Col>
			<Col className='gutter-row' span={6}>
				<div style={style}>
					<Radio
						checked={status === 'NOT_REQUIRED'}
						onChange={({ target: { value } }) => updateStatus(value)}
						value='NOT_REQUIRED'
					/>
				</div>
			</Col>
			<Col className='gutter-row' span={6}>
				<div style={style}>
					<Radio
						checked={status === 'FAILED'}
						onChange={({ target: { value } }) => updateStatus(value)}
						value='FAILED'
					/>
				</div>
			</Col>
			<Col className='gutter-row' span={6}>
				<div style={style}>
					<Radio
						checked={status === 'VALIDATED'}
						onChange={({ target: { value } }) => updateStatus(value)}
						value='VALIDATED'
					/>
				</div>
			</Col>
		</Row>
	);
};

export const KYCValidationWidget = ({ idVerification, poaVerification, financeVerification, onVerificationChange }) => {
	return (
		<>
			<Row gutter={16}>
				<Col className='gutter-row' span={6}>
					<div style={style}></div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>Not Required</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>Pending</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>Approved</div>
				</Col>
			</Row>
			<VerificationRow
				status={idVerification}
				onStatusChange={(status) => onVerificationChange('ID', status)}
				title='ID Verification'
			/>
			<VerificationRow
				status={poaVerification}
				title='POA Verification'
				onStatusChange={(status) => onVerificationChange('POA', status)}
			/>
			<VerificationRow
				status={financeVerification}
				title='Finance Verification'
				onStatusChange={(status) => onVerificationChange('SOW', status)}
			/>
		</>
	);
};
