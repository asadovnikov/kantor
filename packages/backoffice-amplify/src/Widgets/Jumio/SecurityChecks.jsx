import React from 'react';
import { ItemDetails } from '../../Components';
import { Row, Col } from 'antd';

export const SecurityChecksWidget = ({ jumioData = {} }) => {
	const { document } = jumioData;
	return (
		<Row gutter={[16, 16]}>
			<Col span={12}>
				<ItemDetails
					size='medium'
					details={[
						{
							label: 'Similarity',
							value: `Find how to retrieve`,
						},
						{
							label: 'Validity',
							value: `Find how to retrieve`,
						},
						{
							label: 'MRZ code',
							value: `Find how to retrieve`,
						},
						{
							label: 'Data positions',
							value: `Find how to retrieve`,
						},
						{
							label: 'Security features',
							value: `Find how to retrieve`,
						},
						{
							label: 'ID check document validation',
							value: `Find how to retrieve`,
						},
					]}
				/>
			</Col>
			<Col span={12}>
				<ItemDetails
					size='medium'
					details={[
						{
							label: 'Reason',
							value: `Find how to retrieve`,
						},
						{
							label: 'Issuing datHand written note',
							value: `Find how to retrieve`,
						},
						{
							label: 'Signature',
							value: `Find how to retrieve`,
						},
						{
							label: 'Microprint',
							value: `Find how to retrieve`,
						},
						{
							label: 'Hologram',
							value: `Find how to retrieve`,
						},
					]}
				/>
			</Col>
		</Row>
	);
};
