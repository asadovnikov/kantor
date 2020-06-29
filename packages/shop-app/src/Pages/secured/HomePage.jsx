import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppPage } from '../../Layouts';
import { VerifyDocumentsBanner, QuickLinks } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import { Button } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import CardTravelRoundedIcon from '@material-ui/icons/CardTravelRounded';

export const HomePage = ({ isAdmin }) => {
	// const [showAdd, setShowAdd] = useState(false);
	const history = useHistory();
	return (
		<>
			<AppPage
				title={`Welcome back`}
				description={`Don't hesitate, buy some crypto.`}
				actions={
					<Button
						startIcon={<CardTravelRoundedIcon />}
						onClick={() => {
							history.push('/payment');
						}}
						variant='contained'
						className='text-uppercase font-weight-bold'
						color='primary'>
						Buy crypto
					</Button>
				}
				icon={<HomeTwoToneIcon className='text-primary' />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<VerifyDocumentsBanner />
						<QuickLinks />
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
