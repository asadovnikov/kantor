import React from 'react';
import { ItemDetails } from '../../Components';

export const TransactionLogWidget = ({ jumioData = {} }) => {
	const { transaction } = jumioData;
	return (
		<>
			<ItemDetails
				size='medium'
				details={[
					{
						label: 'Status',
						value: transaction.status,
					},
					{
						label: 'Verification status',
						value: transaction.status,
					},

					{
						label: 'Scan reference',
						value: transaction.customerId,
					},
					{
						label: 'Source',
						value: transaction.source,
					},
					{
						label: 'Transaction date',
						value: transaction.date,
					},
					{
						label: 'Client IP',
						value: transaction.clientIp,
					},
					{
						label: 'Reject reason',
						value: transaction.status,
					},
					{
						label: 'Reason details',
						value: transaction.status,
					},
				]}
			/>
		</>
	);
};
