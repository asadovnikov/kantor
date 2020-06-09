import React from 'react';
import { Result, Typography, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { RegistrationForm } from './components';
import { waiting } from '../../assets';

const { Text } = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Waiting = () => {
	return (
		<RegistrationForm>
			<Result
				icon={<img src={waiting} alt='waiting' style={{ height: 200 }} />}
				title={
					<Space>
						<Spin indicator={antIcon} size='middle' />
						<Text>Performing heavy calculations.</Text>
					</Space>
				}
			/>
		</RegistrationForm>
	);
};

export default Waiting;
