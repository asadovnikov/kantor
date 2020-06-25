import React from 'react';
import logo from './logo.svg';
import './App.less';
import { AdminAppLayout } from './AdminApp';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
	return <AdminAppLayout />;
}

export default withAuthenticator(App);
