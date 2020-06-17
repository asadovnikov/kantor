// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PaymentRequestStatus = {
  "RECEIVED": "RECEIVED",
  "APPROVED": "APPROVED",
  "DECLINED": "DECLINED",
  "COMMITED": "COMMITED"
};

const DocumentState = {
  "NEW": "NEW",
  "VERIFIED": "VERIFIED",
  "FAILED": "FAILED",
  "JUMIO_VERIFIED": "JUMIO_VERIFIED"
};

const KycStageStatus = {
  "INITIATED": "INITIATED",
  "VALIDATED": "VALIDATED",
  "NOT_REQUIRED": "NOT_REQUIRED",
  "FAILED": "FAILED"
};

const CustomerTier = {
  "INITIAL": "INITIAL",
  "LOW": "LOW",
  "UPPER": "UPPER",
  "HIGH": "HIGH"
};

const UserWalletState = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { KYCDocument, PaymentRequest, Transaction, Customer, Verification, UserMeata, UserWallets, S3Object } = initSchema(schema);

export {
  KYCDocument,
  PaymentRequest,
  Transaction,
  Customer,
  Verification,
  UserMeata,
  UserWallets,
  PaymentRequestStatus,
  DocumentState,
  KycStageStatus,
  CustomerTier,
  UserWalletState,
  S3Object
};