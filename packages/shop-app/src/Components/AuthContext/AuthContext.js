import React, { useEffect, useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Auth, Hub } from 'aws-amplify';

export const AuthContext = createContext();

export default ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [authChange, setAuthChanged] = useState();
	useEffect(() => {
		let isCancelled = false;
		Auth.currentAuthenticatedUser()
			.then((user) => {
				console.log(user);
				if (!isCancelled) {
					setEmail(user.attributes.email);
					setFirstName(user.attributes['custom:firstName'] || 'Manually');
					setLastName(user.attributes['custom:lastName'] || 'Created');
					setIsAuthenticated(true);
				}
			})
			.catch((err) => {
				console.log(err);
				setIsAuthenticated(false);
			});
		return () => (isCancelled = true);
	}, [authChange]);

	Hub.listen('auth', (data) => {
		const { payload } = data;
		if (payload.event === 'signIn') {
			console.log(data);
			setAuthChanged(uuid());
		} else if (payload.event === 'signOut') {
			setAuthChanged(uuid());
		}
	});

	const defaultContext = {
		isAuthenticated,
		firstName,
		lastName,
		email,
	};
	return <AuthContext.Provider value={defaultContext}>{children}</AuthContext.Provider>;
};
