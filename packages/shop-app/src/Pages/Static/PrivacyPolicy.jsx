import { Typography } from 'antd';
import React from 'react';
import { FormLayout, FormContent, FormContentRow, FormHeader } from '../../Components';

const { Paragraph, Title } = Typography;

const PrivacyPolicy = () => (
	<FormLayout>
		<FormHeader Main='Privacy policy' />
		<FormContent>
			<FormContentRow>
				<Title level={3}>GENERAL</Title>
				<Paragraph>
					This Privacy Policy, together with our Terms of Use, governs Kantor’s collection, processing and use of your
					Personal Data. As used in this Privacy Policy, “Kantor”, “we”, “us” or “our” refers to Kantor Europe S.A., a
					Payment Institution, registered with the Luxembourg Trade and Companies Register under the number
					%kantor-number%, with its registered address at %kantor-address%, Kantor Limited, registered within the
					England and Wales Companies Registrar under the number %kantor-number%, with its registered address at
					%kantor-address% and Kantor USA, Inc., registered with the Registrar of Companies in the state of Delaware
					with the registration number %kantor-number% and with registered office at %kantor-address%, Kantor Limited
					and Kantor USA, Inc. are data controllers under this Privacy Policy, which sets out the manner in which all
					the companies, as data controllers, may use your Personal Data.
				</Paragraph>
				<Paragraph>
					“DP Law” means data protection law as applicable to Kantor, including the EU General Data Protection
					Regulation 2016/679, its successors or implementing texts. “Personal Data” has the meaning set forth in DP
					Law. This notice covers our use of your Personal Data arising from use of the Kantor website (www.Kantor.net)
					as well as registering, subscribing, buying and using our products and Services. If you have any questions or
					need any further clarification please get in touch. Contact details are set out below in the Contact Us
					section.
				</Paragraph>
				<Paragraph>
					Capitalised items in this Privacy Policy have the meaning set out in the Definitions section below.
				</Paragraph>
				<Paragraph>
					Kantor is committed to protecting and respecting your privacy. The purpose of this Privacy Policy is to
					describe:
				</Paragraph>
				<ul>
					<li>The types of Personal Data we collect and how it may be used;</li>
					<li>Our use of cookies and similar technology;</li>
					<li>How and why we may disclose your Personal Data to third parties;</li>
					<li>The transfer of your Personal Data within and outside of the European Economic Area (“EEA”);</li>
					<li>Your statutory rights concerning your Personal Data;</li>
					<li>
						The security measures we use to protect and prevent the loss, misuse or alteration of Personal Data; and
					</li>
					<li>Kantor’s retention of your Personal Data.</li>
				</ul>
				<Title level={3}>COLLECTION AND USE OF PERSONAL INFORMATION</Title>
				<Title level={4}>A. Personal Information We Collect</Title>
				<Paragraph>
					We collect the Personal Data which you provide directly to us or which we generate when you open a Kantor
					Account, perform any transactions on the Kantor Platform, or use other Kantor Services or our website. This
					may include:
				</Paragraph>
			</FormContentRow>
		</FormContent>
	</FormLayout>
);

export default PrivacyPolicy;
