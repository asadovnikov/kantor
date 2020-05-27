import { Person, RegisteredEntity, Customer, FiatPayment, ValidationResult } from "../types/common.types";
import { dynamoDb } from "../types/dbaccess.types";
import { DBAccessResult } from "../types/response.types";
import { handleQueryError } from "../validation/DbErrors";
import { DefaultTier, isOverLimit } from "../validation/limits";
import { DefaultKYCState } from "../kyc";

const customersTable = 'STCustomerStoreTbl-dev';

export const buildHashKey = (person: Person) => {
  return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
}

export const resolveCustomerByEmail = (dynamo: dynamoDb<RegisteredEntity<Customer>>) => async (person: Person): Promise<DBAccessResult<RegisteredEntity<Customer>[]>> => {
  console.log('Performing customer query byEmail:');
  const query = {
    TableName: customersTable,
    IndexName: 'byEmail',
    KeyConditionExpression: 'Email = :a',
    ExpressionAttributeValues: {
      ':a': person.Email
    }
  }

  try {
    const result = await dynamo.query(query).promise();
    console.log(`Query successful. Found ${result.Count} items.\nQuery:\n`, query);
    return result.Items;
  }
  catch (err) {
    return handleQueryError(err);
  }
}

export const lookupCustomers = (dynamo: dynamoDb<RegisteredEntity<Customer>>) => async (person: Person): Promise<DBAccessResult<RegisteredEntity<Customer>[]>> => {
  console.log('Performing customer query hashKey-index:');
  const query = {
    TableName: customersTable,
    IndexName: 'hashKey-index',
    KeyConditionExpression: 'hashKey = :a',
    ExpressionAttributeValues: {
      ':a': buildHashKey(person)
    }
  }
  try {
    const result = await dynamo.query(query).promise();
    console.log(`Query successful. Found ${result.Count} items.\nQuery:\n`, query);
    return result.Items;
  }
  catch (err) {
    return handleQueryError(err);
  }
}

const byContacts = (person: Person, customer: Customer) => {
  // TODO: provide more exact and presides algorithm
  return person.Email.toLowerCase() === customer.Email.toLowerCase() || customer.Telephone.toLowerCase() === person.Telephone.toLowerCase();
}

const byCityCountry = (person: Person, customer: Customer) => {
  return person.City.toLowerCase() === customer.City.toLowerCase() && person.Country.toLowerCase() === person.Country.toLowerCase();
}

export const matchCustomer = (person: Person, customers: RegisteredEntity<Customer>[]): Customer | Person | null => {
  console.log('Performing matching of found customers to provided person.\n', JSON.stringify(customers || []));
  if (customers === undefined || customers.length === 0) {
    console.log('Nothing to compare with provided person. We should create a new one.\n', JSON.stringify(person));
    return person;
  }

  if (customers.length === 1) {
    console.log('Easy job, only one customer is provided.\n', JSON.stringify(customers));
    return customers[0];
  }
  console.log('Step1: by Country and City');
  const step1 = customers.filter(customer => byCityCountry(person, customer));
  if (step1.length === 1) {
    return step1[0];
  }

  console.log('Step2: by Email or Phone');
  const step2 = step1.filter(customer => byContacts(person, customer));
  if (step2.length === 1) {
    return step2[0];
  }
  // if (step2.length > 1) {
  //   return person;
  // }

  console.log('We should fail here, but I\'m to fucking tired to handle exception tree');
  return null;
}

export const createCustomer = (dynamo: dynamoDb<RegisteredEntity<Customer>>) => async (person: Person & FiatPayment, id: string): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
  console.log('Registering new customer');
  const { FiatAmount, ...rest } = person;
  const putQuery = {
    TableName: customersTable,
    Item: {
      id: id,
      hashKey: buildHashKey(person),
      Tier: DefaultTier,
      KYC_State: DefaultKYCState,
      FiatDailyAmount: 0,
      FiatMonthlyAmount: 0,
      ...rest
    }
  }
  try {
    const result = await dynamo.put(putQuery).promise();
    console.log(`Item ${putQuery.Item.id} stored successfully:\n`, result);
    return putQuery.Item;
  }
  catch (err) {
    return handleQueryError(err);
  }
}

export const updateCustomerLimits = (dynamo: dynamoDb<RegisteredEntity<Customer>>) => async (customer: RegisteredEntity<Customer> & FiatPayment): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
  console.log('Updating customer limits');
  // TODO: check limits and update tier if needed
  const updateQuery = {
    TableName: customersTable,
    Key: { id: customer.id, Email: customer.Email },
    UpdateExpression: 'SET Tier = :t, FiatDayAmount = :d, FiatMonthAmount = :m',
    ExpressionAttributeValues: {
      ':t': customer.Tier,
      ':d': customer.FiatDailyAmount,
      ':m': customer.FiatMonthlyAmount
    }
  }
  try {
    const result = await dynamo.update(updateQuery).promise();
    console.info('Successfully updated item.\n', result);
    return customer;
  }
  catch (err) {
    return handleQueryError(err);
  }
}

export const validateCustomerTransaction = (customer: RegisteredEntity<Customer> & FiatPayment): ValidationResult => {
  // TODO: provide logs
  // TODO: block payment in case of over-limit and KYC check not passed
  // TODO: If KYC was passed before but over-limit occurs a tier level-up should be initiated
  const today = customer.FiatDailyAmount + customer.FiatAmount;
  const monthly = customer.FiatMonthlyAmount + customer.FiatAmount;
  const isAllowed = customer.KYC_State !== 'Validated' && isOverLimit(customer.Tier, {
    FiatDailyAmount: today,
    FiatMonthlyAmount: monthly,
    FiatCurrency: customer.FiatCurrency
  })
  return {
    KYC: customer.KYC_State,
    Tier: customer.Tier,
    PaymentAllowed: isAllowed
  }
}