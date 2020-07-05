import React from 'react';
import { ItemDetails } from '../../Components';
import { Row, Col } from 'antd';

export const DocumentDataWidget = ({ jumioData = {} }) => {
	const { document } = jumioData;
	return (
		<Row gutter={[16, 16]}>
			<Col span={12}>
				<ItemDetails
					size='medium'
					details={[
						{
							label: 'Document type',
							value: document.type,
						},
						{
							label: 'Document subtype',
							value: document.idSubtype,
						},
						{
							label: 'Number',
							value: document.number,
						},
						{
							label: 'Optional data 1',
							value: document.optionalData1,
						},
						{
							label: 'Optional data 2',
							value: document.optionalData2,
						},
					]}
				/>
			</Col>
			<Col span={12}>
				<ItemDetails
					size='medium'
					details={[
						{
							label: 'Expiry',
							value: document.expiry,
						},
						{
							label: 'Issuing date',
							value: document.issuingDate,
						},
						{
							label: 'State',
							value: document.usState,
						},
						{
							label: 'Issuing country',
							value: document.issuingCountry,
						},
						{
							label: 'Issuing authority',
							value: document.issuingAuthority,
						},
						{
							label: 'Issuing place',
							value: document.issuingPlace,
						},
					]}
				/>
			</Col>
		</Row>
	);
};
