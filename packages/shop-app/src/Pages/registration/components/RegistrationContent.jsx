import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ProgressButton } from '../../../Components';
import Button from '@material-ui/core/Button';

export const RegistrationContent = (props) => {
	console.log(props);

	const { children, actionText = 'Continue', onAction, isLoading, isValid = true, showAction = true } = props;
	return (
		<>
			<Grid item xs={12}>
				{children}
			</Grid>
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
		</>
	);
};
