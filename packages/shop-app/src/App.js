import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import { ShopHeader } from './Components/Header';
import NoFoundPage from './Pages/404';
import { FailedPage } from './Pages/Failed';
import { SuccessPage } from './Pages/Success';
import { KYCPage } from './Pages/KYC';
import HomePage from './Pages/secured/Home';
import PaymentPage from './Pages/secured/Payment';
import { TestMenu } from './Components/TestMenu';

const { Content, Footer } = Layout;

const breadcrumbNameMap = {
	'/': 'Home',
	'/home': 'Home',
	'/payment': 'Payment',
	'/paymentfailed': 'Payment Failed',
	'/failed': 'Payment Failed',
	'/paymentsuccessfull': 'Payment successful',
	'/successful': 'Payment successful',
	'/success': 'Payment successful',
	'/kycverification': 'Verify KYC',
	'/kyc': 'Verify KYC',
};

function App() {
	return (
		<Router>
			<Layout>
				<TestMenu />
				<Content className='site-layout' style={{ padding: '0 50px' }}>
					<ShopHeader availableRoutes={{ ...breadcrumbNameMap }} />
					<div className='site-layout-background' style={{ background: '#fff', padding: 24, minHeight: 380 }}>
						<Switch>
							<Route exact path='/'>
								<HomePage />
							</Route>
							<Route path='/home'>
								<HomePage />
							</Route>
							<Route path='/payment'>
								<PaymentPage />
							</Route>
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
							<Route path='*'>
								<NoFoundPage />
							</Route>
						</Switch>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>kosevych.info © 2020 </Footer>
			</Layout>
		</Router>
	);
}

export default App;
