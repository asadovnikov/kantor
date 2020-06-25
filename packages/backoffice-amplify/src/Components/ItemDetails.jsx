import React from 'react';
import styled from 'styled-components';
import { Row, Col, Typography } from 'antd';

const TextRow = styled.div`
	padding: 8px 16px;
`;

const DetailsItemRow = styled(Row)``;

const DetailsContainer = styled.div`
	${DetailsItemRow}:nth-child(odd) {
		background-color: #fafafa;
	}
`;

export const ItemDetails = ({ details = [] }) => {
	return (
		<DetailsContainer>
			{details.map((item) => {
				return (
					<DetailsItemRow key={item.label} className='details-item-row'>
						<Col flex='150px'>
							<TextRow>
								<Typography.Text type='secondary'>{item.label}</Typography.Text>
							</TextRow>
						</Col>
						<Col flex='auto'>
							<TextRow>
								<Typography.Text strong>
									{item.component}
									{item.value}
								</Typography.Text>
							</TextRow>
						</Col>
					</DetailsItemRow>
				);
			})}
		</DetailsContainer>
	);
};
