import React from 'react';
import { Row, Col, Card, Button } from 'antd';

export const RegistrationContent = (props) => {
	const { children, actionText = 'Continue', onAction, isLoading, isValid = true } = props;
	return (
		<Row justify='center' className='registration-content__row'>
			<Col className='registration-content__row'>
				<Card bordered={false} className='registration-content__card' style={{ width: 500 }}>
					{children}
					<Row gutter={[24, 24]} justify='center' style={{ margin: '50px 0' }}>
						<Col span='16'>
							<Button
								disabled={!isValid}
								loading={isLoading}
								shape='round'
								size='large'
								type='primary'
								className='registration-input-action'
								block
								onClick={onAction}>
								{actionText}
							</Button>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};
