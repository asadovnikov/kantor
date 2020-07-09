export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
  }
`;

export const createUserWallets = /* GraphQL */ `
  mutation CreateUserWallets(
    $input: CreateUserWalletsInput!
    $condition: ModelUserWalletsConditionInput
  ) {
    createUserWallets(input: $input, condition: $condition) {
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