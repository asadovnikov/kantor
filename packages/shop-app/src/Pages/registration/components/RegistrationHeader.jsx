import React from 'react';
import { Row, Col, Space } from 'antd';
import Typography from '@material-ui/core/Typography';
// import Title from 'antd/lib/skeleton/Title';
// const { Title, Text } = Typography;

export const RegistrationHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra, Extra } = params;
	return (
		<>
			<Row justify='center' className='registration-header__main-row'>
				<Col className='registration-header__main-column'>
					<Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>
						{Main}
					</Typography>
				</Col>
			</Row>
			{Secondary.length > 0 && (
				<Row justify='center' className='registration-header__secondary-row'>
					<Col className='registration-header__secondary-column'>
						<Typography variant='h5' align='center' color='textSecondary' component='p'>
							<Space>
								{Secondary}
								{SecondaryExtra}
							</Space>
						</Typography>
					</Col>
				</Row>
			)}
			<Row justify='center' className='registration-header__main-row'>
				<Col className='registration-header__main-column'>{Extra}</Col>
			</Row>
		</>
	);
};
