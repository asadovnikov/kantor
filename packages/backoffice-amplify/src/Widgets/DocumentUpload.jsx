import React, { useState } from 'react';
import Storage from '@aws-amplify/storage';
// import { Auth } from 'aws-amplify';
import { Upload, message } from 'antd';
import { v4 as uuid } from 'uuid';
import { API, graphqlOperation } from 'aws-amplify';
import { createKycDocument } from '../graphql/mutations';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export const DocumentUploadWidget = ({ person }) => {
	const [loading, setLoading] = useState(false);
	const [imgUrl, setImgUrl] = useState();

	const getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};

	const beforeUpload = (file) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 5;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	};

	const handleChange = async (info) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			debugger;
			try {
				// const user = await Auth.currentAuthenticatedUser();
				const s3 = await Storage.put(`${uuid()}_${info.file.name}`, info.file, {
					contentType: 'image/png',
				});
				console.log(s3);
				const result = await API.graphql(
					graphqlOperation(createKycDocument, {
						input: {
							id: uuid(),
							name: info.file.name,
							state: 'NEW',
							file: {
								bucket: 'shopapp469ecf38555445808617d077eb272e76145203-dev',
								region: 'us-east-1',
								key: s3,
							},
							documentType: 'UNKNOWN',
							kYCDocumentVerificationId: person.KYCVerification.id,
						},
					})
				);
				console.log(result);
			} catch (err) {
				console.error(err);
			}
			// Get this url from response in real world.
			getBase64(info.file.originFileObj, async (imageUrl) => {
				setLoading(false);
				setImgUrl(imageUrl);
			});
		}
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div className='ant-upload-text'>Upload</div>
		</div>
	);

	return (
		<Upload
			name='avatar'
			listType='picture-card'
			className='avatar-uploader'
			showUploadList={false}
			action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
			beforeUpload={beforeUpload}
			onChange={handleChange}>
			{imgUrl ? <img src={imgUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
		</Upload>
	);
};
