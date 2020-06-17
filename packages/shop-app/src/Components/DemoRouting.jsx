import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoFoundPage from '../Pages/Static/404';
import { FailedPage } from '../Pages/Static/Failed';
import { SuccessPage } from '../Pages/Static/Success';
import PrivacyPolicy from '../Pages/Static/PrivacyPolicy';
import SignIn from '../Pages/RegistrationFlow/Landing';
import { KYCPage } from '../Pages/KYC';
import HomePage from '../Pages/secured/Home';
import PaymentPage from '../Pages/secured/Payment';
import { TestMenu } from '../Components/TestMenu';
import HolderPage from '../Pages/registration/HolderPage';
import EmailSentPage from '../Pages/registration/CheckInboxNotificationPage';
// import PasswordPage from '../Pages/registration/PasswordPage';
import GetVerifiedPage from '../Pages/registration/GetVerified';
import AddressPage from '../Pages/registration/AddressPage';
import VerifyPhonePage from '../Pages/registration/PhoneVerificationPage';
import PhoneCodePage from '../Pages/registration/PhoneCodePage';
import ResetPasswordPage from '../Pages/registration/ResetPasswordPage';
import EmailCodePage from '../Pages/registration/EmailCodePage';
import DocumentsForm from '../Pages/registration/DocumentsForm';
import Waiting from '../Pages/registration/Waiting';
import SignInForm from '../Pages/registration/SignInForm';
import SignUpForm from '../Pages/registration/SignUpForm';
import LandingForm from '../Pages/registration/LandingForm';
import AccountDetails from '../Pages/secured/AccountDetails';
import MyTransactions from '../Pages/secured/MyTransactions';
import SettingsForm from '../Pages/secured/Settings';
import { WalletForm } from '../Pages/secured/Wallets';
import { WalletListForm } from '../Pages/secured/WalletList';
import { SideMenu } from '../Components/SideMenu';
// import { SignUpForm } from '../Pages/MaterialSign/SignUpForm';

export const DemoRouting = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<HomePage />
			</Route>
			<Route path='/home'>
				<HomePage />
			</Route>
			<Route path='/wallets'>
				<WalletForm />
			</Route>
			<Route path='/walletlist'>
				<WalletListForm />
			</Route>
			<Route path='/land'>
				<SignIn />
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
			<Route path='/privacy-policy'>
				<PrivacyPolicy />
			</Route>
			<Route path='/step2'>
				<HolderPage />
			</Route>
			<Route path='/step3'>
				<EmailSentPage />
			</Route>
			<Route path='/step4'>
				<ResetPasswordPage />
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
				<EmailCodePage />
			</Route>
			<Route path='/verify-email/:validationId'>
				<EmailCodePage />
			</Route>
			<Route path='/step9'>
				<DocumentsForm />
			</Route>
			<Route path='/step10'>
				<LandingForm />
			</Route>
			<Route path='/waiting'>
				<Waiting />
			</Route>
			<Route path='/signin'>
				<SignInForm />
			</Route>
			<Route path='/signup'>
				<SignUpForm />
			</Route>
			<Route path='/account'>
				<AccountDetails />
			</Route>
			<Route path='/mytransactions'>
				<MyTransactions />
			</Route>
			<Route path='/settings'>
				<SettingsForm />
			</Route>
			<Route path='/reset-password'>
				<ResetPasswordPage />
			</Route>
			<Route path='*'>
				<NoFoundPage />
			</Route>
		</Switch>
	);
};
