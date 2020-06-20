import React from 'react';
import { Space } from 'antd';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Title from 'antd/lib/skeleton/Title';
// const { Title, Text } = Typography;

export const RegistrationHeader = (params) => {
	const { Main, Secondary = '', SecondaryExtra, Extra } = params;
	return (
		<>
			<Grid item xs={12}>
				<Typography component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>
					{Main}
				</Typography>
			</Grid>
			{Secondary.length > 0 && (
				<Grid item xs={12}>
					<Typography variant='h5' align='center' color='textSecondary' component='p'>
						<Space>
							{Secondary}
							{SecondaryExtra}
						</Space>
					</Typography>
				</Grid>
			)}
			<Grid item xs={12}>
				{Extra}
			</Grid>
		</>
	);
};
