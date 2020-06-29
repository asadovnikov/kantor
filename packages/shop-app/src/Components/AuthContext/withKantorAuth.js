import React, { useState, useEffect } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

export const withKantorAuth = (WrappedComponent) => {
	return (props) => {
		const [hasUser, setHasUser] = useState(false);
		const [loaded, setLoaded] = useState(false);
		const classes = useStyles();
		useEffect(() => {
			let isCancelled = false;
			Auth.currentAuthenticatedUser()
				.then(() => {
					if (!isCancelled) {
						setHasUser(true);
					}
				})
				.finally(() => {
					setLoaded(true);
				});

			return () => (isCancelled = true);
		}, []);
		return (
			<>
				{loaded === true && <>{hasUser === true ? <WrappedComponent {...props} /> : <Redirect to='/signin' />}</>}
				<Backdrop className={classes.backdrop} open={!loaded}>
					<CircularProgress color='inherit' />
				</Backdrop>
			</>
		);
	};
};
