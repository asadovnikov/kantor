import React from 'react';
import { PageTitle } from '../Components/PageTitle';

export const AppPage = ({ children, title, description, icon, actions }) => {
	return (
		<div className='app-content'>
			<PageTitle title={title} description={description} icon={icon}>
				{actions}
			</PageTitle>
			<div className='app-content--inner'>
				<div className='app-content--inner__wrapper'>{children}</div>
			</div>
		</div>
	);
};
