import React, { useState } from 'react';
import { message } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserMeata, createUserWallets } from '../../graphql/mutations';
import { v4 as uuid } from 'uuid';
import { MaterialTxt } from '../registration/components/LabeledInput';

import {
	RegistrationHeader,
	RegistrationForm,
	RegistrationContent,
	RegistrationContentRow,
} from '../registration/components';

export const WalletForm = ({ onWalletAdded }) => {
	const [walletName, setWalletName] = useState('');
	const [walletAddress, setWalletAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const addWallet = async () => {
		setLoading(true);
		try {
			const wallet = await API.graphql(
				graphqlOperation(createUserWallets, {
					input: {
						id: uuid(),
						name: walletName,
						Address: walletAddress,
						State: 'ACTIVE',
					},
				})
			);
			if (onWalletAdded) {
				onWalletAdded(wallet);
			}
			// message.info(JSON.stringify(wallet));
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main={`My Wallets`} />
			<RegistrationContent isLoading={loading} actionText={`Add wallet`} onAction={addWallet}>
				<RegistrationContentRow>
					<MaterialTxt
						labelKey={`Wallet name`}
						value={walletName}
						onChange={({ target: { value } }) => setWalletName(value)}
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						labelKey={`Wallet address`}
						value={walletAddress}
						onChange={({ target: { value } }) => setWalletAddress(value)}
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};
