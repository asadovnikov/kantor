module.exports = {
	mutation: `
  mutation CreateVerification(
    $input: CreateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    createVerification(input: $input, condition: $condition) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
      createdOn
      updatedOn
      owner
    }
  }
`,
};
