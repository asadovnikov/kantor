import React from 'react';

export const RatesDropDown = () => {
	return (
		<>
			<div className='hs-unfold'>
				<DropDownPart />
				<div id='languageDropdown' className='hs-unfold-content dropdown-menu'>
					<a className='dropdown-item active' href='#'>
						English
					</a>
					<a className='dropdown-item' href='#'>
						Deutsch
					</a>
					<a className='dropdown-item' href='#'>
						Español‎
					</a>
				</div>
			</div>
		</>
	);
};

const DropDownPart = () => {
	return (
		<a
			className={`js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center`}
			href='javascript:;'
			data-hs-unfold-options={`{
    "target": "#languageDropdown",
    "type": "css-animation",
    "event": "hover",
    "hideOnScroll": "true"
   }`}>
			<img className={`dropdown-item-icon mr-2`} src='../../assets/vendor/flag-icon-css/flags/4x3/us.svg' alt='SVG' />
			<span class='d-inline-block d-sm-none'>US</span>
			<span class='d-none d-sm-inline-block'>United States</span>
		</a>
	);
};
