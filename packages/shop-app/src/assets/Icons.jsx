import React from 'react';
import { SvgIcon } from '@material-ui/core';

import { ReactComponent as WalletIconSvg } from './images/kantor/icons/wallet.svg';
import { ReactComponent as TransactionIconSvg } from './images/kantor/icons/transaction.svg';
import { ReactComponent as LogoutIconSvg } from './images/kantor/icons/logout.svg';
import { ReactComponent as VerificationIconSvg } from './images/kantor/icons/verification.svg';
import { ReactComponent as BuyBitcoinIconSvg } from './images/kantor/icons/buybitcoin.svg';
import { ReactComponent as HomeIconSvg } from './images/kantor/icons/home.svg';
import { ReactComponent as ProfileIconSvg } from './images/kantor/icons/profile.svg';
import { ReactComponent as SettingsIconSvg } from './images/kantor/icons/settings.svg';

import { ReactComponent as AddressVerificationIconSvg } from './images/kantor/icons/addressVerification.svg';
import { ReactComponent as FinanceVerificationIconSvg } from './images/kantor/icons/financeVerification.svg';
import { ReactComponent as IdentityIconSvg } from './images/kantor/icons/identityVerification.svg';

const viewBox = '0 0 64 64';
const viewBoxBig = '0 0 128 128';

const Icon = ({ size, component }) => (
	<SvgIcon
		style={{ width: size === 'medium' ? 24 : 15, height: size === 'medium' ? 24 : 16 }}
		component={component}
		viewBox={viewBox}
		className='text-primary'
	/>
);

const Illustration = ({ component }) => (
	<SvgIcon style={{ width: 128, height: 128 }} component={component} viewBox={viewBoxBig} />
);

export const IdentityVerificationIcon = () => <Illustration component={IdentityIconSvg} />;
export const AddressVerificationIcon = () => <Illustration component={AddressVerificationIconSvg} />;
export const FinanceVerificationIcon = () => <Illustration component={FinanceVerificationIconSvg} />;

export const ProfileIcon = ({ size = 'medium' }) => <Icon component={ProfileIconSvg} size={size} />;
export const SettingsIcon = ({ size = 'medium' }) => <Icon component={SettingsIconSvg} size={size} />;
export const HomeIcon = ({ size = 'medium' }) => <Icon component={HomeIconSvg} size={size} />;
export const BuyBitcoinIcon = ({ size = 'medium' }) => <Icon component={BuyBitcoinIconSvg} size={size} />;
export const WalletIcon = ({ size = 'medium' }) => <Icon component={WalletIconSvg} size={size} />;
export const LogoutIcon = ({ size = 'medium' }) => <Icon component={LogoutIconSvg} size={size} />;
export const VerificationIcon = ({ size = 'medium' }) => <Icon component={VerificationIconSvg} size={size} />;
export const TransactionIcon = ({ size = 'medium' }) => <Icon component={TransactionIconSvg} size={size} />;
