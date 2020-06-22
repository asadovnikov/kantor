import React from 'react';
// import { PageTitle } from '../Components/PageTitle';

export const AdminAppPage = ({ children, title, description, icon, actions }) => {
	return (
		<div className='app-content'>
			<div className='app-content--inner'>
				<div className='app-content--inner__wrapper'>{children}</div>
			</div>
		</div>
	);
};
