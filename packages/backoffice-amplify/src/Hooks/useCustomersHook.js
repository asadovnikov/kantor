import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listCustomers, searchCustomers, filterJumioVerifyMeta } from '../backGraph/queries';

const lookupByEmailCustomers = async (email) => {
	const {
		data: {
			searchCustomers: { items },
		},
	} = await API.graphql(
		graphqlOperation(searchCustomers, {
			filter: {
				Email: {
					match: email,
				},
			},
		})
	);
	return items;
};

const lookupByJumio = async (jumioState) => {
	const {data: {listJumioVerifyMetaDatas: { items = [] },},} = await API.graphql(graphqlOperation(filterJumioVerifyMeta, { filter: { JumioVerifyStatus: { eq: jumioState } } }));	
	const map = {};
	items.forEach(logItem => {
		map[logItem.verification.customer.id] = {...logItem.verification.customer};
	})
	return [...Object.values(map)];
}

const getAllCustomers = async () => {
	const {
		data: {
			listCustomers: { items },
		},
	} = await API.graphql(graphqlOperation(listCustomers));
	return items;
};

const hasKYCStatus = (verification, kycState) => {
	return (
		verification.financeVerification === kycState ||
		verification.poaVerification === kycState ||
		verification.idVerification === kycState
	);
};

const listRegisteredCustomers = async (kycState, email, jumioState) => {
	let customers = [];
	if (email && email.length > 0) {
		customers = await lookupByEmailCustomers(email);
	} 
	else if(jumioState && jumioState.length > 0) {
		customers = await lookupByJumio(jumioState);
		debugger
	}
	else {
		customers = await getAllCustomers();
	}

	if (kycState && kycState.length > 0) {
		return (customers || []).filter((customer) => hasKYCStatus(customer.KYCVerification, kycState));
	}
	return customers || [];
};

export const useCustomers = (filter ={}) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
	const {kycState, email, jumioState} = filter;
  useEffect(() => {
		setLoading(true);
		let canceled = false;
		listRegisteredCustomers(kycState, email, jumioState)
			.then(items => {
					if (!canceled) {
						setCustomers(
							items
								.map((user) => {
									return {
										...user,
										customerName: `${user.Firstname}, ${user.Surname}`,
										createdOn: new Date(user.createdOn).toLocaleString(),
									};
								})
						);
					}
				}
			)
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
		return () => (canceled = true);
	}, []);
  
  return [customers, loading];
}