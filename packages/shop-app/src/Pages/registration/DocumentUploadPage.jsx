import React from 'react';
import { Row, Col, Typography, Space, Select, Button, Input, Card, Checkbox } from 'antd';
import { RegistrationForm } from './components';
const { Title, Text } = Typography;

const DocumentUploadPage = () => {
	return (
		<RegistrationForm>
			<Row justify='center'>
				<Col>
					<Card style={{ width: 600 }}>
						<Row justify='center'>
							<Col>
								<Title level={2}>Select ID Type</Title>
							</Col>
						</Row>
						<Row justify='center'>
							<Col>
								<Text>Select the type of document you would like to upload</Text>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</RegistrationForm>
	);
};

export default DocumentUploadPage;
