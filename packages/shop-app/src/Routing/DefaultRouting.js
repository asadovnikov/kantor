// import React from 'react';
import { FailedPage } from '../Pages/Static/Failed';
import { SuccessPage } from '../Pages/Static/Success';
import { KYCPage } from '../Pages/KYC';
import PrivacyPolicy from '../Pages/Static/PrivacyPolicy';
import SignInForm from '../Pages/registration/SignInForm';
import SignUpForm from '../Pages/registration/SignUpForm';
import ResetPasswordPage from '../Pages/registration/ResetPasswordPage';
import { HomePage, Transactions, MyWallets, BuyCryptoPage } from '../Pages/secured';

export const routes = [
	{
		path: '/reset-password',
		component: ResetPasswordPage,
	},
	{
		path: '/signin',
		component: SignInForm,
	},
	{
		path: '/signup',
		component: SignUpForm,
	},
	{
		path: '/home',
		component: HomePage,
	},
	{
		path: '/transaction',
		component: Transactions,
	},
	{
		path: '/mytransactions',
		component: Transactions,
	},
	{
		path: '/wallets',
		component: MyWallets,
	},
	{
		path: '/mywallets',
		component: MyWallets,
	},
	{
		path: '/walletlist',
		component: MyWallets,
	},
	{
		path: '/buy',
		component: BuyCryptoPage,
	},
	{
		path: '/payment',
		component: BuyCryptoPage,
	},
	{
		path: '/buybtc',
		component: BuyCryptoPage,
	},
	{
		path: '/paymentfailed',
		component: FailedPage,
	},
	{
		path: '/failed',
		component: FailedPage,
	},
	{
		path: '/paymentsuccessfull',
		component: SuccessPage,
	},
	{
		path: '/successful',
		component: SuccessPage,
	},
	{
		path: '/success',
		component: SuccessPage,
	},
	{
		path: '/kycverification',
		component: KYCPage,
	},
	{
		path: '/kyc',
		component: KYCPage,
	},
	{
		path: '/privacy-policy',
		component: PrivacyPolicy,
	},
];
