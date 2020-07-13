import React from 'react';
import { ItemsList } from '../Components';
import { useHistory } from 'react-router-dom';
import { KycIcon, ViewDetailsIcon } from '../Utils';

export const CustomersListWidget = ({ data = [], loading, ...rest }) => {
	const history = useHistory();
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
			filters: [
				{ text: 'Not required', value: 'NOT_REQUIRED' },
				{ text: 'Pending', value: 'FAILED' },
				{ text: 'Validated', value: 'VALIDATED' },
			],
			onFilter: (value, record) => {
				return record.KYCVerification.idVerification.includes(value);
			},
			render: (text, record) => <KycIcon kycState={record.KYCVerification.idVerification} />,
		},
		{
			title: 'POA',
			align: 'center',
			width: 100,
			key: 'POAVerification',
			dataIndex: 'KYCState',
			filters: [
				{ text: 'Not required', value: 'NOT_REQUIRED' },
				{ text: 'Pending', value: 'FAILED' },
				{ text: 'Validated', value: 'VALIDATED' },
			],
			onFilter: (value, record) => {
				return record.KYCVerification.poaVerification.includes(value);
			},
			render: (text, record) => <KycIcon kycState={record.KYCVerification.poaVerification} />,
		},
		{
			title: 'Finance',
			align: 'center',
			width: 100,
			key: 'FinanceVerification',
			dataIndex: 'KYCState',
			filters: [
				{ text: 'Not required', value: 'NOT_REQUIRED' },
				{ text: 'Pending', value: 'FAILED' },
				{ text: 'Validated', value: 'VALIDATED' },
			],
			onFilter: (value, record) => {
				return record.KYCVerification.financeVerification.includes(value);
			},
			render: (text, record) => <KycIcon kycState={record.KYCVerification.financeVerification} />,
		},
		{
			title: 'Country',
			dataIndex: 'Country',
			key: 'Country',
			width: 100,
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
			width: 200,
			sorter: {
				compare: (a, b) => (a.Country > b.Country) - (a.Country < b.Country),
				multiple: 1,
			},
			ellipsis: true,
		},
		{
			title: 'Area',
			dataIndex: 'StateProvince',
			key: 'StateProvince',
			width: 100,
			sorter: {
				compare: (a, b) => (a.Country > b.Country) - (a.Country < b.Country),
				multiple: 1,
			},
			ellipsis: true,
		},
		{
			title: 'Zip',
			dataIndex: 'PostalCode',
			key: 'PostalCode',
			width: 100,
			align: 'right',
			sorter: {
				compare: (a, b) => (a.Country > b.Country) - (a.Country < b.Country),
				multiple: 1,
			},
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
			title: '',
			dataIndex: 'id',
			key: 'id',
			fixed: 'right',
			align: 'right',
			width: 40,
			noFilter: true,
			render: (text, record) => {
				return <ViewDetailsIcon onClick={() => history.push(`/customer/${record.id}`)} />;
			},
		},
	];

	return <ItemsList data={data} loading={loading} columns={dataColumns} />;
};
