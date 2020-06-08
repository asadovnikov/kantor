import React from 'react';
import { Row, Col } from 'antd';

export const FormContentRow = ({ children }) => {
	return (
		<Row gutter={[16, 16]} className='kantor-form-content_item-row'>
			<Col className='kantor-form-content_item-column' span='24'>
				{children}
			</Col>
		</Row>
	);
};
