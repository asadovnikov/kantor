import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';

export const WithKantorAuth = ({ children }) => {
	const [hasUser, setHasUser] = useState(false);
	const [loading, setLoading] = useState(true);

	Auth.currentAuthenticatedUser()
		.then((data) => {
			console.log(data);
			setHasUser(true);
		})
		.catch((err) => console.error(err))
		.finally(() => setLoading(false));

	return (
		<>
			{loading === false && (
				<>
					{hasUser === true && <div>{children}</div>}
					{hasUser === false && <Redirect to='/signin' />}
				</>
			)}
			{loading === true && <CircularProgress />}
		</>
	);
};
