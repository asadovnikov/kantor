import React from 'react';
import { ImagePreview } from '../../Components';
import { API } from 'aws-amplify';
import { Col } from 'antd';
import { v4 as uuid } from 'uuid';

const retriveJumioData = async (scanRef) => {
	const { data } = await API.get('api6c829185', `/jumiodata/${scanRef}`);
	return data;
};

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
