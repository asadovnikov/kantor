import React from 'react';
import { AppPage } from '../../Layouts';
import { UserProfileWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import { ProfileIcon } from '../../assets/Icons';
import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from '../registration/components';

export const ProfilePage = () => {
	return (
		<>
			<AppPage
				title={`Profile`}
				description={`Review data you have provided during registration`}
				icon={<ProfileIcon />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<RegistrationForm>
							<RegistrationContent showAction={false}>
								<RegistrationContentRow>
									<UserProfileWidget />
								</RegistrationContentRow>
							</RegistrationContent>
						</RegistrationForm>
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
