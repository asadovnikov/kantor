export type DefaultDbError = 'ValidationException'
  | 'RequestLimitExceeded'
  | 'ValidationException'
  | 'ThrottlingException'
  | 'ServiceUnavailable'
  | 'ResourceNotFoundException'
  | 'ProvisionedThroughputExceededException'
  | 'UnrecognizedClientException'
  | 'InternalServerError'
  | 'ConditionalCheckFailedException'
  | 'TransactionConflictException'
  | 'ItemCollectionSizeLimitExceededException';
//AccessDeniedException
//IncompleteSignatureException
//MissingAuthenticationTokenException
//ResourceInUseException
//UnrecognizedClientException
export type DbErrorInfo = {
  code?: Falsy | DefaultDbError;
  message?: string;
}

export type Falsy = false | "" | 0 | null | undefined;
export const isFalsy = (val: unknown): val is Falsy => !val;

export type ResponseInfo = {
  code: number;
  message: string
  status: string
}

export type DbErrorsRegistry = Record<DefaultDbError, ResponseInfo & { logMessage: string }>;

export type DBAccessResult<T> = T | ResponseInfo;