import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import { ProgressButton } from '../../../Components';

export const RegistrationContent = (props) => {
	console.log(props);

	const { children, actionText = 'Continue', onAction, isLoading, isValid = true, showAction = true } = props;
	return (
		<Container>
			<Grid container>
				<Container style={{ minHeight: '30vh' }}>
					<Grid container spacing={3}>
						{children}
					</Grid>
				</Container>
				{showAction !== false && (
					<Grid item xs={12}>
						<ProgressButton
							disabled={!isValid}
							loading={isLoading}
							className='btn-primary py-4 mt-5 px-5 font-weight-bold font-size-lg'
							fullWidth
							onClick={onAction}>
							{actionText}
						</ProgressButton>
					</Grid>
				)}
			</Grid>
		</Container>
	);
};
