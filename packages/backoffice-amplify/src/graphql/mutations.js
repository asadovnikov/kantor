/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStagingTransactions = /* GraphQL */ `
  mutation CreateStagingTransactions(
    $input: CreateStagingTransactionsInput!
    $condition: ModelStagingTransactionsConditionInput
  ) {
    createStagingTransactions(input: $input, condition: $condition) {
      id
      firstName
      surname
      dateOfBirth
      streetLine1
      streetLine2
      city
      postalCode
      stateProvince
      country
      email
      telephone
      fiatCurrency
      fiatAmount
      cryptoCurrency
      cryptoAmount
      cryptoAddress
      gwReference
      bankReference
      merchantRef
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateStagingTransactions = /* GraphQL */ `
  mutation UpdateStagingTransactions(
    $input: UpdateStagingTransactionsInput!
    $condition: ModelStagingTransactionsConditionInput
  ) {
    updateStagingTransactions(input: $input, condition: $condition) {
      id
      firstName
      surname
      dateOfBirth
      streetLine1
      streetLine2
      city
      postalCode
      stateProvince
      country
      email
      telephone
      fiatCurrency
      fiatAmount
      cryptoCurrency
      cryptoAmount
      cryptoAddress
      gwReference
      bankReference
      merchantRef
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteStagingTransactions = /* GraphQL */ `
  mutation DeleteStagingTransactions(
    $input: DeleteStagingTransactionsInput!
    $condition: ModelStagingTransactionsConditionInput
  ) {
    deleteStagingTransactions(input: $input, condition: $condition) {
      id
      firstName
      surname
      dateOfBirth
      streetLine1
      streetLine2
      city
      postalCode
      stateProvince
      country
      email
      telephone
      fiatCurrency
      fiatAmount
      cryptoCurrency
      cryptoAmount
      cryptoAddress
      gwReference
      bankReference
      merchantRef
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
