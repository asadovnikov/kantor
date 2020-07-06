import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppPage } from '../../Layouts';
import { VerifyDocumentsBanner, QuickLinks } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import { Button } from '@material-ui/core';
import { HomeIcon, BuyBitcoinIcon } from '../../assets/Icons';

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
						startIcon={<BuyBitcoinIcon />}
						onClick={() => {
							history.push('/payment');
						}}
						variant='contained'
						className='text-uppercase font-weight-bold'
						color='primary'>
						Buy crypto
					</Button>
				}
				icon={<HomeIcon />}>
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
