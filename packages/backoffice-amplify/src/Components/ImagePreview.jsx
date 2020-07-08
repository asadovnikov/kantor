import React, { useEffect, useState } from 'react';
import Storage from '@aws-amplify/storage';
import styled from 'styled-components';
import { Modal, Button, Row, Col, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import * as reqData from '../Utils';
import { API } from 'aws-amplify';
// import { S3Image } from 'aws-amplify-react';

const { Option } = Select;

const StyledImageContainer = styled.div`
	width: 20vw;
	background: #fafafa;
	text-align: center;
	padding: 15px;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const StyledImage = styled.img`
	max-height: 100%;
	max-width: 100%;
	:hover {
		cursor: pointer;
	}
`;

const DocumentImage = ({ src, alt, onClick }) => {
	return (
		<StyledImageContainer>
			<StyledImage onClick={onClick} src={src} alt={alt} />
		</StyledImageContainer>
	);
};

const headers = {
	'Content-Type': 'application/json',
	'User-Agent': reqData.JumioUserAgent,
	responseType: 'blob',
};
const imgUri = 'https://ngh7wgco35.execute-api.us-east-1.amazonaws.com/dev/jumio/document';
const localUri = 'http://localhost:3010/jumio/document';
export const ImagePreview = ({ document = {} }) => {
	const [loading, setLoading] = useState(false);
	const [imgData, setImgData] = useState();
	const [previewVisible, setPreviewVisible] = useState(false);

	const handleCancel = () => {
		setPreviewVisible(false);
	};

	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		axios
			.get(`${imgUri}/${encodeURIComponent(document.href)}`, { responseType: 'blob' })
			.then((result) => {
				if (!isCancelled) {
					console.log(result);
					debugger;
					const uri = URL.createObjectURL(result.data);
					setImgData(uri);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
		return () => (isCancelled = true);
	}, []);

	return (
		<div>
			{loading ? (
				<LoadingOutlined />
			) : (
				<DocumentImage onClick={() => setPreviewVisible(true)} src={imgData} alt={document.classifier} />
			)}
			<Modal visible={previewVisible} onCancel={handleCancel}>
				<img alt={document.classifier} style={{ width: '100%' }} src={imgData} />
			</Modal>
		</div>
	);
};
