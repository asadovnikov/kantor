/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.createJumioVerifyMetaData = gql`
  mutation CreateJumioVerifyMetaData(
    $input: CreateJumioVerifyMetaDataInput!
    $condition: ModelJumioVerifyMetaDataConditionInput
  ) {
    createJumioVerifyMetaData(input: $input, condition: $condition) {
      id
      dataInput
      verificationID
      inputType
      metaInfo
      JumioVerifyStatus
      createdOn
      updatedOn
    }
  }
`;

exports.updateVerification = gql`
  mutation UpdateVerification(
    $input: UpdateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    updateVerification(input: $input, condition: $condition) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
      createdOn
      updatedOn
    }
  }
`;
