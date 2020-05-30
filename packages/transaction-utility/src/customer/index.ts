import { CustomerWorker } from './operations';
import { dynamoDb } from '../types/dbaccess.types';
import { RegisteredEntity, Customer } from '../types/common.types';
import { extractTransaction } from '../transaction';

export const validateTransactionRequest = (dynamo: dynamoDb<RegisteredEntity<Customer>>, event: any, idgen: () => string) => {
  const transaction = extractTransaction(event.body !== undefined ? JSON.parse(event.body) : event);
}