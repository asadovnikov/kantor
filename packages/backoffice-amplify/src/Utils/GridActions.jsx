import React from 'react';
import Icon from '@ant-design/icons';
import { ViewDocIcon } from '../assets';

export const ViewDetailsIcon = ({ onClick }) => (
	<Icon onClick={onClick} style={{ fontSize: '18px' }} component={ViewDocIcon} />
);
