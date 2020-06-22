import React from 'react';
import { Route } from 'react-router-dom';
import { AdminHomePage, CustomerDetailsPage } from '../Pages/secured';

export const AdminSecuredRoutes = () => {
	return (
		<>
			<Route exact path={['/', '/home']}>
				<AdminHomePage />
			</Route>
			<Route path={['/users', '/customers']}>
				<AdminHomePage />
			</Route>
			<Route path='/user/:id'>
				<CustomerDetailsPage />
			</Route>
		</>
	);
};
