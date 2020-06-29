import { withKantorAuth } from '../../Components/AuthContext';
import { BuyCryptoPage } from './ByCrypto';
import { MyWallets as Wallets } from './MyWallets';
import { Transactions as Payments } from './Transactions';
import { HomePage as Home } from './HomePage';
import { AdminHomePage as AdminPage } from './AdminHomePage';
import { CustomerDetailsPage as CustomerDetails } from './CustomerDetails';

export const BuyBTC = withKantorAuth(BuyCryptoPage);
export const MyWallets = withKantorAuth(Wallets);
export const Transactions = withKantorAuth(Payments);
export const HomePage = withKantorAuth(Home);
export const AdminHomePage = withKantorAuth(AdminPage);
export const CustomerDetailsPage = withKantorAuth(CustomerDetails);
