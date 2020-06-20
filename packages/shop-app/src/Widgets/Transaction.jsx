import React, { useState, useEffect } from 'react';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { EnhancedTable } from '../../Components/TransactionsTable';
import { Descriptions } from 'antd';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { API, graphqlOperation } from 'aws-amplify';
import { listTransactions } from '../../graphql/queries';

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
};
