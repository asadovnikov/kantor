/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.getKycDocument = gql`
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
exports.listKycDocuments = gql`
	query ListKycDocuments($filter: ModelKYCDocumentFilterInput, $limit: Int, $nextToken: String) {
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
				createdOn
				updatedOn
				owner
			}
			nextToken
		}
	}
`;
exports.getPaymentRequest = gql`
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
exports.listPaymentRequests = gql`
	query ListPaymentRequests($filter: ModelPaymentRequestFilterInput, $limit: Int, $nextToken: String) {
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
exports.getTransaction = gql`
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
exports.listTransactions = gql`
	query ListTransactions($filter: ModelTransactionFilterInput, $limit: Int, $nextToken: String) {
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
				createdOn
				updatedOn
				owner
			}
			nextToken
		}
	}
`;
exports.getCustomer = gql`
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
exports.listCustomers = gql`
	query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
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
			nextToken
		}
	}
`;
exports.getJumioVerifyMetaData = gql`
	query GetJumioVerifyMetaData($id: ID!) {
		getJumioVerifyMetaData(id: $id) {
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
exports.listJumioVerifyMetaDatas = gql`
	query ListJumioVerifyMetaDatas($filter: ModelJumioVerifyMetaDataFilterInput, $limit: Int, $nextToken: String) {
		listJumioVerifyMetaDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
				inputType
				metaInfo
				createdOn
				updatedOn
			}
			nextToken
		}
	}
`;
exports.getComment = gql`
	query GetComment($id: ID!) {
		getComment(id: $id) {
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
exports.listComments = gql`
	query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
		listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
				Author
				AuthorEmail
				createdOn
				updatedOn
			}
			nextToken
		}
	}
`;
exports.getVerification = gql`
	query GetVerification($id: ID!) {
		getVerification(id: $id) {
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
exports.listVerifications = gql`
	query ListVerifications($filter: ModelVerificationFilterInput, $limit: Int, $nextToken: String) {
		listVerifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
			nextToken
		}
	}
`;
exports.getUserMeata = gql`
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
exports.listUserMeatas = gql`
	query ListUserMeatas($filter: ModelUserMeataFilterInput, $limit: Int, $nextToken: String) {
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
exports.getUserWallets = gql`
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
exports.listUserWalletss = gql`
	query ListUserWalletss($filter: ModelUserWalletsFilterInput, $limit: Int, $nextToken: String) {
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
exports.getTemporaryLinks = gql`
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
exports.listTemporaryLinkss = gql`
	query ListTemporaryLinkss($filter: ModelTemporaryLinksFilterInput, $limit: Int, $nextToken: String) {
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
