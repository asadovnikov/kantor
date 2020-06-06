import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import { AmplifySignOut } from "@aws-amplify/ui-react";
const { Header}  = Layout;

export const TestMenu = () => {
  return (
    <Header>
      {/* <AmplifySignOut/> */}
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="/home">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="/payment">
          <Link to='/payment'>Payment Page</Link>
        </Menu.Item>
        <Menu.Item key="/failed">
          <Link to='/failed'>Failed Page</Link>
        </Menu.Item>
        <Menu.Item key="/kyc">
          <Link to='/kyc/5757575'>KYC Page</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}