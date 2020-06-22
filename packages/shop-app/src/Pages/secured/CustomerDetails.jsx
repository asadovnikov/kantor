import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AdminAppPage, WidgetContainer } from '../../Layouts';
import { CustomerDetailsWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import { Button } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import CardTravelRoundedIcon from '@material-ui/icons/CardTravelRounded';

export const CustomerDetailsPage = ({ customerId }) => {
	// const [showAdd, setShowAdd] = useState(false);
	// const history = useHistory();
	const { id } = useParams();
	return (
		<>
			<AdminAppPage
				title={`Welcome back`}
				description={`Don't hesitate, buy some crypto.`}
				icon={<HomeTwoToneIcon className='text-primary' />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<CustomerDetailsWidget customerId={id} />
					</motion.div>
				</AnimatePresence>
			</AdminAppPage>
		</>
	);
};
