import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	HomePage,
	TransactionsPage,
	CustomersPage,
	PendingCustomersPage,
	CustomerDetailsPage,
	JumioDetailsPage,
	PendingJumioFilesPage,
	DashboardPage,
	CustomersLookupPage
} from '../Pages';

import { TestPage } from '../Pages/TestPage';

export const BaseRoutes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<DashboardPage />
			</Route>
			<Route path='/transactions'>
				<TransactionsPage />
			</Route>
			<Route exact path='/customers'>
				<CustomersPage />
			</Route>
			<Route exact path='/customers/:email'>
				<CustomersLookupPage />
			</Route>
			<Route path='/pendingfiles'>
				<PendingJumioFilesPage />
			</Route>			
			<Route exact path='/customer/:customerId'>
				<CustomerDetailsPage />
			</Route>
			<Route exact path='/customer/:customerId/:jumioLogId'>
				<JumioDetailsPage />
			</Route>
			<Route path='/pending'>
				<PendingCustomersPage />
			</Route>
			<Route path='/testing'>
				<TestPage />
			</Route>
		</Switch>
	);
};
