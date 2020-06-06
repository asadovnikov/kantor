import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import personal from './personal.png';
import company from './company.png';

const { Text } = Typography;

export const AccountCard = ({ cardType = 'personal' }) => {
	const imgSrc = cardType === 'personal' ? personal : company;
	const imgAlt = cardType === 'personal' ? 'For personal use.' : 'For companies and organizations.';

	const btnType = cardType === 'personal' ? 'primary' : 'default';
	const btnText = cardType === 'personal' ? 'Personal account' : 'Corporate account';
	return (
		<Card bordered={false} style={{ margin: 50 }}>
			<Row justify='center'>
				<Col>
					<img src={imgSrc} alt={imgAlt} />
				</Col>
			</Row>
			<Row justify='center' style={{ margin: '15px 0 0 0' }}>
				<Col>
					<Text type='secondary'>{imgAlt}</Text>
				</Col>
			</Row>
			<Row justify='center' style={{ margin: '50px 0 0 0' }}>
				<Col>
					<Button type={btnType} shape='round' size='large'>
						{btnText}
					</Button>
				</Col>
			</Row>
		</Card>
	);
};

// export default AccountCard;
