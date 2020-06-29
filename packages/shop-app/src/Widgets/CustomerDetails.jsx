import React, { useState, useEffect } from 'react';
import { KYCVerificationWidget } from './KYCVerification';
import { API, graphqlOperation } from 'aws-amplify';
import { getCustomer } from '../graphql/queries';
import { CustomerInfoWidget } from './CustomerInfo';

export const CustomerDetailsWidget = ({ customerId }) => {
	const [customer, setCustomer] = useState({});
	// const [kyc, setKyc] = useState({});

	// const [loading, setLoading] = useState(false);

	useEffect(() => {
		// setLoading(true);
		let canceled = false;

		API.graphql(graphqlOperation(getCustomer, { id: customerId }))
			.then(({ data: { getCustomer } }) => {
				if (!canceled) {
					console.log(getCustomer);
					setCustomer(getCustomer);
				}
			})
			.catch((err) => console.error(err));
		// .finally(() => setLoading(false));
		return () => (canceled = true);
	}, [customerId]);

	return (
		<div>
			<CustomerInfoWidget name={`${customer.Firstname} ${customer.Surname}`} email={customer.Email} />
			<KYCVerificationWidget />
		</div>
	);
};
