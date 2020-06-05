export const schema = {
    "models": {
        "KYCDocument": {
            "name": "KYCDocument",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "owner": {
                    "name": "owner",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "DocumentState"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "file": {
                    "name": "file",
                    "isArray": false,
                    "type": {
                        "nonModel": "S3Object"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "verificationIdVerificationDocumentsId": {
                    "name": "verificationIdVerificationDocumentsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "verificationPoaVerificationDocumentsId": {
                    "name": "verificationPoaVerificationDocumentsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "verificationFinanceDocumentsId": {
                    "name": "verificationFinanceDocumentsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "KYCDocuments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public"
                            }
                        ]
                    }
                }
            ]
        },
        "PaymentRequest": {
            "name": "PaymentRequest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Firstname": {
                    "name": "Firstname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Surname": {
                    "name": "Surname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DateOfBirth": {
                    "name": "DateOfBirth",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "StreetLine1": {
                    "name": "StreetLine1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "StreetLine2": {
                    "name": "StreetLine2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "City": {
                    "name": "City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PostalCode": {
                    "name": "PostalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "StateProvince": {
                    "name": "StateProvince",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Telephone": {
                    "name": "Telephone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatCurrency": {
                    "name": "FiatCurrency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FiatAmount": {
                    "name": "FiatAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Status": {
                    "name": "Status",
                    "isArray": false,
                    "type": {
                        "enum": "PaymentRequestStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "PaymentRequests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "timestamps": {
                            "createdAt": "createdOn",
                            "updatedAt": "updatedOn"
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public"
                            }
                        ]
                    }
                }
            ]
        },
        "Transaction": {
            "name": "Transaction",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Firstname": {
                    "name": "Firstname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Surname": {
                    "name": "Surname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DateOfBirth": {
                    "name": "DateOfBirth",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "StreetLine1": {
                    "name": "StreetLine1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "StreetLine2": {
                    "name": "StreetLine2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "City": {
                    "name": "City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PostalCode": {
                    "name": "PostalCode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "StateProvince": {
                    "name": "StateProvince",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Telephone": {
                    "name": "Telephone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatCurrency": {
                    "name": "FiatCurrency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FiatBaseAmount": {
                    "name": "FiatBaseAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatAmount": {
                    "name": "FiatAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CryptoCurrency": {
                    "name": "CryptoCurrency",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CryptoAmount": {
                    "name": "CryptoAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CryptoAddress": {
                    "name": "CryptoAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "GWReference": {
                    "name": "GWReference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "BankReference": {
                    "name": "BankReference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MerchantRef": {
                    "name": "MerchantRef",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Transactions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "timestamps": {
                            "createdAt": "createdOn",
                            "updatedAt": "updatedOn"
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byMerchantRef",
                        "fields": [
                            "MerchantRef",
                            "id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public"
                            }
                        ]
                    }
                }
            ]
        },
        "Customer": {
            "name": "Customer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Firstname": {
                    "name": "Firstname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Surname": {
                    "name": "Surname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DateOfBirth": {
                    "name": "DateOfBirth",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "StreetLine1": {
                    "name": "StreetLine1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "StreetLine2": {
                    "name": "StreetLine2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "City": {
                    "name": "City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PostalCode": {
                    "name": "PostalCode",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "StateProvince": {
                    "name": "StateProvince",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Telephone": {
                    "name": "Telephone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatTotalAmount": {
                    "name": "FiatTotalAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatDailyAmount": {
                    "name": "FiatDailyAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FiatMonthlyAmount": {
                    "name": "FiatMonthlyAmount",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Tier": {
                    "name": "Tier",
                    "isArray": false,
                    "type": {
                        "enum": "CustomerTier"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "KYCState": {
                    "name": "KYCState",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "PaymentTransactions": {
                    "name": "PaymentTransactions",
                    "isArray": true,
                    "type": {
                        "model": "Transaction"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "MerchantRef"
                    }
                },
                "KYCVerification": {
                    "name": "KYCVerification",
                    "isArray": true,
                    "type": {
                        "model": "Verification"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "customerKycVerificationId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Customers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "timestamps": {
                            "createdAt": "createdOn",
                            "updatedAt": "updatedOn"
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEmail",
                        "fields": [
                            "Email"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public"
                            }
                        ]
                    }
                }
            ]
        },
        "Verification": {
            "name": "Verification",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "idVerification": {
                    "name": "idVerification",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "idVerificationDocuments": {
                    "name": "idVerificationDocuments",
                    "isArray": true,
                    "type": {
                        "model": "KYCDocument"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "verificationIdVerificationDocumentsId"
                    }
                },
                "poaVerification": {
                    "name": "poaVerification",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "poaVerificationDocuments": {
                    "name": "poaVerificationDocuments",
                    "isArray": true,
                    "type": {
                        "model": "KYCDocument"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "verificationPoaVerificationDocumentsId"
                    }
                },
                "financeVerification": {
                    "name": "financeVerification",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "financeDocuments": {
                    "name": "financeDocuments",
                    "isArray": true,
                    "type": {
                        "model": "KYCDocument"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "verificationFinanceDocumentsId"
                    }
                },
                "customerKycVerificationId": {
                    "name": "customerKycVerificationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Verifications",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "timestamps": {
                            "createdAt": "createdOn",
                            "updatedAt": "updatedOn"
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "PaymentRequestStatus": {
            "name": "PaymentRequestStatus",
            "values": [
                "RECEIVED",
                "APPROVED",
                "DECLINED",
                "COMMITED"
            ]
        },
        "DocumentState": {
            "name": "DocumentState",
            "values": [
                "NEW",
                "VERIFIED",
                "FAILED",
                "JUMIO_VERIFIED"
            ]
        },
        "KycStageStatus": {
            "name": "KycStageStatus",
            "values": [
                "INITIATED",
                "VALIDATED",
                "NOT_REQUIRED",
                "FAILED"
            ]
        },
        "CustomerTier": {
            "name": "CustomerTier",
            "values": [
                "INITIAL",
                "LOW",
                "UPPER",
                "HIGH"
            ]
        }
    },
    "nonModels": {
        "S3Object": {
            "name": "S3Object",
            "fields": {
                "bucket": {
                    "name": "bucket",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "region": {
                    "name": "region",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "e137051bce59c323b1179a2bbdacf5de"
};