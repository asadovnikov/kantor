export const schema = {
    "models": {
        "KYC_Document": {
            "name": "KYC_Document",
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
            "pluralName": "KYC_Documents",
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
                    "type": "Int",
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
                    "type": "Int",
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
                    "type": "Int",
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
                "TotalAmount": {
                    "name": "TotalAmount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "DailyAmount": {
                    "name": "DailyAmount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "MonthlyAmount": {
                    "name": "MonthlyAmount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
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
                "KYC_State": {
                    "name": "KYC_State",
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
                "KYC_Verification": {
                    "name": "KYC_Verification",
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
                "id_verification": {
                    "name": "id_verification",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "id_verification_documents": {
                    "name": "id_verification_documents",
                    "isArray": true,
                    "type": {
                        "model": "KYC_Document"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "verificationIdVerificationDocumentsId"
                    }
                },
                "poa_verification": {
                    "name": "poa_verification",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "poa_verification_documents": {
                    "name": "poa_verification_documents",
                    "isArray": true,
                    "type": {
                        "model": "KYC_Document"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "verificationPoaVerificationDocumentsId"
                    }
                },
                "finance": {
                    "name": "finance",
                    "isArray": false,
                    "type": {
                        "enum": "KycStageStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "finance_documents": {
                    "name": "finance_documents",
                    "isArray": true,
                    "type": {
                        "model": "KYC_Document"
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
                "RECIEVED",
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
    "version": "c6b2cc68a0bbebbf12ddd47ce3736ab7"
};