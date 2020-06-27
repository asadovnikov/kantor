import React, { useEffect, useState } from 'react';
import Storage from '@aws-amplify/storage';
import styled from 'styled-components';
import { Modal, Button, Row, Col, Select } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

import { API, graphqlOperation } from 'aws-amplify';
import { updateKycDocument } from '../graphql/mutations';
// import { S3Image } from 'aws-amplify-react';

const { Option } = Select;

const StyledImageContainer = styled.div`
	width: 100px;
	height: 100px;
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

export const DocumentPreview = ({ document = {} }) => {
	const [loading, setLoading] = useState(false);
	const [imgSrc, setImgSrc] = useState();
	const [imgData, setImgData] = useState();
	const [previewVisible, setPreviewVisible] = useState(false);
	const [documentClassification, setDocumentClassification] = useState(document.documentType);
	const [saving, setSaving] = useState(false);

	const saveDocChanges = async () => {
		setSaving(true);
		try {
			await API.graphql(
				graphqlOperation(updateKycDocument, {
					input: {
						id: document.id,
						documentType: documentClassification,
					},
				})
			);
			setPreviewVisible(false);
		} catch (error) {
			console.error(error);
		} finally {
			setSaving(false);
		}
	};

	const handleCancel = () => {
		setPreviewVisible(false);
	};

	useEffect(() => {
		let isCancelled = false;
		setLoading(true);
		if (imgSrc && imgSrc.length > 0) {
			axios
				.get(imgSrc, {
					responseType: 'blob',
				})
				.then((result) => {
					if (!isCancelled) {
						console.log(result);
						const uri = URL.createObjectURL(result.data);
						setImgData(uri);
					}
				})
				.catch((err) => console.error(err))
				.finally(() => {
					setLoading(false);
				});
		}
		return () => (isCancelled = true);
	}, [imgSrc]);

	useEffect(() => {
		setLoading(true);
		let isCancelled = false;
		Storage.get(document.s3Key, { expires: 60 })
			.then((data) => {
				if (!isCancelled) {
					setImgSrc(data);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
			});
		return () => (isCancelled = true);
	}, [document.s3Key]);
	return (
		<div>
			{loading ? (
				<LoadingOutlined />
			) : (
				<DocumentImage onClick={() => setPreviewVisible(true)} src={imgData} alt={document.name} />
			)}
			<Modal
				visible={previewVisible}
				title={document.name}
				footer={
					<>
						<Row>
							<Col span={18}>
								<Select
									value={documentClassification}
									style={{ width: 120 }}
									onChange={(e) => {
										// console.log(e);
										setDocumentClassification(e);
									}}>
									<Option value='UNKNOWN'>Unknown</Option>
									<Option value='IDENTITY'>Identity</Option>
									<Option value='POA'>Proof of address</Option>
									<Option value='SOW'>Source of wealth</Option>
								</Select>
							</Col>
							<Col span={6}>
								<Button loading={saving} onClick={saveDocChanges}>
									Save
								</Button>
							</Col>
						</Row>
					</>
				}
				onCancel={handleCancel}>
				<img alt={document.name} style={{ width: '100%' }} src={imgData} />
			</Modal>
		</div>
	);
};
