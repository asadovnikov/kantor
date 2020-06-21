import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StaticRoutes } from './StaticRoutes';
import { authRoutes } from './AuthFlow';
// import { SecuredRoutes } from './SecuredRoutes';
import { HomePage, Transactions, MyWallets, BuyCryptoPage } from '../Pages/secured';
import NoFoundPage from '../Pages/Static/404';

export const Routing = () => {
	return (
		<Switch>
			<Route exact path={['/', '/home']}>
				<HomePage />
			</Route>
			<Route path={['/transaction', '/mytransactions']}>
				<Transactions />
			</Route>
			<Route path={['/wallets', '/mywallets', '/walletlist']}>
				<MyWallets />
			</Route>
			<Route path={['/buy', '/payment', '/buybtc']}>
				<BuyCryptoPage />
			</Route>
			{authRoutes}
			<StaticRoutes />
			<Route path='*'>
				<NoFoundPage />
			</Route>
		</Switch>
	);
};
