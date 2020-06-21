import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Container } from '@material-ui/core';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export const VerifyDocumentsBanner = () => {
	const history = useHistory();
	return (
		<Container maxWidth='md'>
			<Card className='p-5 mb-5 bg-premium-dark'>
				<div className='bg-composed-wrapper--content d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center'>
					<div className='text-white'>
						<h5 className='display-4 font-weight-bold mb-3 text-white'>Complete your profile verification.</h5>
						<p className='font-size-lg opacity-7 mb-4 text-white'>
							Each member of our platform needs to go through the identity verification process in order to prevent
							suspect activities.
						</p>
						<Button
							className='btn-success'
							onClick={() => {
								history.push('/kyc/0');
							}}>
							Upload documents
						</Button>
						{/* <Button
              className="ml-3 shadow-none btn-outline-secondary"
              variant="text">
              Do it later
            </Button> */}
					</div>
					<div className='ml-0 ml-xl-3 mt-5 mt-xl-0'>
						<div>
							<CircularProgressbarWithChildren
								circleRatio={0.75}
								styles={buildStyles({
									textColor: 'rgba(255,255,255,.95)',
									pathColor: 'rgba(255,255,255,.95)',
									trailColor: 'rgba(255,255,255,.1)',
									rotation: 1 / 2 + 1 / 8,
								})}
								value={63}
								strokeWidth={10}
								className='circular-progress-xl'></CircularProgressbarWithChildren>
						</div>
					</div>
				</div>
			</Card>
		</Container>
	);
};
