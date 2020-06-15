import React from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: move all to static/index.js
import { FailedPage } from '../Pages/Static/Failed';
import { SuccessPage } from '../Pages/Static/Success';
import { KYCPage } from '../Pages/KYC';
import PrivacyPolicy from '../Pages/Static/PrivacyPolicy';

export const StaticRoutes = () => {
	return (
		<Switch>
			<Route path='/paymentfailed'>
				<FailedPage />
			</Route>
			<Route path='/failed'>
				<FailedPage />
			</Route>
			<Route path='/paymentsuccessfull'>
				<SuccessPage />
			</Route>
			<Route path='/successful'>
				<SuccessPage />
			</Route>
			<Route path='/success'>
				<SuccessPage />
			</Route>
			<Route path='/kycverification'>
				<KYCPage />
			</Route>
			<Route path='/kyc'>
				<KYCPage />
			</Route>
			<Route path='/privacy-policy'>
				<PrivacyPolicy />
			</Route>
		</Switch>
	);
};
