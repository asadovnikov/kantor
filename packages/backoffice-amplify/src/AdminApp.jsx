import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import {
	UserOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';

import { BaseRoutes } from './Routing';

const { Header, Content, Sider } = Layout;

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
	padding-left: ${(props) => (props.collapsed ? '80px' : '200px')};
`;

const SiteContent = styled(Content)`
	margin: 24px 16px;
	padding: 24px;
	background: #fff;
`;

export const AdminAppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	let location = useLocation();
	return (
		<Layout>
			<FixedSider trigger={null} collapsible collapsed={collapsed ? true : undefined}>
				<div className='logo' />
				<Menu theme='dark' mode='inline' selectedKeys={[location.pathname]}>
					<Menu.Item key='/' icon={<UserOutlined />}>
						Customers
						<Link to='/' />
					</Menu.Item>
					<Menu.Item key='/pending' icon={<VideoCameraOutlined />}>
						Pending KYC
						<Link to='/pending' />
					</Menu.Item>
					{/* <Menu.Item key='/overlimited' icon={<VideoCameraOutlined />}>
						Overlimited
						<Link to='/overlimited' />
					</Menu.Item> */}
					<Menu.Item key='/transactions' icon={<UploadOutlined />}>
						Transactions
						<Link to='/transactions' />
					</Menu.Item>
				</Menu>
			</FixedSider>
			<SiteLayout collapsed={collapsed ? true : undefined}>
				<FixedHeader className='site-layout-background' style={{ padding: 0 }}>
					{collapsed === true ? (
						<MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
					) : (
						<MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
					)}
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
