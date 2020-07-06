import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext';
import { AppPage, WidgetContainer } from '../../Layouts';
import { BuyCryptoWidget, VerifyDocumentsBanner, PaymentProvidersWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
import { BuyBitcoinIcon } from '../../assets/Icons';

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
				actions={<PaymentProvidersWidget />}
				icon={<BuyBitcoinIcon />}>
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
