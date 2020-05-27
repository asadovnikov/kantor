import { CustomerTier, FiatAmount } from "../types/common.types";

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

export const isOverLimit = (tier: CustomerTier, currentAmount: FiatAmount): boolean => {
  const limit = paymentLimits[tier];
  // TODO: Decide how to handle situation of FiatCurrency mismatch
  return currentAmount.FiatDailyAmount > limit.FiatDailyAmount || currentAmount.FiatMonthlyAmount > limit.FiatMonthlyAmount;
}

export const DefaultTier: CustomerTier = 'Low';