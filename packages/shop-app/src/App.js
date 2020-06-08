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
import SelectAccountType from './Pages/registration/AccountType';
import HolderPage from './Pages/registration/HolderPage';
import EmailSentPage from './Pages/registration/CheckInboxNotificationPage';
import PasswordPage from './Pages/registration/PasswordPage';
import GetVerifiedPage from './Pages/registration/GetVerified';
import AddressPage from './Pages/registration/AddressPage';
import VerifyPhonePage from './Pages/registration/PhoneVerificationPage';
import PhoneCodePage from './Pages/registration/PhoneCodePage';
import DocumentsForm from './Pages/registration/DocumentsForm';
import { SideMenu } from './Components/SideMenu';

const { Content, Footer, Sider } = Layout;

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

					<Layout>
						<Sider>
							<SideMenu />
						</Sider>
						<Content>
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
									<Route path='/step1'>
										<SelectAccountType />
									</Route>
									<Route path='/step2'>
										<HolderPage />
									</Route>
									<Route path='/step3'>
										<EmailSentPage />
									</Route>
									<Route path='/step4'>
										<PasswordPage />
									</Route>
									<Route path='/step5'>
										<GetVerifiedPage />
									</Route>
									<Route path='/step6'>
										<AddressPage />
									</Route>
									<Route path='/step7'>
										<VerifyPhonePage />
									</Route>
									<Route path='/step8'>
										<PhoneCodePage />
									</Route>
									<Route path='/step9'>
										<DocumentsForm />
									</Route>
									<Route path='*'>
										<NoFoundPage />
									</Route>
								</Switch>
							</div>
						</Content>
					</Layout>
				</Content>
				<Footer style={{ textAlign: 'center' }}>kosevych.info © 2020 </Footer>
			</Layout>
		</Router>
	);
}

export default App;
