import React, { useState, useEffect } from 'react';
import { EnhancedTable } from '../Components/TransactionsTable';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { Empty } from 'antd';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

import { API, graphqlOperation } from 'aws-amplify';
import { listTransactions } from '../graphql/queries';

export const TransactionsWidget = () => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let canceled = false;
		API.graphql(graphqlOperation(listTransactions))
			.then(
				({
					data: {
						listTransactions: { items },
					},
				}) => {
					if (!canceled) {
						setTransactions(items);
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
				<>{transactions.length > 0 ? <EnhancedTable transactions={transactions} showHeader={true} /> : <Empty />}</>
			)}
		</>
	);
};
