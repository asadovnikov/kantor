import React from 'react';
import { ImagePreview } from '../../Components';
import { Col } from 'antd';
import { v4 as uuid } from 'uuid';

export const ProvidedDocumentsWidget = ({ documents = [] }) => {
	const documentImages = Array.isArray(documents) ? documents : [documents];
	return (
		<>
			{documentImages.map((item) => {
				return (
					<Col key={uuid()} span={24}>
						<ImagePreview document={item} />
					</Col>
				);
			})}
		</>
	);
};
