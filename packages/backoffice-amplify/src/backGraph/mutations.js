export const updateKycDocument = /* GraphQL */ `
  mutation UpdateKycDocument(
    $input: UpdateKYCDocumentInput!
    $condition: ModelKYCDocumentConditionInput
  ) {
    updateKYCDocument(input: $input, condition: $condition) {
      id
      name
      state
      file {
        bucket
        region
        key
      }
      s3Key
      documentType
      verificationID
      createdOn
      updatedOn
      owner
    }
  }
`;

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      customerID
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;

export const createKycDocument = /* GraphQL */ `
  mutation CreateKycDocument(
    $input: CreateKYCDocumentInput!
    $condition: ModelKYCDocumentConditionInput
  ) {
    createKYCDocument(input: $input, condition: $condition) {
      id
      name
      state
      file {
        bucket
        region
        key
      }
      s3Key
      documentType
      verificationID
      createdOn
      updatedOn
      owner
    }
  }
`;

export const updateVerification = /* GraphQL */ `
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
      owner
    }
  }
`;

export const updateJumioVerifyMetaData = /* GraphQL */ `
  mutation UpdateJumioVerifyMetaData(
    $input: UpdateJumioVerifyMetaDataInput!
    $condition: ModelJumioVerifyMetaDataConditionInput
  ) {
    updateJumioVerifyMetaData(input: $input, condition: $condition) {
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