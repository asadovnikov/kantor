import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Divider, Spin } from 'antd';
import { StylePageHeader } from '../Components/StyledControls';
import { LoadingOutlined } from '@ant-design/icons';
import { API, graphqlOperation } from 'aws-amplify';
import { getJumioVerifyMetaData } from '../backGraph/queries';

import {
	CustomerDataWidget,
	DocumentDataWidget,
	ProvidedDocumentsWidget,
	SecurityChecksWidget,
	TransactionLogWidget,
	WPJServiceWidget,
	ReviewDocumentWidget,
} from '../Widgets/Jumio';

const { Sider, Content } = Layout;
const loadingIndicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ContentContainer = styled.div`
	background: #fff;
	min-height: 10vh;
	margin-bottom: 15px;
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
const retriveJumioData = async (scanRef) => {
	const { data } = await API.get('backOfficeCorsApi', `/jumio/${scanRef}`);
	return data;
};

export const JumioDetailsPage = () => {
	let { jumioLogId } = useParams();
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [jumoioData, setJumioData] = useState();
	const [loaded, setLoaded] = useState(false);
	const [scanReference, setScanReference] = useState();
	const [jumioLogItem, setJumioLogItem] = useState();

	useEffect(() => {
		let isCancelled = false;
		if (jumioLogId) {
			setLoading(true);
			API.graphql(graphqlOperation(getJumioVerifyMetaData, { id: jumioLogId }))
				.then(({ data: { getJumioVerifyMetaData } }) => {
					setJumioLogItem(getJumioVerifyMetaData);
					const { jumioIdScanReference } = JSON.parse(getJumioVerifyMetaData.dataInput);
					setScanReference(jumioIdScanReference);
				})
				.catch((err) => console.error(err))
				.finally(() => setLoading(false));
		}
		return () => (isCancelled = true);
	}, [jumioLogId]);

	useEffect(() => {
		let canceled = false;
		if (scanReference) {
			setLoading(true);
			retriveJumioData(scanReference)
				.then((data) => {
					if (!canceled) {
						if (!canceled) {
							setJumioData(data);
						}
					}
				})
				.catch((err) => console.error(err))
				.finally(() => {
					setLoading(false);
					setLoaded(true);
				});
		}
		return () => (canceled = true);
	}, [scanReference]);
	return (
		<>
			<Spin indicator={loadingIndicator} spinning={loading} tip='Loading...'>
				{loaded === true && (
					<Layout>
						<LeftPart theme='light'>
							<StylePageHeader title='Customer details' onBack={() => history.goBack()} />
							<ProvidedDocumentsWidget documents={jumoioData.providedDocumentsData.images} />
							<ReviewDocumentWidget jumioDocId={jumioLogItem.id} status={jumioLogItem.JumioVerifyStatus} />
						</LeftPart>
						<AntdContent>
							<ContentContainer>
								<ContentDivider orientation='left'>Document Data</ContentDivider>
								<DocumentDataWidget jumioData={jumoioData.scanData} />
							</ContentContainer>
							<ContentContainer>
								<ContentDivider orientation='left'>Person Data</ContentDivider>
								<CustomerDataWidget jumioData={jumoioData.scanData} />
							</ContentContainer>
							<ContentContainer>
								<ContentDivider orientation='left'>Security checks</ContentDivider>
								<SecurityChecksWidget jumioData={jumoioData.scanData} />
							</ContentContainer>
							<ContentContainer>
								<ContentDivider orientation='left'>Transaction log</ContentDivider>
								<TransactionLogWidget jumioData={jumoioData.scanData} />
							</ContentContainer>
							<ContentContainer>
								<ContentDivider orientation='left'>WPJ Services Aps</ContentDivider>
								<WPJServiceWidget jumioData={jumoioData.scanData} />
							</ContentContainer>
						</AntdContent>
					</Layout>
				)}
			</Spin>
		</>
	);
};
