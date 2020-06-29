import React from 'react';
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
	return (
		<Result
			status='error'
			title='Payment Failed'
			subTitle={`Something went wrong. Please try again.`}
			extra={[
				<Button type='primary' key='console'>
					Go to payment
				</Button>,
			]}
		/>
	);
};
