import React, { useEffect } from 'react';
import HSHeader from './js/header/hs-header';

const AccountLogin = () => {
	return (
		<li className='list-inline-item'>
			<div className='hs-unfold'>
				<a
					className='js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-secondary'
					href='javascript:;'
					data-hs-unfold-options={`{
            "target": "#sidebarContent",
            "type": "css-animation",
            "animationIn": "fadeInRight",
            "animationOut": "fadeOutRight",
            "hasOverlay": "rgba(55, 125, 255, 0.1)",
            "smartPositionOff": true
           }`}>
					<i className='fas fa-user-circle' />
				</a>
			</div>
		</li>
	);
};

const LinksSection = () => {
	return (
		<div className='nav nav-sm nav-y-0 d-none d-sm-flex ml-sm-auto'>
			<a className='nav-link' href='#'>
				Help
			</a>
			<a className='nav-link' href='#'>
				Contacts
			</a>
		</div>
	);
};

const ShoppingCart = () => {
	return (
		<li className='list-inline-item'>
			<div className='hs-unfold'>
				<a
					className='js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary'
					href='javascript:;'
					data-hs-unfold-options='{
                  "target": "#shoppingCartDropdown",
                  "type": "css-animation",
                  "event": "hover",
                  "hideOnScroll": "true"
                 }'>
					<i className='fas fa-shopping-cart'></i>
				</a>

				<div
					id='shoppingCartDropdown'
					className='hs-unfold-content dropdown-menu dropdown-menu-right text-center p-7'
					style={{ minWidth: '250px' }}>
					<figure className='max-w-9rem mx-auto mb-3'>
						<img className='img-fluid' src='../../assets/svg/illustrations/empty-cart.svg' alt='SVG' />
					</figure>
					<span className='d-block'>Your Cart is Empty</span>
				</div>
			</div>
		</li>
	);
};

const JumpToSection = () => {
	return (
		<div className='hs-unfold d-sm-none mr-2'>
			<a
				className='js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center'
				href='javascript:;'
				data-hs-unfold-options='{
                "target": "#jumpToDropdown",
                "type": "css-animation",
                "event": "hover",
                "hideOnScroll": "true"
               }'>
				Jump to
			</a>

			<div id='jumpToDropdown' className='hs-unfold-content dropdown-menu'>
				<a className='dropdown-item' href='#'>
					Help
				</a>
				<a className='dropdown-item' href='#'>
					Contacts
				</a>
			</div>
		</div>
	);
};

const SearchControl = () => {
	return (
		<li className='list-inline-item'>
			<div className='hs-unfold'>
				<a
					className='js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary'
					href='javascript:;'
					data-hs-unfold-options='{
                  "target": "#searchPushTop",
                  "type": "jquery-slide",
                  "contentSelector": ".search-push-top"
                 }'>
					<i className='fas fa-search'></i>
				</a>
			</div>
		</li>
	);
};

const LanguageSelection = () => {
	return (
		<div className='hs-unfold'>
			<a
				className='js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center'
				href='javascript:;'
				data-hs-unfold-options='{
              "target": "#languageDropdown",
              "type": "css-animation",
              "event": "hover",
              "hideOnScroll": "true"
             }'>
				<img className='dropdown-item-icon mr-2' src='../../assets/vendor/flag-icon-css/flags/4x3/us.svg' alt='SVG' />
				<span className='d-inline-block d-sm-none'>US</span>
				<span className='d-none d-sm-inline-block'>United States</span>
			</a>

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
	);
};

export const SmallTopPanel = () => {
	useEffect(() => {
		// const tt = hcHeader;
		console.log(document.getElementById('header'));
		var header = new HSHeader(document.getElementById('header'));
		header.init();
		// debugger;
	}, []);
	return (
		<div id='header' className='header'>
			<div className='container header-hide-content pt-2'>
				<div className='d-flex align-items-center'>
					<LanguageSelection />
					<div className='ml-auto'>
						<JumpToSection />
						<LinksSection />
					</div>
					<ul className='list-inline ml-2 mb-0'>
						<SearchControl />
						<ShoppingCart />
						<AccountLogin />
					</ul>
				</div>
			</div>
		</div>
	);
};
