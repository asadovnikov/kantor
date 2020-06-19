import React from 'react';
import { Row, Col } from 'antd';
// import Title from 'antd/lib/skeleton/Title';
import Typography from '@material-ui/core/Typography';

export const FormHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra } = params;
	return (
		<>
			<Row justify='center' className='kantor-form-header__main-row'>
				<Col className='kantor-form-header__main-column'>
					<Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>
						{Main}
					</Typography>
				</Col>
			</Row>
			{Secondary.length > 0 && (
				<Row justify='center' className='kantor-form-header__secondary-row'>
					<Col className='kantor-form-header__secondary-column'>
						<Typography variant='h5' align='center' color='textSecondary' component='p'>
							{Secondary}
							{SecondaryExtra}
						</Typography>
					</Col>
				</Row>
			)}
		</>
	);
};
