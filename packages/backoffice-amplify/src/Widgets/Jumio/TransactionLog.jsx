import React from 'react';
import { ItemDetails } from '../../Components';

export const TransactionLogWidget = ({ jumioData = {} }) => {
	const { transaction, document, verification } = jumioData;
	const { rejectReason = {} } = verification;
	const { rejectReasonDetails = [] } = rejectReason;
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
						value: document.status || 'N/A',
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
						value: rejectReason.rejectReasonDescription || 'N/A',
					},
					{
						label: 'Reason details',
						value: rejectReasonDetails.map((reason) => reason.detailsDescription).join('; '),
					},
				]}
			/>
		</>
	);
};
