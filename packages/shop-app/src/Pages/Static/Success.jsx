import React from 'react';
import { Result, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

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
	return (
		<Result
			status='success'
			title='Payment completed'
			// subTitle={`Query: ${query}. Params: ${loc.pathname}`}
			extra={[
				<Button type='primary' key='console'>
					Show my transactions
				</Button>,
			]}
		/>
	);
};
