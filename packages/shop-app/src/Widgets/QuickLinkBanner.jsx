import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

export const QuickLinkBanner = ({ title, description, illustration, action = {} }) => {
	return (
		<Card>
			<div className='p-4'>
				<Grid container spacing={0}>
					<Grid item md={3}>
						<img
							alt='...'
							className='img-fluid'
							style={{ minHeight: '100px', maxHeight: '150px' }}
							src={illustration}
						/>
					</Grid>
					<Grid item md={9} className='d-flex align-items-center'>
						<div>
							<div className='font-size-lg font-weight-bold mb-1'>{title}</div>
							<p className='opacity-7 font-size-md mb-0'>{description}</p>
						</div>
					</Grid>
				</Grid>
			</div>
			<div className='divider' />
			<NavLink
				to={action.route}
				className='px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center'>
				<div>{action.name}</div>
				<FontAwesomeIcon icon={['fas', 'chevron-right']} />
			</NavLink>
		</Card>
	);
};
