import React from 'react';
import { Row, Col, Card } from 'antd';

export const RegistrationContent = (props) => {
	const { children } = props;
	return (
		<Row justify='center' className='registration-content__row'>
			<Col className='registration-content__row'>
				<Card bordered={false} className='registration-content__card'>
					{children}
				</Card>
			</Col>
		</Row>
	);
};
