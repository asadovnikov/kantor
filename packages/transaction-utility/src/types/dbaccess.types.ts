export type dynamoDb<T> = {
  query: dbRequest<T>;
  put: dbRequest<T>;
  update: dbRequest<T>;
  scan: dbRequest<T>;
}

export type scanQuery = {
  TableName: string,
  FilterExpression: string,
  ExpressionAttributeValues: any
}

export type dbQuery = {
  TableName: string,
  IndexName: string,
  KeyConditionExpression: string,
  ExpressionAttributeValues: any
}

export type putQuery<T> = {
  TableName: string,
  Item: T,
}

export type updateQuery = {
  TableName: string,
  Key: any,
  UpdateExpression: string,
  ExpressionAttributeValues: any
}

export type resolver<T> = { promise: () => { Items: T[], Count: number, Item: T } };

export type dbRequest<T> = (props: dbQuery | putQuery<T> | updateQuery | scanQuery) => resolver<T>;

