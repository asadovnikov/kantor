export const listJumioPendingFiles = /* GraphQL */ `
  query ListJumioVerifyMetaDatas(
    $filter: ModelJumioVerifyMetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJumioVerifyMetaDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dataInput
        inputType
        metaInfo
        JumioVerifyStatus
        createdOn
        updatedOn
        Verification {
          id
          idVerification
          poaVerification
          financeVerification
          createdOn
          updatedOn
          owner
        }
      }
      nextToken
    }
  }
`;

export const listVerifications = /* GraphQL */ `
  query ListVerifications(
    $filter: ModelVerificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idVerification
        poaVerification
        financeVerification
        createdOn
        updatedOn
        jumioVerifications {
          items {
            id
            dataInput
            inputType
            metaInfo
            JumioVerifyStatus
            createdOn
            updatedOn
          }
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;

export const listCustomers = /* GraphQL */ `
    query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
        createdOn
        updatedOn
        owner
        KYCVerification {
          id
          idVerification
          poaVerification
          financeVerification
          createdOn
          updatedOn
          jumioVerifications {
            items {
              id
              dataInput
              inputType
              metaInfo
              JumioVerifyStatus
              createdOn
              updatedOn
            }
            nextToken
          }
          owner
        }
      }
      nextToken
    }
  }
`;

export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        FiatCurrency
        FiatBaseAmount
        FiatAmount
        CryptoCurrency
        CryptoAmount
        CryptoAddress
        GWReference
        BankReference
        MerchantRef
        customerID
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;

export const listRegisteredCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        KYCVerification {
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
      nextToken
    }
  }
`;

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
      PaymentTransactions {
        items {
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
          FiatCurrency
          FiatBaseAmount
          FiatAmount
          CryptoCurrency
          CryptoAmount
          CryptoAddress
          GWReference
          BankReference
          MerchantRef
          customerID
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      kycVerificationID
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
      State
      createdOn
      updatedOn
      owner
      comments {
        items {
          id
          content
          customerID
          Author
          AuthorEmail
          createdOn
          updatedOn
        }
        nextToken
      }
      KYCVerification {
        id
        idVerification
        poaVerification
        financeVerification
        customerID
        createdOn
        updatedOn
        documents {
          items {
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
          nextToken
        }
        jumioVerifications {
          items {
            id
            dataInput
            verificationID
            inputType
            metaInfo
            JumioVerifyStatus
            createdOn
            updatedOn
          }
          nextToken
        }
        owner
      }
    }
  }
`;

export const getVerification = /* GraphQL */ `
  query GetVerification($id: ID!) {
    getVerification(id: $id) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
      createdOn
      updatedOn
      documents {
        items {
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
        nextToken
      }
      jumioVerifications {
        items {
          id
          dataInput
          verificationID
          inputType
          metaInfo
          JumioVerifyStatus
          createdOn
          updatedOn
        }
        nextToken
      }
      owner
    }
  }
`;

export const listJumioVerifyMetaDatas = /* GraphQL */ `
  query ListJumioVerifyMetaDatas(
    $filter: ModelJumioVerifyMetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJumioVerifyMetaDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dataInput
        verificationID
        inputType
        metaInfo
        JumioVerifyStatus
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;