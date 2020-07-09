module.exports = {
	mutation: `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      Firstname
      Surname
      DateOfBirth
      StreetLine1
      StreetLine2
      City
      PostalCode
      StateProvince
      Country
      Email
      Telephone
      FiatTotalAmount
      FiatDailyAmount
      FiatMonthlyAmount
      FiatCurrency
      Tier
      KYCState
      VerificationID
      kycVerificationID
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
      State
      createdOn
      updatedOn
      owner
    }
  }
`,
};
