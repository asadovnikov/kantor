import React from 'react';
import { useCustomers } from '../Hooks';
import { CustomersListWidget } from '../Widgets';

export const PendingJumioFilesPage = () => {
	const [customers, loading] = useCustomers({ jumioState: 'PENDING' });
	return <CustomersListWidget data={customers} loading={loading} />;
};
