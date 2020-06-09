import React from 'react';
import { Link } from 'react-router-dom';
import { Space, Result, Button } from 'antd';
import { welcome } from '../../assets';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';

const LandingForm = () => {
	return (
		<RegistrationForm>
			<RegistrationHeader Main={`Welcome to kantor shop`} Secondary={`Best place o buy crypto currency`} />
			<RegistrationContent>
				<RegistrationContentRow>
					<Result
						icon={<img src={welcome} alt='waiting' style={{ height: 200 }} />}
						title={
							<Space direction='vertical' style={{ width: '100%' }}>
								<Link to='/failed'>
									<Button block size='large' type='primary' shape='round'>
										Login
									</Button>
								</Link>
								<Button block size='large' shape='round'>
									Register
								</Button>
							</Space>
						}
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default LandingForm;
