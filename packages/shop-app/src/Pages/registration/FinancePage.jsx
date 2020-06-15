import React, { useState, useEffect } from 'react';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';
import { MaterialTxt } from './components/LabeledInput';

const FinancePage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [occupation, setOccupation] = useState(value.occupation);
	const [employmentStatus, setEmploymentStatus] = useState(value.employmentStatus);
	const [sourceOfFunds, setSourceOfFunds] = useState(value.sourceOfFunds);
	const [yearIncome, setYearIncome] = useState(value.yearIncome);

	const [isValid, setIsValid] = useState(false);

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
			<RegistrationContent actionText={`Create account`} isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<MaterialTxt
						value={occupation}
						onChange={({ target: { value } }) => {
							setOccupation(value);
							triggerChange();
						}}
						size='large'
						labelKey='Occupation'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={employmentStatus}
						onChange={({ target: { value } }) => {
							setEmploymentStatus(value);
							triggerChange();
						}}
						size='large'
						labelKey='Employment Status'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={sourceOfFunds}
						onChange={({ target: { value } }) => {
							setSourceOfFunds(value);
							triggerChange();
						}}
						size='large'
						labelKey='Source of funds?'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<MaterialTxt
						value={yearIncome}
						onChange={({ target: { value } }) => {
							setYearIncome(value);
							triggerChange();
						}}
						size='large'
						labelKey='Total value of transactions'
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default FinancePage;
