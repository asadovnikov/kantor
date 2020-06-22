import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DataTable } from '../Components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';
import { Empty } from 'antd';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';

import { API, graphqlOperation } from 'aws-amplify';
import { listCustomers } from '../graphql/queries';

const dataColumns = [
	{
		title: 'Name',
		dataIndex: 'Firstname',
		key: 'Firstname',
		render: (text, record) => {
			console.log(record);
			return (
				<NavLink to={`/user/${record.id}`}>
					<Typography variant='body'>
						{text} {record.Surname}
					</Typography>
					<Typography variant='body2'>{record.Email}</Typography>
				</NavLink>
			);
		},
	},
	{
		title: 'KYC',
		dataIndex: 'KYCState',
		key: 'KYCState',
	},
	{
		title: 'Tier',
		dataIndex: 'Tier',
		key: 'Tier',
	},
	{
		title: 'Country',
		dataIndex: 'Country',
		key: 'Country',
	},
	{
		title: 'City',
		dataIndex: 'City',
		key: 'City',
	},
	{
		title: 'State/Province',
		dataIndex: 'StateProvince',
		key: 'StateProvince',
	},
	{
		title: 'Postal code',
		dataIndex: 'PostalCode',
		key: 'PostalCode',
	},
	{
		title: 'Created',
		dataIndex: 'createdOn',
		key: 'CreatedOn',
	},
];

export const UserWidget = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let canceled = false;
		API.graphql(graphqlOperation(listCustomers))
			.then(
				({
					data: {
						listCustomers: { items },
					},
				}) => {
					if (!canceled) {
						console.log(items);
						setUsers(items);
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, []);

	return (
		<>
			{loading ? (
				<Fade in={loading} unmountOnExit>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Container maxWidth='lg'>
							<Box mt={6} mb={6}>
								<CircularProgress />
							</Box>
						</Container>
					</Grid>
				</Fade>
			) : (
				<>
					{users.length > 0 ? (
						<DataTable
							data={users.map((user) => {
								return {
									...user,
									createdOn: new Date(user.createdOn).toLocaleString(),
								};
							})}
							columns={dataColumns}
						/>
					) : (
						<Empty />
					)}
				</>
			)}
		</>
	);
};
