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
						value: `N/A`,
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
						value: `N/A`,
					},
				]}
			/>
		</>
	);
};
