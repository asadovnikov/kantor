import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Dropdown, Typography, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import Avatar from 'react-avatar';
import { Auth } from 'aws-amplify';
import { LoadingOutlined } from '@ant-design/icons';

const UserContainer = styled.div`
	padding-right: 200px;
	margin: 0 25px;
`;
const UserAvatar = styled.div`
	display: inline-block;
	margin-right: 15px;
`;
const UserDetails = styled.div`
	display: inline-block;
	vertical-align: middle;
`;
const UserName = styled.div`
	line-height: 20px;
`;
const UserEmail = styled.div`
	line-height: 20px;
`;

const VerticalOutline = styled.div`
	min-height: 15px;
`;

export const CurrentUser = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState();

	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		if (!isCancelled) {
			Auth.currentAuthenticatedUser()
				.then((user) => setUser(user))
				.catch((err) => console.error(err))
				.finally(() => setLoading(false));
		}
		return () => (isCancelled = true);
	}, []);
	return <>{loading ? <LoadingOutlined /> : <UserView user={user} />}</>;
};

const UserView = ({ user }) => {
	const history = useHistory();
	const doLogout = () => {
		Auth.signOut({ global: true }).then(() => {
			history.push('/');
			window.location = window.location;
		});
	};
	console.log(user);
	const menu = (
		<Menu mode='inline'>
			<VerticalOutline />
			<UserContainer>
				<UserAvatar>
					<Avatar size={40} round={true} name='Manually Created' />
				</UserAvatar>
				<UserDetails>
					<UserName>
						<Typography.Text strong>Manually created</Typography.Text>
					</UserName>
					<UserEmail>
						<Typography.Text type='secondary'>{user?.attributes.email}</Typography.Text>
					</UserEmail>
				</UserDetails>
			</UserContainer>
			<Divider />
			<Menu.Item onClick={doLogout} icon={<LogoutOutlined />}>
				Logout
			</Menu.Item>
			<VerticalOutline />
		</Menu>
	);
	return (
		<Dropdown overlay={menu}>
			<UserContainer>
				<UserAvatar>
					<Avatar size={40} round={true} name='Manually Created' />
				</UserAvatar>
				<UserDetails>
					<UserName>
						<Typography.Text strong>Manually created</Typography.Text>
					</UserName>
					<UserEmail>
						<Typography.Text type='secondary'>{user?.attributes.email}</Typography.Text>
					</UserEmail>
				</UserDetails>
			</UserContainer>
		</Dropdown>
	);
};
