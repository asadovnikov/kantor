import React, { useState, useEffect } from 'react';
import { Row, Col, Space, Select, Button, Input, Checkbox } from 'antd';
import { RegistrationHeader, RegistrationContent, RegistrationForm, RegistrationContentRow } from './components';
import regionData from 'country-region-data';
const { Option } = Select;

const AddressPage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [regions, setRegions] = useState(regionData[234].regions);
	const [region, setRegion] = useState(value.region);
	const [country, setCountry] = useState(value.country || 'US');
	const [homeAddress, setHomeAddress] = useState(value.homeAddress);
	const [city, setCity] = useState(value.city);
	const [postalCode, setPostalCode] = useState(value.postalCode);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		debugger;
		const valid = (region && country && homeAddress && city && postalCode) !== undefined;
		setIsValid(valid);
		if (valid && onChange) {
			onChange({
				country,
				region,
				city,
				postalCode,
				homeAddress,
			});
		}
	}, [country, region, city, postalCode, homeAddress]);

	const handleCountryChange = (value) => {
		const result = regionData.filter(({ countryShortCode }) => countryShortCode === value)[0].regions;
		setRegion(result[0].shortCode);
		setRegions(result);
		setCountry(value);
	};
	const triggerChange = () => {
		if (onChange) {
			// onChange({
			// 	country,
			// 	region,
			// 	city,
			// 	postalCode,
			// 	homeAddress,
			// });
		}
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Where are you from?' />
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<Select
						defaultValue='US'
						size='large'
						placeholder='Country'
						value={country}
						style={{ width: 550 }}
						onChange={handleCountryChange}>
						{regionData.map((region) => (
							<Option key={region.countryShortCode} value={region.countryShortCode}>
								{region.countryName}
							</Option>
						))}
					</Select>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Select
						size='large'
						onChange={(value) => {
							setRegion(value);
							triggerChange();
						}}
						placeholder='State/Province'
						style={{ width: 550 }}
						value={region}>
						{regions.map(({ shortCode, name }) => (
							<Option key={shortCode} value={shortCode}>
								{name}
							</Option>
						))}
					</Select>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={homeAddress}
						onChange={({ target: { value } }) => {
							setHomeAddress(value);
							triggerChange();
						}}
						size='large'
						placeholder='Home address'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={city}
						onChange={({ target: { value } }) => {
							setCity(value);
							triggerChange();
						}}
						size='large'
						placeholder='City'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={postalCode}
						onChange={({ target: { value } }) => {
							setPostalCode(value);
							triggerChange();
						}}
						size='large'
						placeholder='Postal code'
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default AddressPage;
