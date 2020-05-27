'use strict';

exports.limits = [
  {
    Tier: 'low',
    FiatCurrency: 'EUR',
    FiatDailyLimit: 1000,
    FiatMonthlyLimit: 20000
  },
  {
    Tier: 'medium',
    FiatCurrency: 'EUR',
    FiatDailyLimit: 5000,
    FiatMonthlyLimit: 100000
  },
  {
    Tier: 'high',
    FiatCurrency: 'EUR',
    FiatDailyLimit: 15000,
    FiatMonthlyLimit: 500000
  }
];