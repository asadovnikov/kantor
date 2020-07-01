import React from 'react';
import { PaymentFailedWidget } from '../../Widgets';
import { Result, Button } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export const FailedPage = () => {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path}>
				<FailedResult />
			</Route>
			<Route path={`${path}/:id`}>
				<FailedResult />
			</Route>
		</Switch>
	);
};

const FailedResult = () => {
	return <PaymentFailedWidget />;
};
