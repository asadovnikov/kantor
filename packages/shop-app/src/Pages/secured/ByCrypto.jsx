import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext';
import { AppPage, WidgetContainer } from '../../Layouts';
import { BuyCryptoWidget, VerifyDocumentsBanner } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';

export const BuyCryptoPage = () => {
	// const [showAdd, setShowAdd] = useState(false);
	const { customer = {} } = useContext(AuthContext);
	const { KYCVerification = {} } = customer;
	const goodStatus = 'VALIDATED';

	const { poaVerification = 'FAILED', idVerification = 'FAILED', financeVerification = 'FAILED' } = KYCVerification;
	return (
		<>
			<AppPage
				title={`Buy BTC`}
				description={`Change your fiat to a crypto value`}
				icon={<MonetizationOnTwoToneIcon className='text-primary' />}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						{poaVerification === goodStatus && idVerification === goodStatus && financeVerification === goodStatus ? (
							<WidgetContainer showHeader={false} size='xs' title='Enter fiat amount'>
								<BuyCryptoWidget />
							</WidgetContainer>
						) : (
							<VerifyDocumentsBanner />
						)}
					</motion.div>
				</AnimatePresence>
			</AppPage>
		</>
	);
};
