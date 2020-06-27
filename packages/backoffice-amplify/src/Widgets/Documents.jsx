import React, { useEffect, useState } from 'react';
import { DocumentPreview, DocumentUploader } from '../Components';
import { Row, Col } from 'antd';
import { Auth } from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import { onCreateKycDocument } from '../graphql/subscriptions';
// import { Auth } from 'aws-amplify';
// import { Upload, message } from 'antd';
// import { v4 as uuid } from 'uuid';
// import { API, graphqlOperation } from 'aws-amplify';
// import { createKycDocument } from '../graphql/mutations';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export const DocumentsWidget = ({ items = [], person = {}, showUpload = true }) => {
	const [documentItems, setDocumentItems] = useState(items);

	useEffect(() => {
		let subscription;
		async function setupSubscription() {
			const user = await Auth.currentAuthenticatedUser();
			debugger;
			subscription = API.graphql(graphqlOperation(onCreateKycDocument), { owner: user.username }).subscribe({
				next: (data) => {
					debugger;
					const document = data.value.data.onCreateKycDocument;
					setDocumentItems((a) => a.concat([document]));
				},
			});
		}
		setupSubscription();

		return () => subscription.unsubscribe();
	}, []);

	return (
		<>
			<Row gutter={16}>
				{/* <DocumentsGallery s3Items={items} /> */}
				{documentItems.map((item) => {
					return (
						<Col key={item.id} span={3}>
							<DocumentPreview document={item} />
						</Col>
					);
				})}
				{showUpload !== false && (
					<Col span={3}>
						<DocumentUploader person={person} />
					</Col>
				)}
			</Row>
		</>
	);
};
