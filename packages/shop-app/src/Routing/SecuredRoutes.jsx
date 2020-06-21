import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, Transactions, MyWallets, BuyCryptoPage } from '../Pages/secured';

export const SecuredRoutes = () => {
	return (
		<>
			<Route exact path={['/', '/home']}>
				<HomePage />
			</Route>
			<Route path={['/transaction', '/mytransactions']}>
				<Transactions />
			</Route>
			<Route path={['/wallets', '/mywallets']}>
				<MyWallets />
			</Route>
			<Route path={['/buy', '/payment', '/buybtc']}>
				<BuyCryptoPage />
			</Route>
		</>
	);
};
