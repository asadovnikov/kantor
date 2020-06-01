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
      createdOn
      updatedOn
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
        createdOn
        updatedOn
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
      TotalAmount
      DailyAmount
      MonthlyAmount
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
          finance
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
        TotalAmount
        DailyAmount
        MonthlyAmount
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
      finance
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
        finance
        financeDocuments {
          nextToken
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
