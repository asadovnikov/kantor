import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { RegistrationHeader, RegistrationForm, RegistrationContent, RegistrationContentRow } from './components';

const FinancePage = ({ value = {}, onChange, onValidate, onApply }) => {
	const [occupation, setOccupation] = useState(value.occupation);
	const [employmentStatus, setEmploymentStatus] = useState(value.employmentStatus);
	const [sourceOfFunds, setSourceOfFunds] = useState(value.sourceOfFunds);
	const [totalValueOfTransactions, setTotalValueOfTransactions] = useState(value.totalValueOfTransactions);

	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		const validation = (occupation && employmentStatus && sourceOfFunds && totalValueOfTransactions) !== undefined;
		setIsValid(validation);
		if (validation && onChange) {
			onChange({ occupation, employmentStatus, sourceOfFunds, totalValueOfTransactions });
		}
	}, [occupation, employmentStatus, sourceOfFunds, totalValueOfTransactions]);

	const triggerChange = () => {
		// if (onChange) {
		// 	onChange({ occupation, employmentStatus, sourceOfFunds, totalValueOfTransactions });
		// }
	};
	return (
		<RegistrationForm>
			<RegistrationHeader Main='Financial information' Secondary='Please, provide us with the source of your income.' />
			<RegistrationContent isValid={isValid} onAction={onApply}>
				<RegistrationContentRow>
					<Input
						value={occupation}
						onChange={({ target: { value } }) => {
							setOccupation(value);
							triggerChange();
						}}
						size='large'
						placeholder='Occupation'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={employmentStatus}
						onChange={({ target: { value } }) => {
							setEmploymentStatus(value);
							triggerChange();
						}}
						size='large'
						placeholder='Employment Status'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={sourceOfFunds}
						onChange={({ target: { value } }) => {
							setSourceOfFunds(value);
							triggerChange();
						}}
						size='large'
						placeholder='Source of funds?'
					/>
				</RegistrationContentRow>
				<RegistrationContentRow>
					<Input
						value={totalValueOfTransactions}
						onChange={({ target: { value } }) => {
							setTotalValueOfTransactions(value);
							triggerChange();
						}}
						size='large'
						placeholder='Total value of transactions'
					/>
				</RegistrationContentRow>
			</RegistrationContent>
		</RegistrationForm>
	);
};

export default FinancePage;
