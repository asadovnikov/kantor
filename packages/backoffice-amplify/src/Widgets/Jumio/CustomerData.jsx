import React from 'react';
import { ItemDetails } from '../../Components';

export const CustomerDataWidget = ({ jumioData = {} }) => {
	const { document } = jumioData;
	return (
		<>
			<ItemDetails
				size='medium'
				details={[
					{
						label: 'First name',
						value: document.firstName,
					},
					{
						label: 'Last name',
						value: document.lastName,
					},
					{
						label: 'Date of birth',
						value: document.dob,
					},
				]}
			/>
		</>
	);
};
