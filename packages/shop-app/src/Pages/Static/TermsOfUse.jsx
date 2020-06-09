import { Typography } from 'antd';
import React from 'react';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';

const { Paragraph } = Typography;

const TermsOfUse = () => (
	<FormLayout>
		<FormHeader Main='Privacy policy' />
		<FormContent>
			<FormContentRow></FormContentRow>
		</FormContent>
	</FormLayout>
);

export default TermsOfUse;
