import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import Sticky from 'react-stickynode';
import { Row, Col, Typography } from 'antd';

const SecondNameTitle = styled(Typography.Title)`
	margin-top: 0 !important;
`;
const FirstNameTitle = styled(Typography.Title)`
	margin-bottom: 0.2em !important;
	margin-top: 0.2em !important;
`;

const PersonNameContainer = styled.div`
	background: #fff;
	margin-bottom: 15px;
`;

export const PersonNameWidget = ({ person = {} }) => {
	return (
		<PersonNameContainer>
			<Row>
				<Col span={6}>
					<Avatar name={`${person.Firstname} ${person.Surname}`} />
				</Col>
				<Col span={18}>
					<FirstNameTitle level={4}>{person.Firstname}</FirstNameTitle>
					<SecondNameTitle level={4}>{person.Surname}</SecondNameTitle>
					<Typography.Text type='secondary'>{person.Email}</Typography.Text>
				</Col>
			</Row>
		</PersonNameContainer>
	);
};
