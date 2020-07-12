import React from 'react';
import { ItemsList } from '../Components';
import { Link } from 'react-router-dom';
import { KycIcon } from '../Utils';

export const CustomersListWidget = ({ data = [], loading, ...rest }) => {
	const dataColumns = [
		{
			title: 'Email',
			dataIndex: 'Email',
			key: 'Email',
			ellipsis: true,
			width: 250,
			sorter: {
				compare: (a, b) => (a.Email > b.Email) - (a.Email < b.Email),
				multiple: 1,
			},
		},
		{
			title: 'Name',
			dataIndex: 'customerName',
			key: 'customerName',
			width: 250,
			ellipsis: true,
			sorter: {
				compare: (a, b) => (a.customerName > b.customerName) - (a.customerName < b.customerName),
				multiple: 1,
			},
		},
		{
			title: 'ID',
			width: 100,
			align: 'center',
			key: 'IDVerification',
			dataIndex: 'KYCState',
			render: (text, record) => <KycIcon kycState={record.KYCVerification.idVerification} />,
		},
		{
			title: 'POA',
			align: 'center',
			width: 100,
			key: 'POAVerification',
			dataIndex: 'KYCState',
			render: (text, record) => <KycIcon kycState={record.KYCVerification.poaVerification} />,
		},
		{
			title: 'Finance',
			align: 'center',
			width: 100,
			key: 'FinanceVerification',
			dataIndex: 'KYCState',
			render: (text, record) => <KycIcon kycState={record.KYCVerification.financeVerification} />,
		},
		{
			title: 'Country',
			dataIndex: 'Country',
			key: 'Country',
			sorter: {
				compare: (a, b) => (a.Country > b.Country) - (a.Country < b.Country),
				multiple: 1,
			},
			ellipsis: true,
		},
		{
			title: 'City',
			dataIndex: 'City',
			key: 'City',
			ellipsis: true,
		},
		{
			title: 'Area',
			dataIndex: 'StateProvince',
			key: 'StateProvince',
			ellipsis: true,
		},
		{
			title: 'Zip',
			dataIndex: 'PostalCode',
			key: 'PostalCode',
			ellipsis: true,
		},
		{
			title: 'Created',
			dataIndex: 'createdOn',
			key: 'CreatedOn',
			width: 200,
			sorter: {
				compare: (a, b) => new Date(a.createdOn) - new Date(b.createdOn),
				multiple: 1,
			},
		},
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'id',
			fixed: 'right',
			width: 100,
			render: (text, record) => {
				return <Link to={`/customer/${record.id}`}>Details</Link>;
			},
		},
	];

	return <ItemsList data={data} loading={loading} columns={dataColumns} />;
};
