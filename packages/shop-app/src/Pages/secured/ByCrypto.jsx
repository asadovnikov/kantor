import React from 'react';
import { AppPage, WidgetContainer } from '../../Layouts';
import { BuyCryptoWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';

export const BuyCryptoPage = () => {
	// const [showAdd, setShowAdd] = useState(false);
	return (
		<>
			<AppPage
				title={`Buy BTC`}
				description={`Change your fiat to a crypto value`}
				icon={<MonetizationOnTwoToneIcon className='text-primary' />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<WidgetContainer showHeader={false} size='xs' title='Enter fiat amount'>
							<BuyCryptoWidget />
						</WidgetContainer>
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
