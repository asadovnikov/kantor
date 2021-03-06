// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PaymentRequestStatus = {
  "RECIEVED": "RECIEVED",
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

const { KYC_Document, PaymentRequest, Transaction, Customer, Verification, S3Object } = initSchema(schema);

export {
  KYC_Document,
  PaymentRequest,
  Transaction,
  Customer,
  Verification,
  PaymentRequestStatus,
  DocumentState,
  KycStageStatus,
  CustomerTier,
  S3Object
};