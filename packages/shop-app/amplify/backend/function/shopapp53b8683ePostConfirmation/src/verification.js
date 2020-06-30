module.exports = {
	mutation: `
  mutation CreateVerification(
    $input: CreateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    createVerification(input: $input, condition: $condition) {
      id
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
                  Author
                  AuthorEmail
                  createdOn
                  updatedOn
                }
                nextToken
              }
              KYCVerification {
                id
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
                  Author
                  AuthorEmail
                  createdOn
                  updatedOn
                }
                nextToken
              }
              KYCVerification {
                id
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
            Author
            AuthorEmail
            createdOn
            updatedOn
          }
          nextToken
        }
        KYCVerification {
          id
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
                Author
                AuthorEmail
                createdOn
                updatedOn
              }
              nextToken
            }
            KYCVerification {
              id
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
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
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
            nextToken
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
            nextToken
          }
          owner
        }
      }
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
                  Author
                  AuthorEmail
                  createdOn
                  updatedOn
                }
                nextToken
              }
              KYCVerification {
                id
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
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              nextToken
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
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
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
                  Author
                  AuthorEmail
                  createdOn
                  updatedOn
                }
                nextToken
              }
              KYCVerification {
                id
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
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
                  }
                  jumioVerifications {
                    nextToken
                  }
                  owner
                }
              }
              nextToken
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
                  idVerification
                  poaVerification
                  financeVerification
                  createdOn
                  updatedOn
                  documents {
                    nextToken
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
`,
};
