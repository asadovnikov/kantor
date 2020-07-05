import React from 'react';
import { ItemDetails } from '../../Components';

export const WPJServiceWidget = ({ jumioData = {} }) => {
	const { transaction } = jumioData;
	return (
		<>
			<ItemDetails
				size='medium'
				details={[
					{
						label: 'Customer ID',
						value: transaction.customerId,
					},
					{
						label: 'Additional Information',
						value: `Find how to retrieve`,
					},
					{
						label: 'Merchant reference',
						value: transaction.merchantScanReference,
					},
					{
						label: 'Merchant reporting criteria',
						value: transaction.merchantReportingCriteria,
					},
					{
						label: 'Personal number',
						value: `Find how to retrieve`,
					},
				]}
			/>
		</>
	);
};
