import React, { useState, useEffect, useCallback } from 'react';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import Select from '@material-ui/core/Select';
// import { MaterialTxt } from './components/LabeledInput';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const occupationData = [
	{
		name: 'Student',
		value: 'STUDENT',
	},
	{
		name: 'Employed',
		value: 'EMPLOYED',
	},
	{
		name: 'Self Employed',
		value: 'SELFEMPLOYED',
	},
	{
		name: 'Unemployed',
		value: 'UNEMPLOYED',
	},
	{
		name: 'Retired',
		value: 'RETIRED',
	},
];

const professionData = [
	{
		name: 'Construction/Real estate',
		value: 'CONSTRUCTIONREALESTATE',
	},
	{
		name: 'Education',
		value: 'EDUCATION',
	},
	{
		name: 'Emergency service',
		value: 'EMERGENCYSERVICE',
	},
	{
		name: 'Financial Service - Banking',
		value: 'FINANCIALSERVICEBANKING',
	},
	{
		name: 'Financial Service - Insurance',
		value: 'FINANCIALSERVICEINSURANCE',
	},
];
const annualDepositeData = [
	{
		name: 'Up to €10,000',
		value: 'UP10K',
	},
	{
		name: 'From €10,000 to €50,000',
		value: 'FROM10KTO50K',
	},
	{
		name: 'From €50,000 to €150,000',
		value: 'FROM50KTO150K',
	},
	{
		name: 'From $150,000 to €500,000',
		value: 'FROM150KTO500K',
	},
	{
		name: 'More than €500k',
		value: 'MORE500K',
	},
];
const sourceOfFundsData = [
	{
		name: 'Salary',
		value: 'SALARY',
	},
	{
		name: 'Dividends',
		value: 'DIVIDENDS',
	},
	{
		name: 'Inheritance',
		value: 'INHERITANCE',
	},
	{
		name: 'Savings',
		value: 'SAVINGS',
	},
	{
		name: 'Investment proceed',
		value: 'INVESTMENTPROCEED',
	},
	{
		name: 'Gift',
		value: 'GIFT',
	},
	{
		name: 'Other',
		value: 'OTHER',
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

const FinancePage = ({ value = {}, onChange = () => {}, onValidate, onApply, isLoading }) => {
	const [occupation, setOccupation] = useState(value.occupation);
	const [employmentStatus, setEmploymentStatus] = useState(value.employmentStatus);
	const [sourceOfFunds, setSourceOfFunds] = useState(value.sourceOfFunds);
	const [yearIncome, setYearIncome] = useState(value.yearIncome);

	const [isValid, setIsValid] = useState(false);

	const classes = useStyles();

	// const useCallback(
	// 	() => {
	// 		callback
	// 	},
	// 	[input],
	// )

	useEffect(() => {
		const validation = (occupation && employmentStatus && sourceOfFunds && yearIncome) !== undefined;
		setIsValid(validation);
		if (validation) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			onChange({ occupation, employmentStatus, sourceOfFunds, yearIncome });
		}
	}, [occupation, employmentStatus, sourceOfFunds, yearIncome]);

	// const triggerChange = () => {
	// 	// if (onChange) {
	// 	// 	onChange({ occupation, employmentStatus, sourceOfFunds, yearIncome });
	// 	// }
	// };
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
