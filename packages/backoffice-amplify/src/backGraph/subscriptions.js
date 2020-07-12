export const onCreateKycDocument = /* GraphQL */ `
  subscription OnCreateKycDocument($owner: String) {
    onCreateKYCDocument(owner: $owner) {
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

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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