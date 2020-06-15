import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Layout, PageHeader, Row, Col, Button } from 'antd';
import { AmplifySignOut } from '@aws-amplify/ui-react';
const { Header } = Layout;

export const TestMenu = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoggedOut, setLoggedOut] = useState(false);
	Auth.currentAuthenticatedUser()
		.then((user) => {
			console.log(user);
			setIsAuth(true);
		})
		.catch((err) => {
			console.log(err);
			setIsAuth(false);
		});
	return (
		<Header>
			<Row justify='end'>
				<Col>
					{isAuth === false && <Link to='/signin'>Sign in </Link>}
					{isAuth === true && (
						<Button
							type='primary'
							onClick={async () => {
								try {
									await Auth.signOut({ global: true });
									setLoggedOut(true);
								} catch (error) {
									console.log('error signing out: ', error);
								}
							}}>
							Log out
						</Button>
					)}
					{isLoggedOut === true && <Redirect to='/signin' />}
				</Col>
			</Row>
		</Header>
	);
};
