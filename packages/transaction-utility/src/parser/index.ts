//parse received event
//parse received db event

import { TransactionRequest, Person } from "../types/common.types";

const validateRequiredFields = (request: TransactionRequest) => {
  const missingFields = []
  if (request.City === undefined) {
    missingFields.push('City');
  }
  if (request.PostalCode === undefined) {
    missingFields.push('PostalCode');
  }
  if (request.Country === undefined) {
    missingFields.push('Country');
  }
  if (request.StateProvince === undefined) {
    missingFields.push('StateProvince');
  }
  if (request.Firstname === undefined) {
    missingFields.push('Firstname');
  }
  if (request.Surname === undefined) {
    missingFields.push('Surname');
  }
  if (request.Email === undefined) {
    missingFields.push('Email');
  }
  if (request.StreetLine1 === undefined) {
    missingFields.push('StreetLine1');
  }
  if (request.FiatAmount === undefined) {
    missingFields.push('FiatAmount');
  }
  if (request.FiatCurrency === undefined) {
    missingFields.push('FiatCurrency');
  }
  if (missingFields.length > 0) {
    throw Error(`ERROR: Next fields are missing: ${missingFields.join('\n')}`);
  }
}

const isTransactionRequest = (arg: any): arg is TransactionRequest => {
  return (arg || {}).hasOwnProperty('Email') || (arg || {}).hasOwnProperty('email');
  // const tr = (arg as TransactionRequest);
  // return tr.email !== undefined;
}

const prepareTrRequest = (arg: any): TransactionRequest => {
  return arg as TransactionRequest;
  // return Object.fromEntries(Object.keys(arg).map(key => [key.charAt(0).toUpperCase() + key.slice(1), arg[key]])) as TransactionRequest;
}
const extractTransaction = (message: any): TransactionRequest => {
  // reportMessage('Extracting transaction from a message');
  if (isTransactionRequest(message)) {
    return prepareTrRequest(message);
  }
  if (message.transaction !== undefined) {
    if (isTransactionRequest(message.transaction)) {
      return prepareTrRequest(message.transaction);
    }
  }
  if (message.body !== undefined) {
    if (isTransactionRequest(message.body)) {
      return prepareTrRequest(message.body);
    }
    if (message.body.transaction !== undefined) {
      if (isTransactionRequest(message.body.transaction)) {
        return prepareTrRequest(message.body.transaction);
      }
    }
  }
  throw new Error('Failed extracting transaction details');
}

export const extractTransactionFromDBEvent = (dbevent): TransactionRequest => {
  const { NewImage } = typeof dbevent === 'string' ? JSON.parse(dbevent) : dbevent;
  const person: TransactionRequest = {
    Email: NewImage.Email.S,
    Firstname: NewImage.Firstname.S,
    Surname: NewImage.Surname.S,
    Country: NewImage.Country.S,
    City: NewImage.City.S,
    StateProvince: NewImage.StateProvince.S,
    PostalCode: NewImage.PostalCode.N,
    StreetLine1: NewImage.StreetLine1.S,
    StreetLine2: NewImage.StreetLine2.S,
    DateOfBirth: NewImage.DateOfBirth.M,
    FiatAmount: NewImage.FiatAmount.N,
    FiatCurrency: NewImage.FiatCurrency.S
  };
  return person;
}

const findTransaction = (event) => {
  if (event !== undefined) {
    if (event.body !== undefined) {
      return typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    }
    if (event.transaction !== undefined) {
      return typeof event.transaction === 'string' ? JSON.parse(event.transaction) : event.transaction;
    }
  }
  throw Error('Error: request is empty, nothing to work with.');
}

export const extractTransactionFromRequest = async (event) => {
  const requested = extractTransaction(findTransaction(event)) as TransactionRequest;
  validateRequiredFields(requested);
  return requested;
}

