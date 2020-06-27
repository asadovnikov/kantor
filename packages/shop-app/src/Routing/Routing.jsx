import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StaticRoutes } from './StaticRoutes';
import { AuthFlow, authRoutes } from './AuthFlow';
import { SecuredRoutes } from './SecuredRoutes';
import { AdminSecuredRoutes } from './AdminRouting';
import { HomePage, Transactions, MyWallets, BuyCryptoPage, AdminHomePage } from '../Pages/secured';
import { routes } from './DefaultRouting';
import NoFoundPage from '../Pages/Static/404';

export const Routing = ({ isAdmin }) => {
	return (
		<Switch>
			{/* <Route exact path={['/', '/home']}>
				{isAdmin ? <AdminHomePage /> : <HomePage />}
			</Route>
			<Route path={['/transaction', '/mytransactions']}>
				<Transactions />
			</Route>
			<Route path={['/wallets', '/mywallets', '/walletlist']}>
				<MyWallets />
			</Route>
			<Route path={['/buy', '/payment', '/buybtc']}>
				<BuyCryptoPage />
			</Route> */}
			<Route exact path={'/'}>
				<HomePage />
			</Route>
			{routes.map((route, i) => (
				<Route key={i} path={route.path} render={(props) => <route.component {...props} />} />
			))}
			{/* <SecuredRoutes />
			<StaticRoutes />
			{authRoutes} */}
			{/* <AuthFlow /> */}

			<Route path='*'>
				<NoFoundPage />
			</Route>
		</Switch>
	);
};
