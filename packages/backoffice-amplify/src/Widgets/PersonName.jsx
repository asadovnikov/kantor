import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import { Row, Col, Typography } from 'antd';

const PersonEmail = styled(Typography.Text)`
	margin-left: 15px;
`;
const FirstNameTitle = styled(Typography.Title)`
	margin-bottom: 0.2em !important;
	margin-top: 0.2em !important;
	margin-left: 15px;
`;

const PersonNameContainer = styled.div`
	background: #fff;
	margin-bottom: 15px;
`;

export const PersonNameWidget = ({ person = {} }) => {
	return (
		<PersonNameContainer>
			<Row>
				<Col>
					<Avatar size='64' name={`${person.Firstname} ${person.Surname}`} />
				</Col>
				<Col>
					<FirstNameTitle level={4}>
						{person.Firstname} {person.Surname}
					</FirstNameTitle>
					<PersonEmail type='secondary'>{person.Email}</PersonEmail>
				</Col>
			</Row>
		</PersonNameContainer>
	);
};
