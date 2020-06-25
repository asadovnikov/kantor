import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
	UserOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';

import { BaseRoutes } from './Routing';

const { Header, Content, Sider } = Layout;

export const AdminAppLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='logo' />
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
					<Menu.Item key='1' icon={<UserOutlined />}>
						nav 1
					</Menu.Item>
					<Menu.Item key='2' icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key='3' icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className='site-layout'>
				<Header className='site-layout-background' style={{ padding: 0 }}>
					{collapsed ? (
						<MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
					) : (
						<MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
					)}
				</Header>
				<Content
					className='site-layout-background'
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}>
					<AnimatePresence>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<BaseRoutes />
						</motion.div>
					</AnimatePresence>
				</Content>
			</Layout>
		</Layout>
	);
};
