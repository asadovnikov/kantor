import { CustomerTier, FiatAmount, Customer, FiatPayment } from "../types/common.types";
import { reportMessage } from "../operationlog";

type limitsRegistry = Record<CustomerTier, FiatAmount>;

const paymentLimits: limitsRegistry = {
  'Low': {
    FiatDailyAmount: 1000,
    FiatMonthlyAmount: 20000,
    FiatCurrency: 'EUR'
  },
  'Medium': {
    FiatDailyAmount: 5000,
    FiatMonthlyAmount: 100000,
    FiatCurrency: 'EUR'
  },
  'High': {
    FiatDailyAmount: 20000,
    FiatMonthlyAmount: 300000,
    FiatCurrency: 'EUR'
  }
}

export const isCustomerOverLimit = (customer: Customer, amount: FiatPayment): boolean => {
  reportMessage('Check payment over tier limits')
  const limit = paymentLimits[customer.Tier];
  // TODO: Decide how to handle situation of FiatCurrency mismatch
  return isOverLimit(customer.Tier, {
    FiatDailyAmount: customer.FiatDailyAmount + amount.FiatAmount,
    FiatMonthlyAmount: customer.FiatMonthlyAmount + amount.FiatAmount,
    FiatCurrency: amount.FiatCurrency
  })
}

const isOverLimit = (tier: CustomerTier, currentAmount: FiatAmount): boolean => {
  reportMessage('Check payment over tier limits')
  const limit = paymentLimits[tier];
  // TODO: Decide how to handle situation of FiatCurrency mismatch
  return !(currentAmount.FiatDailyAmount > limit.FiatDailyAmount || currentAmount.FiatMonthlyAmount > limit.FiatMonthlyAmount);
}

export const selectAppropriateTier = (amount: FiatAmount) => {
  reportMessage('Selecting suitable tier according to provided amount');
  if (amount.FiatCurrency !== paymentLimits[DefaultTier].FiatCurrency) {
    reportMessage('Found currency mismatch. [Not implemented yet]');
  }
  if (!isOverLimit('Low', amount)) {
    return 'Low';
  }
  if (isOverLimit('Medium', amount)) {
    return 'High'
  }
  if (isOverLimit('Low', amount)) {
    return 'Medium'
  }
  return 'High';
}

export const DefaultTier: CustomerTier = 'Low';