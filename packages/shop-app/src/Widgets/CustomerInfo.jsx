import React from 'react';
import Avatar from 'react-avatar';
// import { KYCVerificationWidget } from './KYCVerification';
// import { API, graphqlOperation } from 'aws-amplify';
// import { getCustomer } from '../graphql/queries';
import { Grid, Typography, Paper, Container } from '@material-ui/core';

export const CustomerInfoWidget = ({ name, email }) => {
	return (
		<Container maxWidth='sm'>
			<Paper elevation={2}>
				<Grid container>
					<Grid item xs={3}>
						<Avatar name={name} />
					</Grid>
					<Grid item xs={9}>
						<Typography variant='h6'>{name}</Typography>
						<Typography variant='body2'>{email}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};
