import React, { useState, useEffect } from 'react';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import Select from '@material-ui/core/Select';
import { MaterialTxt } from './components/LabeledInput';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const occupationData = [
	{
		name: 'Student',
		value: 'student',
	},
	{
		name: 'Employed',
		value: 'employed',
	},
	{
		name: 'Self Employed',
		value: 'selfEmployed',
	},
	{
		name: 'Unemployed',
		value: 'unemployed',
	},
	{
		name: 'Retired',
		value: 'retired',
	},
];

const professionData = [
	{
		name: 'Construction/Real estate',
		value: 'constructionRealEstate',
	},
	{
		name: 'Education',
		value: 'education',
	},
	{
		name: 'Emergency service',
		value: 'emergencyService',
	},
	{
		name: 'Financial Service - Banking',
		value: 'financialServiceBanking',
	},
	{
		name: 'Financial Service - Insurance',
		value: 'financialServiceInsurance',
	},
];
const annualDepositeData = [
	{
		name: 'Up to €10,000',
		value: 'up10k',
	},
	{
		name: 'From €10,000 to €50,000',
		value: 'from10kto50k',
	},
	{
		name: 'From €50,000 to €150,000',
		value: 'from50kto150k',
	},
	{
		name: 'From $150,000 to €500,000',
		value: 'from150kto500k',
	},
	{
		name: 'More than €500k',
		value: 'more500k',
	},
];
const sourceOfFundsData = [
	{
		name: 'Salary',
		value: 'salary',
	},
	{
		name: 'Dividents',
		value: 'dividents',
	},
	{
		name: 'Inheritance',
		value: 'inheritance',
	},
	{
		name: 'Savings',
		value: 'Savings',
	},
	{
		name: 'Investment proceed',
		value: 'investmentProceed',
	},
	{
		name: 'Gift',
		value: 'gift',
	},
	{
		name: 'Other',
		value: 'other',
	},
];

const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const FinancePage = ({ value = {}, onChange, onValidate, onApply, isLoading }) => {
	const [occupation, setOccupation] = useState(value.occupation);
	const [employmentStatus, setEmploymentStatus] = useState(value.employmentStatus);
	const [sourceOfFunds, setSourceOfFunds] = useState(value.sourceOfFunds);
	const [yearIncome, setYearIncome] = useState(value.yearIncome);

	const [isValid, setIsValid] = useState(false);

	const classes = useStyles();

	useEffect(() => {
		const validation = (occupation && employmentStatus && sourceOfFunds && yearIncome) !== undefined;
		setIsValid(validation);
		if (validation && onChange) {
			onChange({ occupation, employmentStatus, sourceOfFunds, yearIncome });
		}
	}, [occupation, employmentStatus, sourceOfFunds, yearIncome]);

	const triggerChange = () => {
		// if (onChange) {
		// 	onChange({ occupation, employmentStatus, sourceOfFunds, yearIncome });
		// }
	};
	return (
		<RegistrationForm>
			<RegistrationHeader
				Main='Basic financial information'
				Secondary='As a regulated business, we are required to collect this info .'
			/>
			<RegistrationContent isLoading={isLoading} actionText={`Create account`} isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>Your current occupation</InputLabel>
						<Select
							fullWidth
							size='large'
							placeholder='Select one'
							value={occupation}
							onChange={({ target: { value } }) => {
								setOccupation(value);
							}}>
							{occupationData.map((occupation) => (
								<MenuItem value={occupation.value}>{occupation.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>Your current profession</InputLabel>
						<Select
							fullWidth
							size='large'
							placeholder='Select one'
							value={employmentStatus}
							onChange={({ target: { value } }) => {
								setEmploymentStatus(value);
							}}>
							{professionData.map((profession) => (
								<MenuItem value={profession.value}>{profession.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>Your annual deposit estimation</InputLabel>
						<Select
							fullWidth
							size='large'
							placeholder='Select one'
							value={sourceOfFunds}
							onChange={({ target: { value } }) => {
								setSourceOfFunds(value);
							}}>
							{annualDepositeData.map((deposite) => (
								<MenuItem value={deposite.value}>{deposite.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<FormControl className={classes.formControl} fullWidth>
						<InputLabel htmlFor='age-native-simple'>Your source of funds</InputLabel>
						<Select
							fullWidth
							size='large'
							placeholder='Select one'
							value={yearIncome}
							onChange={({ target: { value } }) => {
								setYearIncome(value);
							}}>
							{sourceOfFundsData.map((source) => (
								<MenuItem value={source.value}>{source.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default FinancePage;
