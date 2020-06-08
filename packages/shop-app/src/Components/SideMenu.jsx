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
} from '@ant-design/icons';
// const { Item } = Menu;

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
					<SettingOutlined />
					<Link to='/step9'>Documents upload</Link>
				</>
			</Menu.Item>
			<Menu.Item key='10'>
				<>
					<SettingOutlined />
					<Link to='/Payment'>Payment</Link>
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
