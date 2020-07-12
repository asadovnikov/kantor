import React from 'react';
import Icon from '@ant-design/icons';
import { PendingVerificationIcon, NotRequiredVerificationIcon, DocumentVerifiedIcon } from '../assets';

export const KycIcon = ({ kycState }) => {
	if (kycState === 'NOT_REQUIRED') {
		return <Icon style={{ fontSize: '18px' }} component={NotRequiredVerificationIcon} />;
	} else if (kycState === 'FAILED') {
		return <Icon style={{ fontSize: '18px' }} component={PendingVerificationIcon} />;
	} else {
		return <Icon style={{ fontSize: '18px' }} component={DocumentVerifiedIcon} />;
	}
};
