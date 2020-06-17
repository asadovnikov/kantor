/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKycDocument = /* GraphQL */ `
  query GetKycDocument($id: ID!) {
    getKYCDocument(id: $id) {
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
export const listKycDocuments = /* GraphQL */ `
  query ListKycDocuments(
    $filter: ModelKYCDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKYCDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPaymentRequest = /* GraphQL */ `
  query GetPaymentRequest($id: ID!) {
    getPaymentRequest(id: $id) {
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
export const listPaymentRequests = /* GraphQL */ `
  query ListPaymentRequests(
    $filter: ModelPaymentRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        FiatAmount
        Status
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
        createdOn
        updatedOn
        owner
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
        Tier
        KYCState
        PaymentTransactions {
          nextToken
        }
        KYCVerification {
          nextToken
        }
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getVerification = /* GraphQL */ `
  query GetVerification($id: ID!) {
    getVerification(id: $id) {
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
        idVerificationDocuments {
          nextToken
        }
        poaVerification
        poaVerificationDocuments {
          nextToken
        }
        financeVerification
        financeDocuments {
          nextToken
        }
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getUserMeata = /* GraphQL */ `
  query GetUserMeata($id: ID!) {
    getUserMeata(id: $id) {
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
export const listUserMeatas = /* GraphQL */ `
  query ListUserMeatas(
    $filter: ModelUserMeataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMeatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        Wallets {
          nextToken
        }
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
export const getUserWallets = /* GraphQL */ `
  query GetUserWallets($id: ID!) {
    getUserWallets(id: $id) {
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
export const listUserWalletss = /* GraphQL */ `
  query ListUserWalletss(
    $filter: ModelUserWalletsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserWalletss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
