import React, { useState, useEffect } from 'react';

import Storage from '@aws-amplify/storage';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';

import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

const Image = styled.div`
	background: #eee;
	box-sizing: border-box;
	float: left;
	margin: 2;
	overflow: hidden;
	padding-bottom: 16%;
	position: relative;
	width: calc(25% - 4px);
	:hover: {
		opacity: 0.9;
	}
`;

const Gallery = styled.div`
	overflow: hidden;
	margin-left: -2;
`;

const ImgItem = styled.img`
	cursor: pointer;
	position: absolute;
	max-width: 100%;
`;

const processItems = async (items) => {
	const result = await Promise.all(
		items.map(async (item) => {
			try {
				const uri = await Storage.get(item.s3Key, { expired: 60 });
				const { data } = await axios.get(uri, {
					responseType: 'blob',
				});
				return { source: URL.createObjectURL(data) };
			} catch (err) {
				console.log(err);
			}
		})
	);
	return result;
};

export const DocumentsGallery = ({ s3Items }) => {
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

	useEffect(() => {
		setLoading(true);
		processItems(s3Items)
			.then((data) => {
				setImages(data);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, [s3Items]);

	const toggleLightbox = (selectedIndex) => {
		setLightboxIsOpen(!lightboxIsOpen);
		setSelectedIndex(selectedIndex);
	};

	return (
		<>
			<div>
				{loading ? (
					<LoadingOutlined />
				) : (
					<Gallery>
						{images?.map(({ source }, j) => (
							<Image onClick={() => this.toggleLightbox(j)} key={source}>
								<ImgItem alt='test' src={source} />
							</Image>
						))}
					</Gallery>
				)}
			</div>
			<ModalGateway>
				{lightboxIsOpen && !loading ? (
					<Modal onClose={toggleLightbox}>
						<Carousel currentIndex={selectedIndex} views={images} />
					</Modal>
				) : null}
			</ModalGateway>
		</>
	);
};
