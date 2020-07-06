import React from 'react';
import { AppPage } from '../../Layouts';
import { TransactionsWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
// import Grow from '@material-ui/core/Grow';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';
import { TransactionIcon } from '../../assets/Icons';

export const Transactions = () => {
	// const [showAdd, setShowAdd] = useState(false);
	return (
		<>
			<AppPage title={`Transactions`} description={`Review your transaction history`} icon={<TransactionIcon />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<TransactionsWidget />
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
