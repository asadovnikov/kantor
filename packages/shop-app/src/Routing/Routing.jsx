import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StaticRoutes } from './StaticRoutes';
import { AuthFlow } from './AuthFlow';
import NoFoundPage from '../Pages/Static/404';
import HomePage from '../Pages/secured/Home';

export const Routing = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route path='/home'>
				<HomePage />
			</Route>
			<StaticRoutes />
			<AuthFlow />
			<Route path='*'>
				<NoFoundPage />
			</Route>
		</Switch>
	);
};
