import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DataTable } from '../Components';
import { Empty } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { getVerification } from '../graphql/queries';

const dataColumns = [
	{
		title: 'Status',
		dataIndex: 'idScanSource',
		key: 'idScanSource',
	},
	{
		title: 'Verification Status',
		dataIndex: 'verificationStatus',
		key: 'verificationStatus',
	},
	{
		title: 'Source',
		dataIndex: 'idScanSource',
		key: 'idScanSource',
	},
	{
		title: 'Transaction date',
		dataIndex: 'createdOn',
		key: 'CreatedOn',
	},
	{
		title: 'Type',
		dataIndex: 'idType',
		key: 'idType',
	},
	{
		title: 'Country',
		dataIndex: 'idCountry',
		key: 'idCountry',
	},
	{
		title: 'Jumio transaction id',
		dataIndex: 'jumioIdScanReference',
		key: 'jumioIdScanReference',
	},
];

export const JumioLogWidget = ({ person = {} }) => {
	const { KYCVerification = {} } = person;
	const [logs, setLogs] = useState([]);
	const history = useHistory();

	const onJumioRowClick = (record) => {
		return {
			onClick: () => {
				history.push(`/customer/${person.id}/${record.jumioIdScanReference}`);
			},
		};
	};

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
					onRowClick={onJumioRowClick}
					data={logs.map((item) => {
						return {
							...item,
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
