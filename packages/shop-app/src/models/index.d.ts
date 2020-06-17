import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PaymentRequestStatus {
  RECEIVED = "RECEIVED",
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  COMMITED = "COMMITED"
}

export enum DocumentState {
  NEW = "NEW",
  VERIFIED = "VERIFIED",
  FAILED = "FAILED",
  JUMIO_VERIFIED = "JUMIO_VERIFIED"
}

export enum KycStageStatus {
  INITIATED = "INITIATED",
  VALIDATED = "VALIDATED",
  NOT_REQUIRED = "NOT_REQUIRED",
  FAILED = "FAILED"
}

export enum CustomerTier {
  INITIAL = "INITIAL",
  LOW = "LOW",
  UPPER = "UPPER",
  HIGH = "HIGH"
}

export enum UserWalletState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class KYCDocument {
  readonly id: string;
  readonly name?: string;
  readonly owner?: string;
  readonly state: DocumentState | keyof typeof DocumentState;
  readonly file?: S3Object;
  readonly verificationIdVerificationDocumentsId?: string;
  readonly verificationPoaVerificationDocumentsId?: string;
  readonly verificationFinanceDocumentsId?: string;
  constructor(init: ModelInit<KYCDocument>);
  static copyOf(source: KYCDocument, mutator: (draft: MutableModel<KYCDocument>) => MutableModel<KYCDocument> | void): KYCDocument;
}

export declare class PaymentRequest {
  readonly id: string;
  readonly Firstname: string;
  readonly Surname: string;
  readonly DateOfBirth?: string;
  readonly StreetLine1: string;
  readonly StreetLine2?: string;
  readonly City: string;
  readonly PostalCode: string;
  readonly StateProvince: string;
  readonly Country: string;
  readonly Email: string;
  readonly Telephone?: string;
  readonly FiatCurrency: string;
  readonly FiatAmount: string;
  readonly Status: PaymentRequestStatus | keyof typeof PaymentRequestStatus;
  constructor(init: ModelInit<PaymentRequest>);
  static copyOf(source: PaymentRequest, mutator: (draft: MutableModel<PaymentRequest>) => MutableModel<PaymentRequest> | void): PaymentRequest;
}

export declare class Transaction {
  readonly id: string;
  readonly Firstname: string;
  readonly Surname: string;
  readonly DateOfBirth?: string;
  readonly StreetLine1: string;
  readonly StreetLine2?: string;
  readonly City: string;
  readonly PostalCode: string;
  readonly StateProvince: string;
  readonly Country: string;
  readonly Email: string;
  readonly Telephone?: string;
  readonly FiatCurrency: string;
  readonly FiatBaseAmount?: string;
  readonly FiatAmount: string;
  readonly CryptoCurrency: string;
  readonly CryptoAmount: string;
  readonly CryptoAddress: string;
  readonly GWReference?: string;
  readonly BankReference?: string;
  readonly MerchantRef: string;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

export declare class Customer {
  readonly id: string;
  readonly Firstname: string;
  readonly Surname: string;
  readonly DateOfBirth?: string;
  readonly StreetLine1: string;
  readonly StreetLine2?: string;
  readonly City: string;
  readonly PostalCode: number;
  readonly StateProvince: string;
  readonly Country: string;
  readonly Email: string;
  readonly Telephone?: string;
  readonly FiatTotalAmount?: string;
  readonly FiatDailyAmount?: string;
  readonly FiatMonthlyAmount?: string;
  readonly Tier: CustomerTier | keyof typeof CustomerTier;
  readonly KYCState: KycStageStatus | keyof typeof KycStageStatus;
  readonly PaymentTransactions?: Transaction[];
  readonly KYCVerification?: Verification[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Verification {
  readonly id: string;
  readonly idVerification: KycStageStatus | keyof typeof KycStageStatus;
  readonly idVerificationDocuments?: KYCDocument[];
  readonly poaVerification: KycStageStatus | keyof typeof KycStageStatus;
  readonly poaVerificationDocuments?: KYCDocument[];
  readonly financeVerification: KycStageStatus | keyof typeof KycStageStatus;
  readonly financeDocuments?: KYCDocument[];
  readonly customerKycVerificationId?: string;
  constructor(init: ModelInit<Verification>);
  static copyOf(source: Verification, mutator: (draft: MutableModel<Verification>) => MutableModel<Verification> | void): Verification;
}

export declare class UserMeata {
  readonly id: string;
  readonly email: string;
  readonly Wallets: UserWallets[];
  constructor(init: ModelInit<UserMeata>);
  static copyOf(source: UserMeata, mutator: (draft: MutableModel<UserMeata>) => MutableModel<UserMeata> | void): UserMeata;
}

export declare class UserWallets {
  readonly id: string;
  readonly name: string;
  readonly Address: string;
  readonly description?: string;
  readonly State?: UserWalletState | keyof typeof UserWalletState;
  readonly userMeataWalletsId?: string;
  constructor(init: ModelInit<UserWallets>);
  static copyOf(source: UserWallets, mutator: (draft: MutableModel<UserWallets>) => MutableModel<UserWallets> | void): UserWallets;
}