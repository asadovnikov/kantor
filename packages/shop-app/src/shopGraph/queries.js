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
  }`;

export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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

