import React from 'react';
import { useCustomers } from '../Hooks';
import { CustomersListWidget } from '../Widgets';

export const CustomersPage = () => {
	const [customers, loading] = useCustomers();
	return <CustomersListWidget data={customers} loading={loading} />;
};
