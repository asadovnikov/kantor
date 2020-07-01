import React from 'react';
import { ProcessingKYCDocumentsWidget } from '../../Widgets';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export const ProcessingKYCPage = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path}>
				<ProcessingResult />
			</Route>
			<Route path={`${path}/:id`}>
				<ProcessingResult />
			</Route>
		</Switch>
	);
};

const ProcessingResult = () => {
	return <ProcessingKYCDocumentsWidget />;
};
