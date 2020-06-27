import React, { useState } from 'react';
import { Upload } from 'antd';
import Storage from '@aws-amplify/storage';
import { v4 as uuid } from 'uuid';
import { API, graphqlOperation } from 'aws-amplify';
import { createKycDocument } from '../graphql/mutations';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export const DocumentUploader = ({ person: { KYCVerification } }) => {
	const [loading, setLoading] = useState(false);

	const uploadImage = async (file) => {
		setLoading(true);
		try {
			// const user = await Auth.currentAuthenticatedUser();
			const key = uuid();
			const s3 = await Storage.put(`${key}_${file.name}`, file, {
				contentType: file.type,
			});
			console.log(s3);
			const result = await API.graphql(
				graphqlOperation(createKycDocument, {
					input: {
						id: key,
						name: file.name,
						state: 'NEW',
						s3Key: `${key}_${file.name}`,
						file: {
							bucket: 'shopapp469ecf38555445808617d077eb272e76145203-dev',
							region: 'us-east-1',
							key: s3,
						},
						documentType: 'UNKNOWN',
						kYCDocumentVerificationId: KYCVerification.id,
					},
				})
			);
			console.log(result);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='clearfix'>
			<Upload
				name='avatar'
				listType='picture-card'
				className='avatar-uploader'
				showUploadList={false}
				action={uploadImage}>
				<div>
					{loading ? <LoadingOutlined /> : <PlusOutlined />}
					<div className='ant-upload-text'>Upload</div>
				</div>
			</Upload>
		</div>
	);
};
