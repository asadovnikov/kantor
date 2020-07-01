import React from 'react';
import { PaymentSuccessWidget } from '../../Widgets';
import { Result, Button } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export const SuccessPage = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path}>
				<SuccessResult />
			</Route>
			<Route path={`${path}/:id`}>
				<SuccessResult />
			</Route>
		</Switch>
	);
};

const SuccessResult = () => {
	return <PaymentSuccessWidget />;
};
