import React from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { PageHeader, Breadcrumb, Menu } from 'antd';

// const routes = [
//   {
//     path: '/',
//     breadcrumbName: 'Shop',
//   },
//   {
//     path: '/home',
//     breadcrumbName: 'Home',
//   },
//   {
//     path: '/failed',
//     breadcrumbName: 'Failed',
//   },
// ];

export const ShopHeader = withRouter(({ availableRoutes, location }) => {
	const pathSnippets = location.pathname.split('/').filter((i) => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return {
			path: url,
			breadcrumbName: availableRoutes[url],
		};
	});
	const routes = [
		{
			path: '/',
			breadcrumbName: 'Home',
		},
	].concat(extraBreadcrumbItems);
	const itemRender = (route) => <Link to={route.path}>{route.breadcrumbName}</Link>;

	return (
		<PageHeader
			className='site-page-header'
			title='Welcome'
			breadcrumb={{ routes, itemRender }}
			subTitle='Check recent activities'
		/>
	);
});
