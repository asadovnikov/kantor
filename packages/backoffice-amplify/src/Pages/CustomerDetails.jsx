import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Divider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {
	PersonNameWidget,
	PersonDetailsWidget,
	PersonFinanceWidget,
	PersonVerificationWidget,
	PersonTransactionsWidget,
	PersonCommentsWidget,
	DocumentsWidget,
} from '../Widgets';
import { API, graphqlOperation } from 'aws-amplify';
import { getCustomer } from '../graphql/queries';
const { Sider, Content } = Layout;
const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ContentContainer = styled.div`
	background: #fff;
	min-height: 28vh;
`;

const LeftPart = styled(Sider)`
	min-width: 25vw !important;
	padding-right: 25px;
`;

const ContentDivider = styled(Divider)`
	margin-top: 0 !important;
`;

const AntdContent = styled(Content)`
	background: #fff;
`;

export const CustomerDetailsPage = () => {
	let { customerId } = useParams();
	const [loading, setLoading] = useState(true);
	const [customer, setCustomer] = useState();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoading(true);
		let canceled = false;
		API.graphql(graphqlOperation(getCustomer, { id: customerId }))
			.then(({ data: { getCustomer } }) => {
				if (!canceled) {
					console.log(getCustomer);
					setCustomer(getCustomer);
				}
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setLoading(false);
				setLoaded(true);
			});
		return () => (canceled = true);
	}, [customerId]);
	return (
		<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
			{loaded === true && (
				<Layout>
					<LeftPart theme='light'>
						<PersonNameWidget person={customer} />
						<Divider orientation='left'>KYC</Divider>
						<PersonVerificationWidget person={customer} />
						<Divider orientation='left'>General</Divider>
						<PersonDetailsWidget person={customer} />
						{/* <VerticalSpace /> */}
						<Divider orientation='left'>Finance</Divider>
						<PersonFinanceWidget person={customer} />
					</LeftPart>
					<AntdContent>
						<ContentContainer>
							<ContentDivider orientation='left'>Transactions</ContentDivider>
							<PersonTransactionsWidget person={customer} />
						</ContentContainer>
						<ContentContainer>
							<ContentDivider orientation='left'>Pending Files</ContentDivider>
							<DocumentsWidget
								person={customer}
								items={customer.KYCVerification?.documents?.items.filter((item) => item.documentType === 'UNKNOWN')}
							/>
						</ContentContainer>
						<ContentContainer>
							<ContentDivider orientation='left'>Files</ContentDivider>
							<DocumentsWidget
								person={customer}
								showUpload={false}
								items={customer.KYCVerification?.documents?.items.filter((item) => item.documentType !== 'UNKNOWN')}
							/>
						</ContentContainer>
						<ContentContainer>
							<ContentDivider orientation='left'>Comments</ContentDivider>
							<PersonCommentsWidget person={customer} />
						</ContentContainer>
					</AntdContent>
				</Layout>
			)}
		</Spin>
	);
};
