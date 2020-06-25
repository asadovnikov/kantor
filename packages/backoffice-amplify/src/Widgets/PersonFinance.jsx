import React from 'react';
import { ItemDetails } from '../Components';

export const PersonFinanceWidget = ({ person = {} }) => {
	return (
		<>
			<ItemDetails
				details={[
					{
						label: 'Occupation',
					},
					{
						label: 'Employer',
					},
					{
						label: 'Source of income',
					},
					{
						label: 'Source of funds',
					},
					{
						label: 'Annual income',
					},
				]}
			/>
		</>
	);
};
