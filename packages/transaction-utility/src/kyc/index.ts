import { KYCState, Customer, FiatPayment } from "../types/common.types";
import { reportMessage } from "../operationlog";
import { isCustomerOverLimit } from "../validation/limits";

export const DefaultKYCState: KYCState = 'INITIATED';

export const kycCheck = (customer: Customer, payment: FiatPayment) => {
  reportMessage('Performing KYC status check');
  if (customer.KYC_State === 'Validated' && isCustomerOverLimit(customer, payment)) {
    reportMessage('Moving KYC to pending state, due to possible tier level up. [Not implemented yet]');
    return true;
  }
  return isCustomerOverLimit(customer, payment);
}

/**
 * KYC steps for each tier
 *
 */