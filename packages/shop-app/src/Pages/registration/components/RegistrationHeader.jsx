import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
// import Title from 'antd/lib/skeleton/Title';
const { Title, Text } = Typography;

export const RegistrationHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra } = params;
	return (
		<>
			<Row justify='center' className='registration-header__main-row'>
				<Col className='registration-header__main-column'>
					<Title level={2} className='registration-header__main-text'>
						{Main}
					</Title>
				</Col>
			</Row>
			{Secondary.length > 0 && (
				<Row justify='center' className='registration-header__secondary-row'>
					<Col className='registration-header__secondary-column'>
						<Text type='secondary' level={2} className='registration-header__secondary-text'>
							<Space>
								{Secondary}
								{SecondaryExtra}
							</Space>
						</Text>
					</Col>
				</Row>
			)}
		</>
	);
};
