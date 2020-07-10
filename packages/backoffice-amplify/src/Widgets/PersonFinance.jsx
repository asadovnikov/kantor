import React from 'react';
import { ItemDetails } from '../Components';

const employmentStatusMap = {
	STUDENT: 'Student',
	EMPLOYED: 'Employed',
	SELFEMPLOYED: 'Self Employed',
	UNEMPLOYED: 'Unemployed',
	RETIRED: 'Retired',
};

const occupationMap = {
	CONSTRUCTIONREALESTATE: 'Construction/Real estate',
	EDUCATION: 'Education',
	EMERGENCYSERVICE: 'Emergency service',
	FINANCIALSERVICEBANKING: 'Financial Service - Banking',
	FINANCIALSERVICEINSURANCE: 'Financial Service - Insurance',
};

const annualDepositMap = {
	UP10K: 'Up to €10,000',
	FROM10KTO50K: 'From €10,000 to €50,000',
	FROM50KTO150K: 'From €50,000 to €150,000',
	FROM150KTO500K: 'From $150,000 to €500,000',
	MORE500K: 'More than €500k',
};

const sourceOfFundsMap = {
	SALARY: 'Salary',
	DIVIDENDS: 'Dividends',
	INHERITANCE: 'Inheritance',
	SAVINGS: 'Savings',
	INVESTMENTPROCEED: 'Investment proceed',
	GIFT: 'Gift',
	OTHER: 'Other',
};

export const PersonFinanceWidget = ({ person = {} }) => {
	return (
		<>
			<ItemDetails
				details={[
					{
						label: 'Occupation',
						value: employmentStatusMap[person.EmploymentStatus],
					},
					{
						label: 'Profession',
						value: occupationMap[person.Occupation],
					},
					{
						label: 'Annual deposit',
						value: annualDepositMap[person.AnnualDeposit],
					},
					{
						label: 'Source of funds',
						value: sourceOfFundsMap[person.SourceOfFunds],
					},
				]}
			/>
		</>
	);
};
