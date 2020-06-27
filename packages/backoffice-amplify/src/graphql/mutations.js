/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKycDocument = /* GraphQL */ `
  mutation CreateKycDocument(
    $input: CreateKYCDocumentInput!
    $condition: ModelKYCDocumentConditionInput
  ) {
    createKYCDocument(input: $input, condition: $condition) {
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const updateKycDocument = /* GraphQL */ `
  mutation UpdateKycDocument(
    $input: UpdateKYCDocumentInput!
    $condition: ModelKYCDocumentConditionInput
  ) {
    updateKYCDocument(input: $input, condition: $condition) {
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const deleteKycDocument = /* GraphQL */ `
  mutation DeleteKycDocument(
    $input: DeleteKYCDocumentInput!
    $condition: ModelKYCDocumentConditionInput
  ) {
    deleteKYCDocument(input: $input, condition: $condition) {
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const createPaymentRequest = /* GraphQL */ `
  mutation CreatePaymentRequest(
    $input: CreatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    createPaymentRequest(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
export const updatePaymentRequest = /* GraphQL */ `
  mutation UpdatePaymentRequest(
    $input: UpdatePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    updatePaymentRequest(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
export const deletePaymentRequest = /* GraphQL */ `
  mutation DeletePaymentRequest(
    $input: DeletePaymentRequestInput!
    $condition: ModelPaymentRequestConditionInput
  ) {
    deletePaymentRequest(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      createdOn
      updatedOn
      owner
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
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
      createdOn
      updatedOn
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
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
      createdOn
      updatedOn
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      Firstname
      Surname
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
          KYCVerification {
            id
            idVerification
            poaVerification
            financeVerification
            createdOn
            updatedOn
            owner
          }
          comments {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
        idVerification
        poaVerification
        financeVerification
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
        createdOn
        updatedOn
        owner
      }
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
      createdOn
      updatedOn
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      Author
      AuthorEmail
      createdOn
      updatedOn
    }
  }
`;
export const createVerification = /* GraphQL */ `
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
            createdOn
            updatedOn
            owner
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      idVerification
      poaVerification
      financeVerification
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
          Verification {
            id
            idVerification
            poaVerification
            financeVerification
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
    }
  }
`;
export const updateVerification = /* GraphQL */ `
  mutation UpdateVerification(
    $input: UpdateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    updateVerification(input: $input, condition: $condition) {
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      idVerification
      poaVerification
      financeVerification
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
          Verification {
            id
            idVerification
            poaVerification
            financeVerification
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
    }
  }
`;
export const deleteVerification = /* GraphQL */ `
  mutation DeleteVerification(
    $input: DeleteVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    deleteVerification(input: $input, condition: $condition) {
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
          documents {
            nextToken
          }
          createdOn
          updatedOn
          owner
        }
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
        createdOn
        updatedOn
        owner
      }
      idVerification
      poaVerification
      financeVerification
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
          Verification {
            id
            idVerification
            poaVerification
            financeVerification
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
    }
  }
`;
export const createUserMeata = /* GraphQL */ `
  mutation CreateUserMeata(
    $input: CreateUserMeataInput!
    $condition: ModelUserMeataConditionInput
  ) {
    createUserMeata(input: $input, condition: $condition) {
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
export const updateUserMeata = /* GraphQL */ `
  mutation UpdateUserMeata(
    $input: UpdateUserMeataInput!
    $condition: ModelUserMeataConditionInput
  ) {
    updateUserMeata(input: $input, condition: $condition) {
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
export const deleteUserMeata = /* GraphQL */ `
  mutation DeleteUserMeata(
    $input: DeleteUserMeataInput!
    $condition: ModelUserMeataConditionInput
  ) {
    deleteUserMeata(input: $input, condition: $condition) {
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
export const updateUserWallets = /* GraphQL */ `
  mutation UpdateUserWallets(
    $input: UpdateUserWalletsInput!
    $condition: ModelUserWalletsConditionInput
  ) {
    updateUserWallets(input: $input, condition: $condition) {
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
export const deleteUserWallets = /* GraphQL */ `
  mutation DeleteUserWallets(
    $input: DeleteUserWalletsInput!
    $condition: ModelUserWalletsConditionInput
  ) {
    deleteUserWallets(input: $input, condition: $condition) {
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
