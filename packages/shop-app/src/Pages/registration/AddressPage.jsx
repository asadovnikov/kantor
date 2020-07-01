import React, { useState, useEffect } from 'react';
import { RegistrationHeader, RegistrationContent, RegistrationForm, RegistrationContentRow } from './components';
import regionData from 'country-region-data';
import Select from '@material-ui/core/Select';
import { MaterialTxt } from './components/LabeledInput';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const AddressPage = ({ value = {}, onChange, onValidate, onApply }) => {
	// regionData[234].regions[0].shortCode
	const [regions, setRegions] = useState(regionData[234].regions);
	const [region, setRegion] = useState(regionData[234].regions[0].shortCode);
	const [country, setCountry] = useState(value.country || 'US');
	const [homeAddress, setHomeAddress] = useState(value.homeAddress);
	const [city, setCity] = useState(value.city);
	const [postalCode, setPostalCode] = useState(value.postalCode);
	const [isValid, setIsValid] = useState(false);
	const classes = useStyles();

	useEffect(() => {
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

	const handleCountryChange = ({ target: { value } }) => {
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
			<RegistrationHeader
				Main='Where are you from?'
				Secondary='As a regulated business, we are required to collect this info .'
			/>
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>Country</InputLabel>
						<Select
							defaultValue='US'
							fullWidth
							size='large'
							placeholder='Country'
							value={country}
							onChange={handleCountryChange}>
							{regionData.map((region) => (
								<MenuItem key={region.countryShortCode} value={region.countryShortCode}>
									{region.countryName}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>State/Province</InputLabel>
						<Select
							fullWidth
							onChange={({ target: { value } }) => {
								setRegion(value);
								triggerChange();
							}}
							placeholder='State/Province'
							value={region}>
							{regions.map(({ shortCode, name }) => (
								<MenuItem key={shortCode} value={shortCode}>
									{name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={homeAddress}
						onChange={({ target: { value } }) => {
							setHomeAddress(value);
							triggerChange();
						}}
						labelKey='Home address'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={city}
						onChange={({ target: { value } }) => {
							setCity(value);
							triggerChange();
						}}
						labelKey='City'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={postalCode}
						onChange={({ target: { value } }) => {
							setPostalCode(value);
							triggerChange();
						}}
						labelKey='Postal code'
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default AddressPage;
