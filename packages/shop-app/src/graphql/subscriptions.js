/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKycDocument = /* GraphQL */ `
  subscription OnCreateKycDocument($owner: String) {
    onCreateKYCDocument(owner: $owner) {
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
  subscription OnUpdateKycDocument($owner: String) {
    onUpdateKYCDocument(owner: $owner) {
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
  subscription OnDeleteKycDocument($owner: String) {
    onDeleteKYCDocument(owner: $owner) {
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
  subscription OnCreatePaymentRequest($owner: String) {
    onCreatePaymentRequest(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdatePaymentRequest = /* GraphQL */ `
  subscription OnUpdatePaymentRequest($owner: String) {
    onUpdatePaymentRequest(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeletePaymentRequest = /* GraphQL */ `
  subscription OnDeletePaymentRequest($owner: String) {
    onDeletePaymentRequest(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String) {
    onCreateTransaction(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String) {
    onUpdateTransaction(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String) {
    onDeleteTransaction(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
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
          owner
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
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onCreateVerification = /* GraphQL */ `
  subscription OnCreateVerification($owner: String) {
    onCreateVerification(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateVerification = /* GraphQL */ `
  subscription OnUpdateVerification($owner: String) {
    onUpdateVerification(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteVerification = /* GraphQL */ `
  subscription OnDeleteVerification($owner: String) {
    onDeleteVerification(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateUserMeata = /* GraphQL */ `
  subscription OnCreateUserMeata($owner: String) {
    onCreateUserMeata(owner: $owner) {
      id
      email
      Wallets {
        items {
          id
          name
          Address
          description
          State
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateUserMeata = /* GraphQL */ `
  subscription OnUpdateUserMeata($owner: String) {
    onUpdateUserMeata(owner: $owner) {
      id
      email
      Wallets {
        items {
          id
          name
          Address
          description
          State
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteUserMeata = /* GraphQL */ `
  subscription OnDeleteUserMeata($owner: String) {
    onDeleteUserMeata(owner: $owner) {
      id
      email
      Wallets {
        items {
          id
          name
          Address
          description
          State
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onCreateUserWallets = /* GraphQL */ `
  subscription OnCreateUserWallets($owner: String) {
    onCreateUserWallets(owner: $owner) {
      id
      name
      Address
      description
      State
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateUserWallets = /* GraphQL */ `
  subscription OnUpdateUserWallets($owner: String) {
    onUpdateUserWallets(owner: $owner) {
      id
      name
      Address
      description
      State
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteUserWallets = /* GraphQL */ `
  subscription OnDeleteUserWallets($owner: String) {
    onDeleteUserWallets(owner: $owner) {
      id
      name
      Address
      description
      State
      createdOn
      updatedOn
      owner
    }
  }
`;
