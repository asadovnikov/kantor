// import React from 'react';
import { FailedPage } from '../Pages/Static/Failed';
import { SuccessPage } from '../Pages/Static/Success';
import { KYCPage } from '../Pages/KYC';
import { PrivacyPolicy, CookiesPolicy, TermsPage, ProcessingKYCPage } from '../Pages/Static';
import SignInForm from '../Pages/registration/SignInForm';
import SignUpForm from '../Pages/registration/SignUpForm';
import { EmailCodePage, ResetPasswordPage } from '../Pages/registration';
import {
	HomePage,
	Transactions,
	MyWallets,
	BuyBTC,
	ProfilePage,
	SettingsPage,
	ChangePasswordPage,
} from '../Pages/secured';

export const routes = [
	{
		path: '/change-password',
		component: ChangePasswordPage,
	},
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
		path: '/profile',
		component: ProfilePage,
	},

	{
		path: '/settings',
		component: SettingsPage,
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
		component: BuyBTC,
	},
	{
		path: '/payment',
		component: BuyBTC,
	},
	{
		path: '/buybtc',
		component: BuyBTC,
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
	{
		path: '/terms-and-conditions',
		component: TermsPage,
	},
	{
		path: '/cookies-policy',
		component: CookiesPolicy,
	},
	{
		path: '/email-code',
		component: EmailCodePage,
	},

	{
		path: '/processingkyc',
		component: ProcessingKYCPage,
	},
];
