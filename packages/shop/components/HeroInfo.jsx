import React from 'react';

export const HeroInfo = () => {
	return (
		<>
			<div className='mb-6'>
				<h1 className='text-white mb-3'>Your next crypto exchange.</h1>
				<p className='text-white-70'>
					With a proven track record and a mature approach to the industry, we provide reliable trading of
					cryptocurrencies.
				</p>
			</div>

			<a
				className='btn btn-light btn-wide btn-pill shadow-soft transition-3d-hover mb-2 mb-sm-0 mr-4'
				href='account/register'>
				Get Started
			</a>
		</>
	);
};
