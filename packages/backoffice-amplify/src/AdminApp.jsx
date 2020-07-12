import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Row, Col, Typography, Input } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Icon, { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import {
	UsersIcon,
	BulkUploadIcon,
	LogoutIcon,
	KycPendingFilesIcon,
	TransactionIcon,
	KycPendingCustomersIcon,
	DashboardIcon,
} from './assets';

import { CurrentUser } from './Components';

import { BaseRoutes } from './Routing';

const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Text } = Typography;

const FixedHeader = styled(Header)`
	position: fixed;
	z-index: 1;
	width: 100%;
	background: #fff;
`;

const FixedSider = styled(Sider)`
	overflow: auto;
	height: 100vh;
	position: fixed;
`;

const HeadingOffset = styled.div`
	min-height: 64px;
`;

const SiteLayout = styled(Layout)`
	transition: all 0.2s;
	padding-left: ${(props) => (props.collapsed ? '80px' : '300px')};
`;

const SiteContent = styled(Content)`
	margin: 24px 16px;
	padding: 24px;
	background: #fff;
`;

const MenuTitle = styled.span`
	font-size: 16px;
`;

const NavItem = ({ title, icon, routePath, ...rest }) => (
	<Menu.Item {...rest} key={routePath} icon={<Icon style={{ fontSize: '18px' }} component={icon} />}>
		<MenuTitle>
			{title}
			<Link to={routePath} />
		</MenuTitle>
	</Menu.Item>
);

const MenuDivider = styled(Menu.Divider)`
	opacity: 0.2;
`;

export const AdminAppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	let location = useLocation();
	const history = useHistory();

	const handleCustomerSearch = (searchString) => {
		history.push(`/customers/${searchString}`);
	};

	return (
		<Layout>
			<FixedSider width={300} trigger={null} collapsible collapsed={collapsed ? true : undefined}>
				<div className='logo'>
					<Search placeholder='enter customer email' size='medium' onSearch={handleCustomerSearch} />
				</div>
				<Menu theme='dark' mode='inline' selectedKeys={[location.pathname]}>
					<NavItem title='Dashboard' icon={DashboardIcon} routePath='/' />
					<NavItem title='Customers' icon={UsersIcon} routePath='/customers' />
					<NavItem title='KYC Pending customers' icon={KycPendingCustomersIcon} routePath='/pending' />
					<NavItem title='KYC Pending files' icon={KycPendingFilesIcon} routePath='/pendingfiles' />
					<NavItem title='Transactions' icon={TransactionIcon} routePath='/transactions' />
					<NavItem title='Bulk KYC' icon={BulkUploadIcon} routePath='/kycbulk' />
					<MenuDivider />
					<Menu.Item
						key='logout'
						onClick={() => {
							Auth.signOut()
								.then((data) => {
									window.location.reload();
								})
								.catch((err) => console.log(err));
						}}
						icon={<Icon component={LogoutIcon} />}>
						Logout
					</Menu.Item>
				</Menu>
			</FixedSider>
			<SiteLayout collapsed={collapsed ? true : undefined}>
				<FixedHeader className='site-layout-background' style={{ padding: 0 }}>
					<Row>
						<Col flex='50px'>
							{collapsed === true ? (
								<MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
							) : (
								<MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
							)}
						</Col>
						<Col flex='auto'></Col>
						<Col>
							<CurrentUser />
						</Col>
					</Row>
				</FixedHeader>
				<HeadingOffset />
				<SiteContent>
					<AnimatePresence>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<BaseRoutes />
						</motion.div>
					</AnimatePresence>
				</SiteContent>
			</SiteLayout>
		</Layout>
	);
};
