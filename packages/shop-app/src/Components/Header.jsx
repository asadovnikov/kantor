import React from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { PageHeader } from 'antd';


const routes = [
  {
    path: '/',
    breadcrumbName: 'Shop',
  },
  {
    path: '/home',
    breadcrumbName: 'Home',
  },
  {
    path: '/failed',
    breadcrumbName: 'Failed',
  },
];


export const ShopHeader = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Welcome"
      breadcrumb={{ routes }}
      subTitle="Check recent activities"
      extra={[
        <AmplifySignOut />
      ]}
    />
  );
}