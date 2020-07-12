import React from 'react';
import { useCustomers } from '../Hooks';
import { CustomersListWidget } from '../Widgets';

export const PendingCustomersPage = () => {
	const [customers, loading] = useCustomers({ kycState: 'FAILED' });
	return <CustomersListWidget data={customers} loading={loading} />;
};
