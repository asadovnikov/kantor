import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PaymentRequestStatus {
  RECIEVED = "RECIEVED",
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
  readonly PostalCode: number;
  readonly StateProvince: string;
  readonly Country: string;
  readonly Email: string;
  readonly Telephone?: string;
  readonly FiatCurrency: string;
  readonly FiatAmount: number;
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
  readonly PostalCode: number;
  readonly StateProvince: string;
  readonly Country: string;
  readonly Email: string;
  readonly Telephone?: string;
  readonly FiatCurrency: string;
  readonly FiatAmount: number;
  readonly CryptoCurrency: string;
  readonly CryptoAmount: number;
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
  readonly TotalAmount: number;
  readonly DailyAmount: number;
  readonly MonthlyAmount: number;
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
  readonly finance: KycStageStatus | keyof typeof KycStageStatus;
  readonly financeDocuments?: KYCDocument[];
  readonly customerKycVerificationId?: string;
  constructor(init: ModelInit<Verification>);
  static copyOf(source: Verification, mutator: (draft: MutableModel<Verification>) => MutableModel<Verification> | void): Verification;
}