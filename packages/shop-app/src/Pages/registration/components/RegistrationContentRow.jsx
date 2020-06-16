import React from 'react';
import { Row, Col } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	spacer: {
		margin: theme.spacing(0.5, 0),
		// padding: theme.spacing(12, 4),
		// width: '550px',
	},
}));

export const RegistrationContentRow = ({ children }) => {
	const classes = useStyles();
	return (
		<Row gutter={[16, 16]} className='registration-content_item-row'>
			<Col className='registration-content_item-column' span='24'>
				<div className={classes.spacer}>{children}</div>
			</Col>
		</Row>
	);
};
