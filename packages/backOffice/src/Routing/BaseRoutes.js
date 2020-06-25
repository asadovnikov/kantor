import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../Pages';

export const BaseRoutes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route path='/home'>
				<HomePage />
			</Route>
		</Switch>
	);
};
