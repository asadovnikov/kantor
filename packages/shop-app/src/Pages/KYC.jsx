import React from 'react';
import { Auth } from 'aws-amplify';
import { Card, Col, Row, Avatar } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { KYCStatusWidget, NotAuthorizedWidget } from '../Widgets';
import { AppPage } from '../Layouts';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import { VerificationIcon } from '../assets/Icons';
import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from './registration/components';
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';
const { Meta } = Card;

export const KYCPage = () => {
	let { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path}>
				<NotAuthorizedWidget />
			</Route>
			<Route path={`${path}/:validationId`}>
				<AppPage
					title={`Document verification`}
					description={`As a regulatory business we need to verify your documents`}
					icon={<VerificationIcon />}>
					<AnimatePresence>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
							<RegistrationForm>
								<RegistrationHeader Main={`Account Verification`} Secondary='Please upload all required documents' />
								<RegistrationContent showAction={false}>
									<RegistrationContentRow>
										<KYCStatusWidget />
									</RegistrationContentRow>
								</RegistrationContent>
							</RegistrationForm>
						</motion.div>
					</AnimatePresence>
				</AppPage>
			</Route>
		</Switch>
	);
};
