import React from 'react';
import { AppPage } from '../../Layouts';
import { SettingsWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import { SettingsIcon } from '../../assets/Icons';
import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from '../registration/components';

export const SettingsPage = () => {
	return (
		<>
			<AppPage title={`Settings`} description={`Available list of application settings`} icon={<SettingsIcon />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<RegistrationForm>
							<RegistrationContent showAction={false}>
								<RegistrationContentRow>
									<SettingsWidget />
								</RegistrationContentRow>
							</RegistrationContent>
						</RegistrationForm>
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
