import React from 'react';
import Button from '@material-ui/core/Button';

export const LinkButton = (props) => {
	const { children, ...rest } = props;
	return (
		<Button {...rest} color='primary'>
			{children}
		</Button>
	);
};
