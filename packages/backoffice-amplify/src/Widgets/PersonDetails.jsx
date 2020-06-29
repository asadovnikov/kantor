import React from 'react';
import { ItemDetails } from '../Components';

export const PersonDetailsWidget = ({ person = {} }) => {
	return (
		<>
			<ItemDetails
				details={[
					{
						label: 'Date of birth',
						value: person.DateOfBirth,
					},
					{
						label: 'Phone',
						value: person.Telephone,
					},
					{
						label: 'Country',
						value: person.Country,
					},
					{
						label: 'State/Province',
						value: person.StateProvince,
					},
					{
						label: 'City',
						value: person.City,
					},
					{
						label: 'Postal Code',
						value: person.PostalCode,
					},
					{
						label: 'Street line 1',
						value: person.StreetLine1,
					},
					{
						label: 'Street line 2',
						value: person.StreetLine2,
					},
				]}
			/>
		</>
	);
};
