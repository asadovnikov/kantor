import { Falsy, isFalsy, DbErrorInfo, ResponseInfo, DbErrorsRegistry } from "../types/response.types"
import { ServerFailed, FullSuccess } from "./httpResponseRegistry";
import { reportMessage } from "../operationlog";

const errorStore: DbErrorsRegistry = {
  'InternalServerError': {
    ...ServerFailed,
    logMessage: 'Internal Server Error, generally safe to retry with exponential back-off.'
  },
  'ProvisionedThroughputExceededException': {
    logMessage: `Request rate is too high. If you're using a custom retry strategy make sure to retry with exponential back-off.`
      + `Otherwise consider reducing frequency of requests or increasing provisioned capacity for your table or secondary index.`,
    ...ServerFailed
  },
  'ResourceNotFoundException': {
    logMessage: 'One of the tables was not found, verify table exists before retrying.',
    ...ServerFailed
  },
  'ServiceUnavailable': {
    logMessage: 'Had trouble reaching DynamoDB. generally safe to retry with exponential back-off.',
    ...ServerFailed
  },
  'ThrottlingException': {
    logMessage: 'Request denied due to throttling, generally safe to retry with exponential back-off.',
    ...ServerFailed
  },
  'UnrecognizedClientException': {
    logMessage: 'The request signature is incorrect most likely due to an invalid AWS access key ID or secret key, fix before retrying.',
    ...ServerFailed
  },
  'ValidationException': {
    logMessage: 'The input fails to satisfy the constraints specified by DynamoDB, fix input before retrying.',
    ...ServerFailed
  },
  'RequestLimitExceeded': {
    logMessage: 'Throughput exceeds the current throughput limit for your account, increase account level throughput before retrying.',
    ...ServerFailed
  },
  'ConditionalCheckFailedException': {
    logMessage: 'Condition check specified in the operation failed, review and update the condition check before retrying.',
    ...ServerFailed
  },
  'TransactionConflictException': {
    logMessage: 'Operation was rejected because there is an ongoing transaction for the item, generally safe to retry with exponential back-off.',
    ...ServerFailed
  },
  'ItemCollectionSizeLimitExceededException': {
    logMessage: `An item collection is too large, you're using Local Secondary Index and exceeded size limit of items per partition key. Consider using Global Secondary Index instead.`,
    ...ServerFailed
  }
}

export const handleQueryError = (err: DbErrorInfo | Falsy): ResponseInfo => {
  reportMessage('Handling db error');
  if (isFalsy(err)) {
    console.error('Encountered error object was empty');
    return ServerFailed;
  }
  if (isFalsy(err.code)) {
    console.error(`An exception occurred, investigate and configure retry strategy. Error: ${JSON.stringify(err)}`);
  }
  return handleCommonErrors(err);
}

const handleCommonErrors = (err: DbErrorInfo): ResponseInfo => {
  if (err.code in errorStore) {
    const errInfo = errorStore[err.code as string];
    console.error(`${errInfo.logMessage} Error: ${err.message}`);
    return errInfo;
  }
  console.error(`An exception occurred, investigate and configure retry strategy. Error: ${err.message}`);
  return ServerFailed;
}