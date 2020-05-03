import React from 'react';
import { HeroInfo } from './HeroInfo';
import { DeviceMockup } from './DeviceMockup';
import { HeroBackground } from './HeroBackground';

export const Hero = () => {
	return (
		<div className='position-relative bg-white overflow-hidden'>
			<div className='container position-relative z-index-2 space-top-3 space-top-lg-4 space-bottom-2 space-bottom-md-3'>
				<div className='row align-items-lg-center'>
					<div className='col-lg-5 mb-5 mb-lg-0'>
						<HeroInfo />
					</div>

					<div className='col-lg-7'>
						<div className='position-relative'>
							<DeviceMockup />
						</div>
					</div>
				</div>
			</div>
			<HeroBackground />
		</div>
	);
};
