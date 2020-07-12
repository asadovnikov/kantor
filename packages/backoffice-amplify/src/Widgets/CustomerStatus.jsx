import React, { useState } from 'react';
import { Row, Col, Switch } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { updateCustomer } from '../backGraph/mutations';

export const CustomerStatusWidget = ({ status = 'ACTIVE', customerId }) => {
	const [customerState, setCustomerState] = useState(status === 'ACTIVE');
	const [saving, setSaving] = useState(false);

	const updateCustomerStatus = async (applyStatus) => {
		return await API.graphql(
			graphqlOperation(updateCustomer, {
				input: {
					id: customerId,
					State: applyStatus ? 'ACTIVE' : 'BLOCKED',
				},
			})
		);
	};
	const changeCustomerState = () => {
		setSaving(true);
		setCustomerState(!customerState);
		updateCustomerStatus(!customerState)
			.catch((err) => console.error(err))
			.finally(() => {
				setSaving(false);
			});
	};
	return (
		<>
			<Col key='CustomerStatus' span={24}>
				<Row gutter={[16, 16]} justify='start'>
					<Col>
						<Switch
							checked={customerState}
							loading={saving}
							onChange={changeCustomerState}
							checkedChildren='Active'
							unCheckedChildren='Blocked'
							defaultChecked
						/>
					</Col>
				</Row>
			</Col>
		</>
	);
};
