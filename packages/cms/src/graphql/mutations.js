/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.createKycDocument = gql`
	mutation CreateKycDocument($input: CreateKYCDocumentInput!, $condition: ModelKYCDocumentConditionInput) {
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
exports.updateKycDocument = gql`
	mutation UpdateKycDocument($input: UpdateKYCDocumentInput!, $condition: ModelKYCDocumentConditionInput) {
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
exports.deleteKycDocument = gql`
	mutation DeleteKycDocument($input: DeleteKYCDocumentInput!, $condition: ModelKYCDocumentConditionInput) {
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
exports.createPaymentRequest = gql`
	mutation CreatePaymentRequest($input: CreatePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
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
exports.updatePaymentRequest = gql`
	mutation UpdatePaymentRequest($input: UpdatePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
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
exports.deletePaymentRequest = gql`
	mutation DeletePaymentRequest($input: DeletePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
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
exports.createTransaction = gql`
	mutation CreateTransaction($input: CreateTransactionInput!, $condition: ModelTransactionConditionInput) {
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
					jumioVerifications {
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
exports.updateTransaction = gql`
	mutation UpdateTransaction($input: UpdateTransactionInput!, $condition: ModelTransactionConditionInput) {
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
					jumioVerifications {
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
exports.deleteTransaction = gql`
	mutation DeleteTransaction($input: DeleteTransactionInput!, $condition: ModelTransactionConditionInput) {
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
					jumioVerifications {
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
exports.createCustomer = gql`
	mutation CreateCustomer($input: CreateCustomerInput!, $condition: ModelCustomerConditionInput) {
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
exports.updateCustomer = gql`
	mutation UpdateCustomer($input: UpdateCustomerInput!, $condition: ModelCustomerConditionInput) {
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
exports.deleteCustomer = gql`
	mutation DeleteCustomer($input: DeleteCustomerInput!, $condition: ModelCustomerConditionInput) {
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
exports.createJumioVerifyMetaData = gql`
	mutation CreateJumioVerifyMetaData(
		$input: CreateJumioVerifyMetaDataInput!
		$condition: ModelJumioVerifyMetaDataConditionInput
	) {
		createJumioVerifyMetaData(input: $input, condition: $condition) {
			id
			dataInput
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
				createdOn
				updatedOn
				owner
			}
			inputType
			metaInfo
			createdOn
			updatedOn
		}
	}
`;
exports.updateJumioVerifyMetaData = gql`
	mutation UpdateJumioVerifyMetaData(
		$input: UpdateJumioVerifyMetaDataInput!
		$condition: ModelJumioVerifyMetaDataConditionInput
	) {
		updateJumioVerifyMetaData(input: $input, condition: $condition) {
			id
			dataInput
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
				createdOn
				updatedOn
				owner
			}
			inputType
			metaInfo
			createdOn
			updatedOn
		}
	}
`;
exports.deleteJumioVerifyMetaData = gql`
	mutation DeleteJumioVerifyMetaData(
		$input: DeleteJumioVerifyMetaDataInput!
		$condition: ModelJumioVerifyMetaDataConditionInput
	) {
		deleteJumioVerifyMetaData(input: $input, condition: $condition) {
			id
			dataInput
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
				createdOn
				updatedOn
				owner
			}
			inputType
			metaInfo
			createdOn
			updatedOn
		}
	}
`;
exports.createComment = gql`
	mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
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
					jumioVerifications {
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
exports.updateComment = gql`
	mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
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
					jumioVerifications {
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
exports.deleteComment = gql`
	mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
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
					jumioVerifications {
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
exports.createVerification = gql`
	mutation CreateVerification($input: CreateVerificationInput!, $condition: ModelVerificationConditionInput) {
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
					jumioVerifications {
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
			jumioVerifications {
				items {
					id
					dataInput
					Verification {
						id
						idVerification
						poaVerification
						financeVerification
						createdOn
						updatedOn
						owner
					}
					inputType
					metaInfo
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
exports.updateVerification = gql`
	mutation UpdateVerification($input: UpdateVerificationInput!, $condition: ModelVerificationConditionInput) {
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
					jumioVerifications {
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
			jumioVerifications {
				items {
					id
					dataInput
					Verification {
						id
						idVerification
						poaVerification
						financeVerification
						createdOn
						updatedOn
						owner
					}
					inputType
					metaInfo
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
exports.deleteVerification = gql`
	mutation DeleteVerification($input: DeleteVerificationInput!, $condition: ModelVerificationConditionInput) {
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
					jumioVerifications {
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
			jumioVerifications {
				items {
					id
					dataInput
					Verification {
						id
						idVerification
						poaVerification
						financeVerification
						createdOn
						updatedOn
						owner
					}
					inputType
					metaInfo
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
exports.createUserMeata = gql`
	mutation CreateUserMeata($input: CreateUserMeataInput!, $condition: ModelUserMeataConditionInput) {
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
exports.updateUserMeata = gql`
	mutation UpdateUserMeata($input: UpdateUserMeataInput!, $condition: ModelUserMeataConditionInput) {
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
exports.deleteUserMeata = gql`
	mutation DeleteUserMeata($input: DeleteUserMeataInput!, $condition: ModelUserMeataConditionInput) {
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
exports.createUserWallets = gql`
	mutation CreateUserWallets($input: CreateUserWalletsInput!, $condition: ModelUserWalletsConditionInput) {
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
exports.updateUserWallets = gql`
	mutation UpdateUserWallets($input: UpdateUserWalletsInput!, $condition: ModelUserWalletsConditionInput) {
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
exports.deleteUserWallets = gql`
	mutation DeleteUserWallets($input: DeleteUserWalletsInput!, $condition: ModelUserWalletsConditionInput) {
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
exports.createTemporaryLinks = gql`
	mutation CreateTemporaryLinks($input: CreateTemporaryLinksInput!, $condition: ModelTemporaryLinksConditionInput) {
		createTemporaryLinks(input: $input, condition: $condition) {
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
exports.updateTemporaryLinks = gql`
	mutation UpdateTemporaryLinks($input: UpdateTemporaryLinksInput!, $condition: ModelTemporaryLinksConditionInput) {
		updateTemporaryLinks(input: $input, condition: $condition) {
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
exports.deleteTemporaryLinks = gql`
	mutation DeleteTemporaryLinks($input: DeleteTemporaryLinksInput!, $condition: ModelTemporaryLinksConditionInput) {
		deleteTemporaryLinks(input: $input, condition: $condition) {
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
