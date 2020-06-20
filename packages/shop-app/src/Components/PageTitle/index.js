import React from 'react';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';

export const PageTitle = (props) => {
	const { title, description, children, icon } = props;
	return (
		<>
			<div className={'app-page-title'}>
				<div>
					<div className='app-page-title--first'>
						<div className='app-page-title--iconbox d-70'>
							<div className='d-70 d-flex align-items-center justify-content-center display-1'>
								{icon}
								{/* <HomeWorkTwoToneIcon className='text-primary' /> */}
							</div>
						</div>
						<div className='app-page-title--heading'>
							<h1>{title}</h1>
							<div className='app-page-title--description'>{description}</div>
						</div>
					</div>
				</div>
				<div className='d-flex align-items-center'>{children}</div>
			</div>
		</>
	);
};
