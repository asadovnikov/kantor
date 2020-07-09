/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      customerID
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
      customerID
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
      customerID
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
export const onCreateKycDocument = /* GraphQL */ `
  subscription OnCreateKycDocument($owner: String) {
    onCreateKYCDocument(owner: $owner) {
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
      verificationID
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onUpdateKycDocument = /* GraphQL */ `
  subscription OnUpdateKycDocument($owner: String) {
    onUpdateKYCDocument(owner: $owner) {
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
      verificationID
      createdOn
      updatedOn
      owner
    }
  }
`;
export const onDeleteKycDocument = /* GraphQL */ `
  subscription OnDeleteKycDocument($owner: String) {
    onDeleteKYCDocument(owner: $owner) {
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
      verificationID
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
          customerID
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      kycVerificationID
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
      State
      createdOn
      updatedOn
      owner
      comments {
        items {
          id
          content
          customerID
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
        customerID
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
            verificationID
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
              customerID
              createdOn
              updatedOn
              owner
            }
            nextToken
          }
          kycVerificationID
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
          State
          createdOn
          updatedOn
          owner
          comments {
            items {
              id
              content
              customerID
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
            customerID
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
                verificationID
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
                  customerID
                  createdOn
                  updatedOn
                  owner
                }
                nextToken
              }
              kycVerificationID
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
              State
              createdOn
              updatedOn
              owner
              comments {
                items {
                  id
                  content
                  customerID
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
                customerID
                createdOn
                updatedOn
                documents {
                  items {
                    id
                    name
                    state
                    s3Key
                    documentType
                    verificationID
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
                  kycVerificationID
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
                  State
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                }
                jumioVerifications {
                  items {
                    id
                    dataInput
                    verificationID
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
                verificationID
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
            verificationID
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
          customerID
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      kycVerificationID
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
      State
      createdOn
      updatedOn
      owner
      comments {
        items {
          id
          content
          customerID
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
        customerID
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
            verificationID
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
              customerID
              createdOn
              updatedOn
              owner
            }
            nextToken
          }
          kycVerificationID
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
          State
          createdOn
          updatedOn
          owner
          comments {
            items {
              id
              content
              customerID
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
            customerID
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
                verificationID
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
                  customerID
                  createdOn
                  updatedOn
                  owner
                }
                nextToken
              }
              kycVerificationID
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
              State
              createdOn
              updatedOn
              owner
              comments {
                items {
                  id
                  content
                  customerID
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
                customerID
                createdOn
                updatedOn
                documents {
                  items {
                    id
                    name
                    state
                    s3Key
                    documentType
                    verificationID
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
                  kycVerificationID
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
                  State
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                }
                jumioVerifications {
                  items {
                    id
                    dataInput
                    verificationID
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
                verificationID
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
            verificationID
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
          customerID
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
      kycVerificationID
      EmploymentStatus
      SourceOfFunds
      Occupation
      AnnualDeposit
      State
      createdOn
      updatedOn
      owner
      comments {
        items {
          id
          content
          customerID
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
        customerID
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
            verificationID
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
              customerID
              createdOn
              updatedOn
              owner
            }
            nextToken
          }
          kycVerificationID
          EmploymentStatus
          SourceOfFunds
          Occupation
          AnnualDeposit
          State
          createdOn
          updatedOn
          owner
          comments {
            items {
              id
              content
              customerID
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
            customerID
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
                verificationID
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
                  customerID
                  createdOn
                  updatedOn
                  owner
                }
                nextToken
              }
              kycVerificationID
              EmploymentStatus
              SourceOfFunds
              Occupation
              AnnualDeposit
              State
              createdOn
              updatedOn
              owner
              comments {
                items {
                  id
                  content
                  customerID
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
                customerID
                createdOn
                updatedOn
                documents {
                  items {
                    id
                    name
                    state
                    s3Key
                    documentType
                    verificationID
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
                  kycVerificationID
                  EmploymentStatus
                  SourceOfFunds
                  Occupation
                  AnnualDeposit
                  State
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                }
                jumioVerifications {
                  items {
                    id
                    dataInput
                    verificationID
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
                verificationID
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
            verificationID
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
`;
export const onCreateJumioVerifyMetaData = /* GraphQL */ `
  subscription OnCreateJumioVerifyMetaData {
    onCreateJumioVerifyMetaData {
      id
      dataInput
      verificationID
      inputType
      metaInfo
      JumioVerifyStatus
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateJumioVerifyMetaData = /* GraphQL */ `
  subscription OnUpdateJumioVerifyMetaData {
    onUpdateJumioVerifyMetaData {
      id
      dataInput
      verificationID
      inputType
      metaInfo
      JumioVerifyStatus
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteJumioVerifyMetaData = /* GraphQL */ `
  subscription OnDeleteJumioVerifyMetaData {
    onDeleteJumioVerifyMetaData {
      id
      dataInput
      verificationID
      inputType
      metaInfo
      JumioVerifyStatus
      createdOn
      updatedOn
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      customerID
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      customerID
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      customerID
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const onCreateVerification = /* GraphQL */ `
  subscription OnCreateVerification($owner: String) {
    onCreateVerification(owner: $owner) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
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
          verificationID
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
            customerID
            createdOn
            updatedOn
            owner
          }
          nextToken
        }
        kycVerificationID
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
        State
        createdOn
        updatedOn
        owner
        comments {
          items {
            id
            content
            customerID
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
          customerID
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
              verificationID
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
                customerID
                createdOn
                updatedOn
                owner
              }
              nextToken
            }
            kycVerificationID
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
            State
            createdOn
            updatedOn
            owner
            comments {
              items {
                id
                content
                customerID
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
              customerID
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
                  verificationID
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                kycVerificationID
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
                State
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
                    customerID
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
                  customerID
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
                    kycVerificationID
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    State
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
                  verificationID
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
              verificationID
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
          verificationID
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
`;
export const onUpdateVerification = /* GraphQL */ `
  subscription OnUpdateVerification($owner: String) {
    onUpdateVerification(owner: $owner) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
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
          verificationID
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
            customerID
            createdOn
            updatedOn
            owner
          }
          nextToken
        }
        kycVerificationID
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
        State
        createdOn
        updatedOn
        owner
        comments {
          items {
            id
            content
            customerID
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
          customerID
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
              verificationID
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
                customerID
                createdOn
                updatedOn
                owner
              }
              nextToken
            }
            kycVerificationID
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
            State
            createdOn
            updatedOn
            owner
            comments {
              items {
                id
                content
                customerID
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
              customerID
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
                  verificationID
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                kycVerificationID
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
                State
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
                    customerID
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
                  customerID
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
                    kycVerificationID
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    State
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
                  verificationID
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
              verificationID
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
          verificationID
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
`;
export const onDeleteVerification = /* GraphQL */ `
  subscription OnDeleteVerification($owner: String) {
    onDeleteVerification(owner: $owner) {
      id
      idVerification
      poaVerification
      financeVerification
      customerID
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
          verificationID
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
            customerID
            createdOn
            updatedOn
            owner
          }
          nextToken
        }
        kycVerificationID
        EmploymentStatus
        SourceOfFunds
        Occupation
        AnnualDeposit
        State
        createdOn
        updatedOn
        owner
        comments {
          items {
            id
            content
            customerID
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
          customerID
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
              verificationID
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
                customerID
                createdOn
                updatedOn
                owner
              }
              nextToken
            }
            kycVerificationID
            EmploymentStatus
            SourceOfFunds
            Occupation
            AnnualDeposit
            State
            createdOn
            updatedOn
            owner
            comments {
              items {
                id
                content
                customerID
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
              customerID
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
                  verificationID
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
                    customerID
                    createdOn
                    updatedOn
                    owner
                  }
                  nextToken
                }
                kycVerificationID
                EmploymentStatus
                SourceOfFunds
                Occupation
                AnnualDeposit
                State
                createdOn
                updatedOn
                owner
                comments {
                  items {
                    id
                    content
                    customerID
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
                  customerID
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
                    kycVerificationID
                    EmploymentStatus
                    SourceOfFunds
                    Occupation
                    AnnualDeposit
                    State
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
                  verificationID
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
              verificationID
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
          verificationID
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
`;
export const onCreateTemporaryLinks = /* GraphQL */ `
  subscription OnCreateTemporaryLinks($owner: String) {
    onCreateTemporaryLinks(owner: $owner) {
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
export const onUpdateTemporaryLinks = /* GraphQL */ `
  subscription OnUpdateTemporaryLinks($owner: String) {
    onUpdateTemporaryLinks(owner: $owner) {
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
export const onDeleteTemporaryLinks = /* GraphQL */ `
  subscription OnDeleteTemporaryLinks($owner: String) {
    onDeleteTemporaryLinks(owner: $owner) {
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
