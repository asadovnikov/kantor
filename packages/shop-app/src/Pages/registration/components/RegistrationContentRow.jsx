import React from 'react';
import { Row, Col } from 'antd';

export const RegistrationContentRow = ({ children }) => {
	return (
		<Row gutter={[16, 16]} className='registration-content_item-row'>
			<Col className='registration-content_item-column' span='24'>
				{children}
			</Col>
		</Row>
	);
};
