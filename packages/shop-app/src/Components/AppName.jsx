import React from 'react';
import { NavLink } from 'react-router-dom';
import { appName, appNameDetail, appFullName } from '../Utils/constants';

import projectLogo from '../assets/images/react.svg';

export const AppName = () => {
	return (
		<div className='app-sidebar-logo'>
			<NavLink to='/' title={appFullName} className='app-sidebar-logo'>
				<div className='app-sidebar-logo--icon'>
					<img alt={appFullName} src={projectLogo} />
				</div>
				<div className='app-sidebar-logo--text'>
					<span>{appNameDetail}</span>

					<b style={{ textTransform: 'lowercase' }}>{appName}</b>
				</div>
			</NavLink>
		</div>
	);
};
