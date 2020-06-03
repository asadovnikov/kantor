/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKycDocument = /* GraphQL */ `
  subscription OnCreateKycDocument {
    onCreateKYCDocument {
      id
      name
      owner
      state
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKycDocument = /* GraphQL */ `
  subscription OnUpdateKycDocument {
    onUpdateKYCDocument {
      id
      name
      owner
      state
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKycDocument = /* GraphQL */ `
  subscription OnDeleteKycDocument {
    onDeleteKYCDocument {
      id
      name
      owner
      state
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePaymentRequest = /* GraphQL */ `
  subscription OnCreatePaymentRequest {
    onCreatePaymentRequest {
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
      FiatAmount
      Status
      createdOn
      updatedOn
    }
  }
`;
export const onUpdatePaymentRequest = /* GraphQL */ `
  subscription OnUpdatePaymentRequest {
    onUpdatePaymentRequest {
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
      FiatAmount
      Status
      createdOn
      updatedOn
    }
  }
`;
export const onDeletePaymentRequest = /* GraphQL */ `
  subscription OnDeletePaymentRequest {
    onDeletePaymentRequest {
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
      FiatAmount
      Status
      createdOn
      updatedOn
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
      createdOn
      updatedOn
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
      Tier
      KYCState
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
          createdOn
          updatedOn
        }
        nextToken
      }
      KYCVerification {
        items {
          id
          idVerification
          poaVerification
          financeVerification
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
      Tier
      KYCState
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
          createdOn
          updatedOn
        }
        nextToken
      }
      KYCVerification {
        items {
          id
          idVerification
          poaVerification
          financeVerification
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
      Tier
      KYCState
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
          createdOn
          updatedOn
        }
        nextToken
      }
      KYCVerification {
        items {
          id
          idVerification
          poaVerification
          financeVerification
          createdOn
          updatedOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const onCreateVerification = /* GraphQL */ `
  subscription OnCreateVerification {
    onCreateVerification {
      id
      idVerification
      idVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      poaVerification
      poaVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      financeVerification
      financeDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateVerification = /* GraphQL */ `
  subscription OnUpdateVerification {
    onUpdateVerification {
      id
      idVerification
      idVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      poaVerification
      poaVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      financeVerification
      financeDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteVerification = /* GraphQL */ `
  subscription OnDeleteVerification {
    onDeleteVerification {
      id
      idVerification
      idVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      poaVerification
      poaVerificationDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      financeVerification
      financeDocuments {
        items {
          id
          name
          owner
          state
          createdAt
          updatedAt
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
