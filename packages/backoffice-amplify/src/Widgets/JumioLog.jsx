import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { DataTable } from '../Components';
import { Empty } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { getVerification } from '../graphql/queries';

export const JumioLogWidget = ({ person = {} }) => {
	const dataColumns = [
		{
			title: 'Date',
			dataIndex: 'createdOn',
			key: 'CreatedOn',
		},
		{
			title: 'Type',
			dataIndex: 'idType',
			key: 'idType',
		},
		{
			title: 'Verification Status',
			dataIndex: 'verificationStatus',
			key: 'verificationStatus',
		},
		{
			title: 'Country',
			dataIndex: 'idCountry',
			key: 'idCountry',
		},
		{
			title: 'Action',
			dataIndex: 'jumioIdScanReference',
			key: 'jumioIdScanReference',
			fixed: 'right',
			width: 100,
			render: (text, record) => {
				console.log(record);
				return <Link to={`/customer/${person.id}/${record.scanReference}`}>Details</Link>;
			},
		},
	];
	const { KYCVerification = {} } = person;
	const [logs, setLogs] = useState([]);
	const history = useHistory();

	// const onJumioRowClick = (record) => {
	// 	return {
	// 		onClick: () => {
	// 			history.push(`/customer/${person.id}/${record.jumioIdScanReference}`);
	// 		},
	// 	};
	// };

	const { id } = KYCVerification;

	// const items = [];

	useEffect(() => {
		let isCancelled = false;
		API.graphql(
			graphqlOperation(getVerification, {
				id: id,
			})
		).then((result) => {
			const {
				data: {
					getVerification: {
						jumioVerifications: { items = [] },
					},
				},
			} = result;
			setLogs(
				items.map((logItem) => {
					return { createdOn: logItem.createdOn, ...JSON.parse(logItem.dataInput) };
				})
			);
			console.log(result);
		});
		return () => (isCancelled = true);
	}, [id]);
	return (
		<>
			{logs.length > 0 ? (
				<DataTable
					pagination={{ pageSize: 5 }}
					scroll={{ y: 300 }}
					bordered={true}
					size='small'
					data={logs.map((item) => {
						// console.log(item);
						return {
							...item,
							key: item.scanReference || item.jumioIdScanReference,
							createdOn: new Date(item.createdOn).toLocaleString(),
						};
					})}
					columns={dataColumns}
				/>
			) : (
				<Empty />
			)}
		</>
	);
};
