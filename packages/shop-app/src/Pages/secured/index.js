import { withKantorAuth } from '../../Components/AuthContext';
import { BuyCryptoPage } from './ByCrypto';
import { MyWallets as Wallets } from './MyWallets';
import { Transactions as Payments } from './Transactions';
import { HomePage as Home } from './HomePage';
import { ProfilePage as Profile } from './Profile';
import { SettingsPage as Settings } from './Settings';
import { ChangeCurrentPasswordPage } from './ChangeCurrentPassword';

export const BuyBTC = withKantorAuth(BuyCryptoPage);
export const MyWallets = withKantorAuth(Wallets);
export const Transactions = withKantorAuth(Payments);
export const HomePage = withKantorAuth(Home);
export const ProfilePage = withKantorAuth(Profile);
export const SettingsPage = withKantorAuth(Settings);
export const ChangePasswordPage = withKantorAuth(ChangeCurrentPasswordPage);
