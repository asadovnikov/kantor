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

export const ProgressButton = (props) => {
	const { loading, children, disabled, ...rest } = props;
	const classes = useStyles();
	// const timer = React.useRef();

	// const buttonClassName = clsx({
	//   [classes.buttonSuccess]: success,
	// });

	// const handleButtonClick = () => {
	//   if (!loading) {
	//     setSuccess(false);
	//     setLoading(true);
	//     timer.current = setTimeout(() => {
	//       setSuccess(true);
	//       setLoading(false);
	//     }, 2000);
	//   }
	// };

	return (
		<div className={classes.wrapper}>
			<Button disabled={loading || disabled} {...rest}>
				{children}
			</Button>
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</div>
	);
};
