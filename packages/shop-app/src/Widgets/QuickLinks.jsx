import React from 'react';
import { QuickLinkBanner } from './QuickLinkBanner';
import { Grid, Container } from '@material-ui/core';
// import illustration1 from '../../../assets/images/illustrations/pack1/analysis.svg';
import illustration2 from '../assets/images/illustrations/pack1/businessman.svg';
import illustration3 from '../assets/images/illustrations/pack1/handshake.svg';
// import illustration4 from '../../../assets/images/illustrations/pack1/moving.svg';

export const QuickLinks = () => {
	return (
		<Container maxWidth='lg' style={{ paddingTop: 25 }}>
			<Grid container spacing={6}>
				<Grid item md={6} lg={12} xl={6}>
					<QuickLinkBanner
						title='Wallets'
						description='You can view, manage and customize your wallets from this wallet management area'
						illustration={illustration3}
						action={{
							name: 'Go to Wallets',
							route: '/mywallets',
						}}
					/>
				</Grid>
				<Grid item md={6} lg={12} xl={6}>
					<QuickLinkBanner
						illustration={illustration2}
						title='Account settings'
						description='Vie and edit everything related to your profile.'
						action={{
							name: 'Go to Settings',
							route: '/settings',
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};
