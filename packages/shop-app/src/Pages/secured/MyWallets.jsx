import React, { useState } from 'react';
import { AppPage, WidgetContainer } from '../../Layouts';
import { WalletListWidget, AddWalletWidget } from '../../Widgets';
import { motion, AnimatePresence } from 'framer-motion';
import Grow from '@material-ui/core/Grow';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';

export const MyWallets = () => {
	const [showAdd, setShowAdd] = useState(false);
	return (
		<>
			<AppPage
				title={`Wallets`}
				description={`This is you registered wallets`}
				icon={<BusinessCenterTwoToneIcon className='text-primary' />}>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{showAdd === true ? (
						<Grow in={showAdd === true}>
							<WidgetContainer
								show={showAdd}
								size='xs'
								title={`Add new wallet`}
								actions={[
									{
										text: 'Back',
										// primary: true,
										onAction: () => {
											setShowAdd(false);
										},
									},
								]}>
								<AddWalletWidget
									onWalletAdded={() => {
										setShowAdd(false);
									}}
								/>
							</WidgetContainer>
						</Grow>
					) : (
						<Grow in={showAdd === false}>
							<WidgetContainer
								show={!showAdd}
								title={`Available wallet list`}
								actions={[
									{
										text: 'Add wallet',
										primary: true,
										onAction: () => {
											setShowAdd(true);
										},
									},
								]}>
								<WalletListWidget />
							</WidgetContainer>
						</Grow>
					)}
				</motion.div>
			</AppPage>
		</>
	);
};
