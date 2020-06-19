import React from 'react';
import { Row, Col, Card, Button } from 'antd';

export const FormContent = (props) => {
	const { children, actionText = 'Continue', showAction = true } = props;
	return (
		<Row justify='center' className='kantor-form-content__row'>
			<Col className='kantor-form-content__column'>
				<Card bordered={false} className='kantor-form-content__card' style={{ width: 500 }}>
					{children}
					<Row gutter={[24, 24]} justify='center' style={{ margin: '50px 0' }}>
						<Col span='16'>
							<Button shape='round' size='large' className='kantor-form-content_action-button' type='primary' block>
								{actionText}
							</Button>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};
