import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Button, List, ListItem } from '@material-ui/core';

// import CountUp from 'react-countup';

import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import Avatar from 'react-avatar';

export const HeaderUserbox = ({ firstName, lastName, email }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const history = useHistory();

	const handleClick = (event) => {
		debugger;
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				variant='text'
				onClick={handleClick}
				className='btn-transition-none text-left ml-2 p-0 bg-transparent d-flex align-items-center'
				disableRipple>
				<div className='d-block p-0 avatar-icon-wrapper'>
					<Avatar size={40} name={`${firstName} ${lastName}`} />
				</div>
				<div className='d-none d-xl-block pl-2'>
					<span className='text-danger'>
						<small>Account not verified</small>
					</span>
					<div className='font-weight-bold'>
						{firstName} {lastName}
					</div>
				</div>
				<span className='pl-1 pl-xl-3'>
					<FontAwesomeIcon icon={['fas', 'angle-down']} className='opacity-5' />
				</span>
			</Button>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				classes={{ list: 'p-0' }}
				onClose={handleClose}>
				<div className='dropdown-menu-xl overflow-hidden p-0'>
					<div className='d-flex p-4'>
						<div className='mr-3'>
							<Avatar size={41} name={`${firstName} ${lastName}`} />
						</div>
						<div>
							<h6 className='font-weight-bold mb-1 text-black'>
								{firstName} {lastName}
							</h6>
							<p className='text-black-50 mb-0'>{email}</p>
						</div>
					</div>
					<div className='divider' />
					<List component='div' className='nav-neutral-first nav-pills-rounded flex-column p-3'>
						<ListItem
							component='a'
							button
							href='#/'
							onClick={(e) => {
								e.preventDefault();
								setAnchorEl(null);
								history.push('/settings');
							}}>
							<div className='mr-2'>
								<SettingsTwoToneIcon />
							</div>
							<span className='font-size-md'>Settings</span>
						</ListItem>
						<ListItem
							component='a'
							button
							href='#/'
							onClick={(e) => {
								e.preventDefault();
								setAnchorEl(null);
								history.push('/profile');
							}}>
							<div className='mr-2'>
								<VerifiedUserTwoToneIcon />
							</div>
							<span className='font-size-md'>Profile</span>
						</ListItem>
						<ListItem
							component='a'
							button
							href='#/'
							onClick={(e) => {
								e.preventDefault();
								setAnchorEl(null);
								history.push('/walletlist');
							}}>
							<div className='mr-2'>
								<BusinessCenterTwoToneIcon />
							</div>
							<span className='font-size-md'>Wallets</span>
						</ListItem>
					</List>
					<div className='divider' />
					<List component='div' className='nav-neutral-danger nav-pills-rounded flex-column p-3'>
						<ListItem
							component='a'
							button
							href='#/'
							onClick={async (e) => {
								e.preventDefault();
								await Auth.signOut({ global: true });
							}}>
							<div className='mr-2'>
								<ExitToAppTwoToneIcon />
							</div>
							<span>Log out</span>
						</ListItem>
					</List>
				</div>
			</Menu>
		</>
	);
};

// export default HeaderUserbox;
