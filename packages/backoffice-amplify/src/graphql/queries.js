/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          nextToken
        }
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          owner
        }
      }
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
export const getKycDocument = /* GraphQL */ `
  query GetKycDocument($id: ID!) {
    getKYCDocument(id: $id) {
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          owner
        }
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          nextToken
        }
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
        }
        nextToken
      }
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
export const getJumioVerifyMetaData = /* GraphQL */ `
  query GetJumioVerifyMetaData($id: ID!) {
    getJumioVerifyMetaData(id: $id) {
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          owner
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          nextToken
        }
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          owner
        }
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          nextToken
        }
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          nextToken
        }
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
              }
              nextToken
            }
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
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
                    nextToken
                  }
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
              owner
            }
          }
          jumioVerifications {
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
          owner
        }
      }
      jumioVerifications {
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    createdOn
                    updatedOn
                    owner
                  }
                }
                nextToken
              }
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
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
                    JumioVerifyStatus
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
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
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
        nextToken
      }
      owner
    }
  }
`;
export const getTemporaryLinks = /* GraphQL */ `
  query GetTemporaryLinks($id: ID!) {
    getTemporaryLinks(id: $id) {
      id
      customerId
      transactionId
      link
      comment
      createdOn
      updatedOn
      owner
    }
  }
`;
export const listTemporaryLinkss = /* GraphQL */ `
  query ListTemporaryLinkss(
    $filter: ModelTemporaryLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemporaryLinkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerId
        transactionId
        link
        comment
        createdOn
        updatedOn
        owner
      }
      nextToken
    }
  }
`;
