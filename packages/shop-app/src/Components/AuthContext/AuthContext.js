import React, { useEffect, useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Auth, Hub } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { getCustomer } from '../../graphql/queries';

export const AuthContext = createContext();

export default ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [authChange, setAuthChanged] = useState();
	const [customer, setCustomer] = useState();
	useEffect(() => {
		let isCancelled = false;
		Auth.currentAuthenticatedUser()
			.then((user) => {
				setEmail(user.attributes.email);
				setFirstName(user.attributes['custom:firstName'] || 'Manually');
				setLastName(user.attributes['custom:lastName'] || 'Created');
				setIsAuthenticated(true);
				API.graphql(
					graphqlOperation(getCustomer, {
						id: user.username,
					})
				)
					.then(({ data: { getCustomer: customerObj } }) => {
						console.log(customerObj);
						setCustomer(customerObj);
					})
					.catch((err) => console.error(err));
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
		customer,
	};
	return <AuthContext.Provider value={defaultContext}>{children}</AuthContext.Provider>;
};
