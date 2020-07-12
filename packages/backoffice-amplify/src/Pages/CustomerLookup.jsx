import React from 'react';
import { useCustomers } from '../Hooks';
import { useParams } from 'react-router-dom';
import { CustomersListWidget } from '../Widgets';

export const CustomersLookupPage = () => {
	const { email } = useParams();
	const [customers, loading] = useCustomers({ email: email });
	return <CustomersListWidget data={customers} loading={loading} />;
};
