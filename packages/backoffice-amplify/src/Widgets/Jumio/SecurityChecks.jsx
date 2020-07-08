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
							value: `N/A`,
						},
						{
							label: 'Validity',
							value: `N/A`,
						},
						{
							label: 'MRZ code',
							value: `N/A`,
						},
						{
							label: 'Data positions',
							value: `N/A`,
						},
						{
							label: 'Security features',
							value: `N/A`,
						},
						{
							label: 'ID check document validation',
							value: `N/A`,
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
							value: `N/A`,
						},
						{
							label: 'Issuing datHand written note',
							value: `N/A`,
						},
						{
							label: 'Signature',
							value: `N/A`,
						},
						{
							label: 'Microprint',
							value: `N/A`,
						},
						{
							label: 'Hologram',
							value: `N/A`,
						},
					]}
				/>
			</Col>
		</Row>
	);
};
