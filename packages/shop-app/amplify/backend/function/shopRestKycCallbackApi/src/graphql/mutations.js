/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.createJumioVerifyMetaData = gql`
  mutation CreateJumioVerifyMetaData(
    $input: CreateJumioVerifyMetaDataInput!
    $condition: ModelJumioVerifyMetaDataConditionInput
  ) {
    createJumioVerifyMetaData(input: $input, condition: $condition) {
      id
      dataInput
      inputType
      metaInfo
      createdOn
      updatedOn
      Verification {
        id
        idVerification
        poaVerification
        financeVerification
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
            createdOn
            updatedOn
            owner
            Verification {
              id
              idVerification
              poaVerification
              financeVerification
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
                  createdOn
                  updatedOn
                  owner
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
              customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
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
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              jumioVerifications {
                items {
                  id
                  dataInput
                  inputType
                  metaInfo
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
              owner
            }
          }
          nextToken
        }
        customer {
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
              createdOn
              updatedOn
              owner
              Customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
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
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
            }
            nextToken
          }
          createdOn
          updatedOn
          owner
          comments {
            items {
              id
              content
              Author
              AuthorEmail
              createdOn
              updatedOn
              Customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
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
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
            }
            nextToken
          }
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
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
                createdOn
                updatedOn
                owner
                Verification {
                  id
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              nextToken
            }
            customer {
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
                  createdOn
                  updatedOn
                  owner
                  Customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              createdOn
              updatedOn
              owner
              comments {
                items {
                  id
                  content
                  Author
                  AuthorEmail
                  createdOn
                  updatedOn
                  Customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              KYCVerification {
                id
                idVerification
                poaVerification
                financeVerification
                createdOn
                updatedOn
                documents {
                  items {
                    id
                    name
                    state
                    s3Key
                    documentType
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                customer {
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
                    nextToken
                  }
                  createdOn
                  updatedOn
                  owner
                  comments {
                    nextToken
                  }
                  KYCVerification {
                    id
                    idVerification
                    poaVerification
                    financeVerification
                    createdOn
                    updatedOn
                    owner
                  }
                }
                jumioVerifications {
                  items {
                    id
                    dataInput
                    inputType
                    metaInfo
                    createdOn
                    updatedOn
                  }
                  nextToken
                }
                owner
              }
            }
            jumioVerifications {
              items {
                id
                dataInput
                inputType
                metaInfo
                createdOn
                updatedOn
                Verification {
                  id
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              nextToken
            }
            owner
          }
        }
        jumioVerifications {
          items {
            id
            dataInput
            inputType
            metaInfo
            createdOn
            updatedOn
            Verification {
              id
              idVerification
              poaVerification
              financeVerification
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
                  createdOn
                  updatedOn
                  owner
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
              customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
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
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  customer {
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
                    createdOn
                    updatedOn
                    owner
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              jumioVerifications {
                items {
                  id
                  dataInput
                  inputType
                  metaInfo
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
              owner
            }
          }
          nextToken
        }
        owner
      }
    }
  }
`;
