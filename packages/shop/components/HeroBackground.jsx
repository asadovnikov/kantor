import React from 'react';

export const HeroBackground = () => {
	return (
		<>
			<div className='bg-primary position-absolute top-0 right-0 bottom-0 left-0'></div>

			<figure
				className='d-none d-md-block position-absolute'
				style={{ top: '0rem', left: '40rem', width: '62rem', height: '62rem' }}>
				<svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 260 260'>
					<circle fill='#1818EF' opacity='.1' cx='130' cy='130' r='130' />
				</svg>
			</figure>
			<figure
				className='d-none d-md-block position-absolute'
				style={{ top: '8rem', left: '40rem', width: '62rem', height: '62rem' }}>
				<svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 260 260'>
					<circle fill='#A612DD' opacity='.1' cx='130' cy='130' r='130' />
				</svg>
			</figure>
			<figure
				className='d-none d-md-block position-absolute'
				style={{ top: '5rem', left: '-10rem', width: '62rem', height: '62rem' }}>
				<svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 260 260'>
					<circle fill='#1919CC' opacity='.1' cx='130' cy='130' r='130' />
				</svg>
			</figure>
			<figure
				className='d-none d-md-block position-absolute'
				style={{ top: '-5rem', left: '-10rem', width: '75rem', height: '62rem' }}>
				<svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 260 260'>
					<circle fill='#1818EF' opacity='.1' cx='130' cy='130' r='130' />
				</svg>
			</figure>

			<figure className='position-absolute bottom-0 right-0 left-0'>
				<svg preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1921 273'>
					<polygon fill='#fff' points='0,273 1921,273 1921,0 ' />
				</svg>
			</figure>
		</>
	);
};
