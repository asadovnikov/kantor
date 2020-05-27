/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncStagingTransactions = /* GraphQL */ `
  query SyncStagingTransactions(
    $filter: ModelStagingTransactionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStagingTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStagingTransactions = /* GraphQL */ `
  query GetStagingTransactions($id: ID!) {
    getStagingTransactions(id: $id) {
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
export const listStagingTransactionss = /* GraphQL */ `
  query ListStagingTransactionss(
    $filter: ModelStagingTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStagingTransactionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
