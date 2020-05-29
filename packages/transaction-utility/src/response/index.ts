/**
 * in case of error
 * 1. Check error type
 *    a. Select response code
 *    b. Select response message
 *    c. do a log record
 *    d. publish sns topic
 * 2. In case everything is fine
 *    a. code is 200
 *    b. build response message
 */

import { buildTrace, reportMessage } from '../operationlog';

export type ErrorType = 'InvalidInput';

export enum ResponseType {
  Success = 200,
  Failed = 500
}

export type APIResponse = {
  code: number;
  message: string;
  body?: string;
}

export type OperationResult<T> = {
  code: number;
  message?: string;
  body?: string;
  result?: T;
}

export const successResponse = (message: string): APIResponse => {
  reportMessage(`Building success response`);
  return {
    code: 200,
    message: message,
    body: buildTrace()
  }
}

export const errorResponse = (props: APIResponse) => {

}