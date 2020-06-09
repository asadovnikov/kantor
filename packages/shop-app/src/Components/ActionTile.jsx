import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

export const ActionTile = ({ title, description, icon }) => {
	return (
		<Card hoverable style={{ marginTop: 16 }} className='action-tile_container'>
			<Meta avatar={<Avatar shape='square' size={84} src={icon} />} title={title} description={description} />
		</Card>
	);
};
