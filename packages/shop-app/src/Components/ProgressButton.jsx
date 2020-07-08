import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
}));

export const ProgressElementButton = (props) => {
	const { loading, children, ...rest } = props;
	const classes = useStyles();
	return (
		<>
			<Button disabled={loading} {...rest}>
				{children}
			</Button>
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</>
	);
};

export const ProgressButton = (props) => {
	const { loading, children, disabled, ...rest } = props;
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Button disabled={loading || disabled} {...rest}>
				{children}
			</Button>
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</div>
	);
};
