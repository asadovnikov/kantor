import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
	BulbOutlined,
	CoffeeOutlined,
	DeploymentUnitOutlined,
	UserSwitchOutlined,
	EuroOutlined,
	DislikeOutlined,
} from '@ant-design/icons';

export const SideMenu = () => {
	return (
		<Menu theme='dark' mode='inline' style={{ height: '100%', borderRight: 0 }}>
			<Menu.Item key='1'>
				<>
					<DesktopOutlined />
					<Link to='/step1'>Select Account</Link>
				</>
			</Menu.Item>
			<Menu.Item key='2'>
				<>
					<PieChartOutlined />
					<Link to='/step2'>Name, Email</Link>
				</>
			</Menu.Item>
			<Menu.Item key='3'>
				<>
					<FileOutlined />
					<Link to='/step3'>Email sent</Link>
				</>
			</Menu.Item>
			<Menu.Item key='4'>
				<>
					<TeamOutlined />
					<Link to='/step4'>Password</Link>
				</>
			</Menu.Item>
			<Menu.Item key='5'>
				<>
					<UserOutlined />
					<Link to='/step5'>Get verified</Link>
				</>
			</Menu.Item>
			<Menu.Item key='6'>
				<>
					<AppstoreOutlined />
					<Link to='/step6'>Address</Link>
				</>
			</Menu.Item>
			<Menu.Item key='7'>
				<>
					<MailOutlined />
					<Link to='/step7'>Verify phone</Link>
				</>
			</Menu.Item>
			<Menu.Item key='8'>
				<>
					<SettingOutlined />
					<Link to='/step8'>Phone code</Link>
				</>
			</Menu.Item>
			<Menu.Item key='9'>
				<>
					<DeploymentUnitOutlined />
					<Link to='/step9'>Documents upload</Link>
				</>
			</Menu.Item>
			<Menu.Item key='10'>
				<>
					<BulbOutlined />
					<Link to='/Payment'>Payment</Link>
				</>
			</Menu.Item>
			<Menu.Item key='11'>
				<>
					<CoffeeOutlined />
					<Link to='/waiting'>Waiting</Link>
				</>
			</Menu.Item>
			<Menu.Item key='12'>
				<>
					<UserSwitchOutlined />
					<Link to='/account'>Account details</Link>
				</>
			</Menu.Item>
			<Menu.Item key='13'>
				<>
					<EuroOutlined />
					<Link to='/mytransactions'>My transactions</Link>
				</>
			</Menu.Item>
			<Menu.Item key='14'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Settings</Link>
				</>
			</Menu.Item>
			<Menu.Item key='15'>
				<>
					<DislikeOutlined />
					<Link to='/failed'>Failed page</Link>
				</>
			</Menu.Item>
			<Menu.Item key='16'>
				<>
					<DislikeOutlined />
					<Link to='/success'>Success page</Link>
				</>
			</Menu.Item>

			<Menu.Item key='17'>
				<>
					<DislikeOutlined />
					<Link to='/privacy-policy'>Privacy policy</Link>
				</>
			</Menu.Item>
			<Menu.Item key='18'>
				<>
					<DislikeOutlined />
					<Link to='/terms-and-conditions'>Terms and conditions</Link>
				</>
			</Menu.Item>
			<Menu.Item key='20'>
				<>
					<DislikeOutlined />
					<Link to='/step10'>Landing</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Login</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Logout</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Reset password</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>FX Rates</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Home Page</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>BTC wallet (add and list)</Link>
				</>
			</Menu.Item>
			<Menu.Item key='19'>
				<>
					<DislikeOutlined />
					<Link to='/settings'>Financial documents input</Link>
				</>
			</Menu.Item>
		</Menu>
	);
};

// <Switch>
// 							<Route exact path='/'>
// 								<HomePage />
// 							</Route>
// 							<Route path='/home'>
// 								<HomePage />
// 							</Route>
// 							<Route path='/payment'>
// 								<PaymentPage />
// 							</Route>
// 							<Route path='/paymentfailed'>
// 								<FailedPage />
// 							</Route>
// 							<Route path='/failed'>
// 								<FailedPage />
// 							</Route>
// 							<Route path='/paymentsuccessfull'>
// 								<SuccessPage />
// 							</Route>
// 							<Route path='/successful'>
// 								<SuccessPage />
// 							</Route>
// 							<Route path='/success'>
// 								<SuccessPage />
// 							</Route>
// 							<Route path='/kycverification'>
// 								<KYCPage />
// 							</Route>
// 							<Route path='/kyc'>
// 								<KYCPage />
// 							</Route>
// 							<Route path='/step1'>
// 								<SelectAccountType />
// 							</Route>
// 							<Route path='/step2'>
// 								<HolderPage />
// 							</Route>
// 							<Route path='/step3'>
// 								<EmailSentPage />
// 							</Route>
// 							<Route path='/step4'>
// 								<PasswordPage />
// 							</Route>
// 							<Route path='/step5'>
// 								<GetVerifiedPage />
// 							</Route>
// 							<Route path='/step6'>
// 								<AddressPage />
// 							</Route>
// 							<Route path='/step7'>
// 								<VerifyPhonePage />
// 							</Route>
// 							<Route path='/step8'>
// 								<PhoneCodePage />
// 							</Route>
// 							<Route path='*'>
// 								<NoFoundPage />
// 							</Route>
// 						</Switch>
