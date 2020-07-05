import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	HomePage,
	TransactionsPage,
	CustomersPage,
	PendingCustomersPage,
	CustomerDetailsPage,
	JumioDetailsPage,
} from '../Pages';

import { TestPage } from '../Pages/TestPage';

export const BaseRoutes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route path='/transactions'>
				<TransactionsPage />
			</Route>
			<Route path='/customers'>
				<CustomersPage />
			</Route>
			<Route exact path='/customer/:customerId'>
				<CustomerDetailsPage />
			</Route>
			<Route exact path='/customer/:customerId/:scanReference'>
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
