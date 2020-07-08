import React from 'react';
import { v4 as uuid } from 'uuid';
import { Snackbar } from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

export const ErrorMessage = ({ open, onClose, message }) => {
	return (
		<Snackbar
			key={uuid()}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={open}
			autoHideDuration={3000}
			onClose={onClose}>
			<Alert onClose={onClose} severity='error'>
				{message}
			</Alert>
		</Snackbar>
	);
};
