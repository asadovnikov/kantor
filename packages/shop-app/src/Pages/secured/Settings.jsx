import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
// import { Row, Col } from 'antd';
// import finance from './assets/financeVerification1.png';
import { resetPassword, cancelAccount } from '../../assets';
import { FormLayout, FormContent, FormContentRow, FormHeader, ActionTile } from '../../Components';

const SettingsForm = () => {
	return (
		<FormLayout>
			<FormHeader Main={`Settings`} />
			<FormContent>
				<FormContentRow>
					<ActionTile icon={resetPassword} title='Change password' />
				</FormContentRow>
				<FormContentRow>
					<ActionTile icon={cancelAccount} title='Close account' />
				</FormContentRow>
			</FormContent>
		</FormLayout>
	);
};

export default withAuthenticator(SettingsForm);
