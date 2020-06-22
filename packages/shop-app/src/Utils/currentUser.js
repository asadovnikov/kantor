import { Auth, Hub } from 'aws-amplify';

const userEqual = (user1, user2) => {
	return (
		user1.Firstname === user2.Firstname &&
		user1.Surname === user2.Surname &&
		user1.City === user2.City &&
		user1.Email === user2.Email
	);
};

const convertToAccount = (cognitoUser) => {
	const userGoups = cognitoUser.signInUserSession.accessToken.payload['cognito:groups'];
	return {
		Firstname: cognitoUser.attributes['custom:firstName'] || 'Jerome',
		Surname: cognitoUser.attributes['custom:lastName'] || 'K. Jerome',
		Email: cognitoUser.attributes.email,
		Telephone: cognitoUser.attributes.phone_number,
		DateOfBirth: cognitoUser.attributes['custom:dateOfBirth'] || '1982-08-29',
		Country: cognitoUser.attributes['custom:country'] || 'US',
		StateProvince: cognitoUser.attributes['custom:region'] || 'NY',
		City: cognitoUser.attributes['custom:city'] || 'New York',
		PostalCode: cognitoUser.attributes['custom:postalCode'] || 10007,
		StreetLine1: cognitoUser.attributes['custom:homeAddress'] || '92 West Broadway',
		isAdmin: userGoups.includes('Admins'),
	};
};

export const currentUser = (onUserChange = () => {}) => {
	const fireUserChange = (newUser) => {
		if (newUser === undefined) {
			if (window.account !== undefined) {
				window.account = undefined;
				onUserChange({});
			}
		} else {
			if (window.account === undefined) {
				window.account = newUser;
				onUserChange(newUser);
			} else {
				if (!userEqual(window.account, newUser)) {
					window.account = newUser;
					onUserChange(newUser);
				}
			}
		}
	};
	Hub.listen('auth', (data) => {
		const { payload } = data;
		if (payload.event === 'signIn') {
			fireUserChange(convertToAccount(payload.data));
		} else if (payload.event === 'signOut') {
			fireUserChange();
		}
		// onUserChange(account);
	});

	Auth.currentAuthenticatedUser()
		.then((data) => {
			fireUserChange(convertToAccount(data));
		})
		.catch((err) => {
			console.log(err);
			fireUserChange();
		});
};
