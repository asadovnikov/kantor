import React from 'react';
import { Row, Col, Typography } from 'antd';
// import Title from 'antd/lib/skeleton/Title';
const { Title, Text } = Typography;

export const FormHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra } = params;
	return (
		<>
			<Row justify='center' className='kantor-form-header__main-row'>
				<Col className='kantor-form-header__main-column'>
					<Title level={2} className='kantor-form-header__main-text'>
						{Main}
					</Title>
				</Col>
			</Row>
			{Secondary.length > 0 && (
				<Row justify='center' className='kantor-form-header__secondary-row'>
					<Col className='kantor-form-header__secondary-column'>
						<Text type='secondary' level={2} className='kantor-form-header__secondary-text'>
							{Secondary}
							{SecondaryExtra}
						</Text>
					</Col>
				</Row>
			)}
		</>
	);
};
