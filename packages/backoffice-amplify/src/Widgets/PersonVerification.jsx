import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ItemDetails } from '../Components';
import { Row, Col, Descriptions, Space, Typography, Button, Modal } from 'antd';
import { KYCValidationWidget } from './KYCValidation';
import { UserSwitchOutlined, MinusSquareOutlined, CheckOutlined } from '@ant-design/icons';

import { API, graphqlOperation } from 'aws-amplify';
import { updateVerification } from '../graphql/mutations';

const SetManualBtn = styled(Button)``;
const ActionContainer = styled.div`
	padding: 25px 0;
`;

const VerificationState = ({ state }) => {
	return (
		<>
			{state === 'NOT_REQUIRED' && (
				<Space direction='horizontal'>
					<MinusSquareOutlined />
					<Typography.Text strong> Not Required</Typography.Text>
				</Space>
			)}
			{state === 'FAILED' && (
				<Space direction='horizontal'>
					<UserSwitchOutlined />
					<Typography.Text strong>Pending</Typography.Text>
				</Space>
			)}
			{state === 'VALIDATED' && (
				<Space direction='horizontal'>
					<CheckOutlined />
					<Typography.Text strong>Verified</Typography.Text>
				</Space>
			)}
		</>
	);
};

export const PersonVerificationWidget = ({ person = {} }) => {
	// debugger;

	const [idVerification, setIdVerification] = useState();
	const [poaVerification, setPoaVerification] = useState();
	const [financeVerification, setFinanceVerification] = useState();
	const [changeVerification, setChangeVerification] = useState(false);
	useEffect(() => {
		const { KYCVerification = {} } = person;
		setIdVerification(KYCVerification?.idVerification || 'NOT_REQUIRED');
		setPoaVerification(KYCVerification?.poaVerification || 'NOT_REQUIRED');
		setFinanceVerification(KYCVerification?.financeVerification || 'NOT_REQUIRED');
	}, [person]);
	return (
		<>
			<ItemDetails
				details={[
					{
						label: 'Identity',
						component: <VerificationState state={idVerification} />,
					},
					{
						label: 'Address',
						component: <VerificationState state={poaVerification} />,
					},
					{
						label: 'Source of wealth',
						component: <VerificationState state={financeVerification} />,
					},
				]}
			/>
			<Row>
				<Col span={12} offset={6}>
					<ActionContainer>
						<SetManualBtn onClick={() => setChangeVerification(true)} block type='primary' size='large'>
							Update KYC
						</SetManualBtn>
					</ActionContainer>
				</Col>
			</Row>
			<Modal
				title='Set Verification status'
				width={900}
				visible={changeVerification}
				onOk={async () => {
					const result = await API.graphql(
						graphqlOperation(updateVerification, {
							input: {
								id: person.KYCVerification.id,
								idVerification: idVerification,
								poaVerification: poaVerification,
								financeVerification: financeVerification,
							},
						})
					);
					console.log(result);
					setChangeVerification(false);
				}}
				onCancel={() => setChangeVerification(false)}>
				<KYCValidationWidget
					idVerification={idVerification}
					poaVerification={poaVerification}
					financeVerification={financeVerification}
					onVerificationChange={(type, status) => {
						if (type === 'ID') {
							setIdVerification(status);
						} else if (type === 'POA') {
							setPoaVerification(status);
						} else {
							setFinanceVerification(status);
						}
					}}
					person={person}
				/>
			</Modal>
		</>
	);
};
