import React from 'react';
import { QuickLinkBanner } from './QuickLinkBanner';
import { Grid, Container } from '@material-ui/core';
// import illustration1 from '../../../assets/images/illustrations/pack1/analysis.svg';
import illustration2 from '../assets/images/illustrations/pack1/businessman.svg';
import illustration3 from '../assets/images/illustrations/pack1/handshake.svg';
import { walletsIllustration, settingsIllustration } from '../assets';
// import illustration4 from '../../../assets/images/illustrations/pack1/moving.svg';

export const QuickLinks = () => {
	return (
		<Container maxWidth='lg' style={{ paddingTop: 25 }}>
			<Grid container spacing={6}>
				<Grid xs={12} item md={6}>
					<QuickLinkBanner
						title='Wallets'
						description='You can view, manage and customize your wallets from this wallet management area'
						illustration={walletsIllustration}
						action={{
							name: 'Go to Wallets',
							route: '/mywallets',
						}}
					/>
				</Grid>
				<Grid xs={12} item md={6}>
					<QuickLinkBanner
						illustration={settingsIllustration}
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
