/**
 * Extract transaction from body
 * Extract person from transaction
 * Resolve customer 
 * -- if customer is unknown
 * -- ~~~ create new with low tire limit
 * -- ~~~ initiate KYC
 * Check customer KYC
 * Check customer limits
 */

import { TransactionRequest, RegisteredEntity, Transaction } from "../types/common.types";
import { dynamoDb } from "../types/dbaccess.types";
import { DBAccessResult } from "../types/response.types";
import { handleQueryError } from "../main";

const transactionsTbl = 'STTransactionStoreTbl-dev';

export const saveTransaction = (dynamo: dynamoDb<RegisteredEntity<Transaction>>) => async (transaction: RegisteredEntity<Transaction>): Promise<DBAccessResult<RegisteredEntity<Transaction>>> => {
  console.log('Saving transaction to db.');
  var params = {
    TableName: transactionsTbl,
    Item: transaction
  };
  try {
    var result = await dynamo.put(params).promise();
    console.log(`Item ${params.Item.id} stored successfully:\n`, result);
    return params.Item;
  } catch (error) {
    return handleQueryError(error);
  }
}

// export const registerTransaction


// TODO: provide additional checks
const isTransactionRequest = (arg: any): arg is TransactionRequest => {
  return (arg || {}).hasOwnProperty('Email') || (arg || {}).hasOwnProperty('email');
  // const tr = (arg as TransactionRequest);
  // return tr.email !== undefined;
}

const prepareTrRequest = (arg: any): TransactionRequest => {
  return arg as TransactionRequest;
  // return Object.fromEntries(Object.keys(arg).map(key => [key.charAt(0).toUpperCase() + key.slice(1), arg[key]])) as TransactionRequest;
}

export const extractTransaction = (message: any): TransactionRequest => {
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