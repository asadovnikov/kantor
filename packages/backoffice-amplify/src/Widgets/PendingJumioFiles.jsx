import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../Components';
import { Empty } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { listJumioVerifyMetaDatas } from '../backGraph/queries';

export const PendingJumioFilesWidget = () => {
	const dataColumns = [
		{
			title: 'Date',
			dataIndex: 'createdOn',
			key: 'createdOn',
			sorter: {
				compare: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
				multiple: 1,
			},
		},
		{
			title: 'Type',
			dataIndex: 'idType',
			key: 'idType',
			ellipsis: true,
		},
		{
			title: 'Verification Status',
			dataIndex: 'verificationStatus',
			key: 'verificationStatus',
			ellipsis: true,
		},
		{
			title: 'Country',
			dataIndex: 'idCountry',
			key: 'idCountry',
			ellipsis: true,
		},
		{
			title: 'Action',
			dataIndex: 'jumioIdScanReference',
			key: 'jumioIdScanReference',
			fixed: 'right',
			width: 100,
			render: (text, record) => {
				return <Link to={`/customer/${record.customerId}/${record.jumioLogId}`}>Review</Link>;
			},
		},
	];
	const [files, setFiles] = useState([]);
	useEffect(() => {
		let isCancelled = false;
		API.graphql(graphqlOperation(listJumioVerifyMetaDatas, { filter: { JumioVerifyStatus: { eq: 'PENDING' } } })).then(
			(result) => {
				const {
					data: {
						listJumioVerifyMetaDatas: { items = [] },
					},
				} = result;
				setFiles(
					items
						.map((logItem) => {
							return { createdOn: logItem.createdOn, jumioLogId: logItem.id, ...JSON.parse(logItem.dataInput) };
						})
						.filter((logItem) => logItem.callBackType && logItem.callBackType.length > 0)
				);
			}
		);
		return () => (isCancelled = true);
	}, []);
	return (
		<>
			{files.length > 0 ? (
				<DataTable
					pagination={{ pageSize: 5 }}
					scroll={{ y: 300 }}
					bordered={true}
					size='small'
					data={files.map((item) => {
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
