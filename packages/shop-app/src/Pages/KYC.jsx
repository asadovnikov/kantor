import React from 'react';
import { Auth } from 'aws-amplify';
import { Card, Col, Row, Avatar } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { KYCStatusWidget, NotAuthorizedWidget } from '../Widgets';
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';
const { Meta } = Card;

const KYCValidationState = () => {
	// let { validationId } = useParams();
	const startJumio = async () => {
		try {
			const user = Auth.currentAuthenticatedUser();
			var form = document.createElement('form');
			document.body.appendChild(form);
			form.method = 'post';
			form.action = 'http://localhost:3015/idverification/82495a76-a487-4bab-8e13-f2774446aa26';
			form.innerHTML = `<input type='hidden' name='user' value='${user.name}' />`;
			form.submit();
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='site-card-wrapper'>
			<Row justify='center'>
				<Col span={8}>
					<Card onClick={startJumio} hoverable style={{ marginTop: 16 }}>
						<Meta
							avatar={
								<Avatar
									shape='square'
									size={84}
									src='https://cdn4.iconfinder.com/data/icons/travel-21/256/Passport-512.png'
								/>
							}
							title='ID Verification'
							description='We need photo of your id document to prove your identity'
						/>
					</Card>
				</Col>
			</Row>
			<Row justify='center'>
				<Col span={8}>
					<Card style={{ marginTop: 16 }} hoverable>
						<Meta
							avatar={
								<Avatar
									shape='square'
									size={84}
									src='https://cdn1.iconfinder.com/data/icons/e-commerce-online-shopping-3-5/64/x-12-2-512.png'
								/>
							}
							title='Address Verification'
							description='We need to prove specified address'
						/>
					</Card>
				</Col>
			</Row>
			<Row justify='center'>
				<Col span={8}>
					<Card
						style={{ marginTop: 16 }}
						hoverable
						// title={validationId}
					>
						<Meta
							avatar={
								<Avatar
									shape='square'
									size={84}
									src='https://cdn1.iconfinder.com/data/icons/business-office-41/64/x-01-512.png'
								/>
							}
							title='Financial documents'
							description='You should prove your income'
						/>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export const KYCPage = () => {
	let { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path}>
				<NotAuthorizedWidget />
			</Route>
			<Route path={`${path}/:validationId`}>
				<KYCStatusWidget />
			</Route>
		</Switch>
	);
};
