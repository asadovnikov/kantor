import React, { useState } from 'react';
import { Row, Col, Space, Select, Button, Input, Checkbox } from 'antd';
import { RegistrationHeader, RegistrationContent, RegistrationForm, RegistrationContentRow } from './components';
import regionData from 'country-region-data';
const { Option } = Select;

const AddressPage = () => {
	console.log(regionData[234].regions);
	const [regions, setRegions] = useState(regionData[234].regions);
	const [region, setRegion] = useState();
	const handleCountryChange = (value) => {
		const result = regionData.filter(({ countryShortCode }) => countryShortCode === value)[0].regions;
		setRegion(result[0].shortCode);
		setRegions(result);
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Where are you from?' />
			<RegistrationContent>
				<RegistrationContentRow>
					<Select
						defaultValue='US'
						size='large'
						placeholder='Country'
						style={{ width: 550 }}
						onChange={handleCountryChange}>
						{regionData.map((region) => (
							<Option value={region.countryShortCode}>{region.countryName}</Option>
						))}
					</Select>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Select size='large' placeholder='State/Province' style={{ width: 550 }} value={region}>
						{regions.map(({ shortCode, name }) => (
							<Option value={shortCode}>{name}</Option>
						))}
					</Select>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input size='large' placeholder='Home address' />
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input size='large' placeholder='City' />
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Space>
						<Input size='large' placeholder='Postal code' />
					</Space>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Checkbox size='large'>I hold nationality from this country</Checkbox>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default AddressPage;
