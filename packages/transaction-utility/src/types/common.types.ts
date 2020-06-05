export type RegisteredEntity<T> = {
  id: string;
  hashKey?: string;
} & T;

export type Limits = {
  Tier: CustomerTier;
} & FiatAmount;

export type Person = {
  Firstname: string;
  Surname: string;
  DateOfBirth: string;
  StreetLine1: string;
  StreetLine2?: string;
  City: string;
  PostalCode: number;
  StateProvince: string;
  Country: string;
  Email: string;
  Telephone?: string;
}

export type FiatPayment = {
  FiatCurrency: string;
  FiatAmount: number;
}

export type CryptoPayment = {
  CryptoCurrency: string;
  CryptoAmount: number;
  CryptoAddress: string;
}

export type PaymentRef = {
  GWReference: string;
  BankReference: string;
  MerchantRef: string;
}

export type ValidationResult = {
  KYC: string,
  Tier: CustomerTier,
  PaymentAllowed: boolean
}

export type KYCState = 'UNKNOWN' | 'INITIATED' | 'VALIDATED' | 'NOT_REQUIRED' | 'FAILED';
export type CustomerTier = 'INITIAL' | 'LOW' | 'UPPER' | 'HIGH';
export type FiatAmount = {
  FiatDailyAmount: number;
  FiatMonthlyAmount: number;
  FiatCurrency: string;
}

export type KYCInfo = {
  KYCState: KYCState;
}

export type VerificationStatus = 'INITIATED' | 'VALIDATED' | 'NOT_REQUIRED' | 'FAILED';

export type KYCVerification = {
  idVerification: string;
  poaVerification: string;
  financeVerification: string;
  createdOn: string;
  updatedOn: string;
}

export type Transaction = Person & FiatPayment & Partial<CryptoPayment> & Partial<PaymentRef>
export type TransactionRequest = Person & FiatPayment;
export type Customer = Person & Limits & KYCInfo;