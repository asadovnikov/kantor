import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
// import { UserWidget } from '../Widgets';

const currentRate = 0.0001213;
const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const TestPage = () => {
	const [message, setMessage] = useState();

	const userId = '82495a76-a487-4bab-8e13-f2774446aa26';

	return (
		<>
			<Space direction='vertical'>
				<Button >Create customer</Button>
				<Button >Create transaction</Button>
				<Button>Create Comment</Button>
				<Button>Create KYC document</Button>
				<Button>Create Verification</Button>
			</Space>
			<div>{message}</div>
		</>
	);
};
