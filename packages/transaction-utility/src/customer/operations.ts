import { dynamoDb } from "../types/dbaccess.types";
import { RegisteredEntity, Customer, Person, FiatPayment, FiatAmount, ValidationResult, KYCState } from "../types/common.types";
import { DBAccessResult } from "../types/response.types";
import { reportMessage } from "../operationlog";
import { handleQueryError } from "../validation/DbErrors";
import { DefaultKYCState } from "../kyc";
import { DefaultTier, selectAppropriateTier, isCustomerOverLimit } from "../validation/limits";
import { OperationResult, successResponse } from "../response";

export const CustomerWorker = (dynamo: dynamoDb<RegisteredEntity<Customer>>, id_gen: () => string) => {
  const customersTable = 'STCustomerStoreTbl-dev';

  const buildHashKey = (person: Person) => {
    return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
  }

  const byContacts = (person: Person, customer: Customer) => {
    return person.Email.toLowerCase() === customer.Email.toLowerCase() && customer.Telephone.toLowerCase() === person.Telephone.toLowerCase();
  }

  const byCityCountry = (person: Person, customer: Customer) => {
    return person.City.toLowerCase() === customer.City.toLowerCase() && person.Country.toLowerCase() === customer.Country.toLowerCase();
  }

  const lookupQuery = (key: string, value: string) => {
    return {
      TableName: customersTable,
      IndexName: key === 'Email' ? 'byEmail' : 'hashKey-index',
      KeyConditionExpression: `key = :a`,
      ExpressionAttributeValues: {
        ':a': value
      }
    }
  }

  const resolveCustomerByEmail = async (person: Person): Promise<DBAccessResult<RegisteredEntity<Customer>[]>> => {
    console.log('Performing customer query byEmail:');
    reportMessage('Performing customer query byEmail:')
    try {
      const result = await dynamo.query(lookupQuery('Email', person.Email.toLowerCase())).promise();
      reportMessage(`Query successful. Found ${result.Count} items.`);
      return result.Items;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const resolveCustomerByFirstLastName = async (person: Person): Promise<DBAccessResult<RegisteredEntity<Customer>[]>> => {
    console.log('Performing customer query hashKey-index:');
    reportMessage('Performing customer query hashKey-index:');
    try {
      const result = await dynamo.query(lookupQuery('hashKey', buildHashKey(person))).promise();
      reportMessage(`Query successful. Found ${result.Count} items.`);
      return result.Items;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const matchCustomer = (person: Person, customers: RegisteredEntity<Customer>[]): Customer | Person | null => {
    reportMessage('Performing matching of found customers against provided person.');
    console.log('Performing matching of found customers to provided person.\n', JSON.stringify(customers || []));

    if (customers === undefined || customers.length === 0) {
      console.log('Nothing to compare with provided person. We should create a new one.\n', JSON.stringify(person));
      return person;
    }

    if (customers.length === 1) {
      console.log('Easy job, only one customer is provided.\n', JSON.stringify(customers));
      return customers[0];
    }
    reportMessage('Step1: Doing person lookup by County and City');
    const step1 = customers.filter(customer => byCityCountry(person, customer));
    if (step1.length === 1) {
      return step1[0];
    }
    reportMessage('Step2: Doing person lookup by Email or phone');
    const step2 = step1.filter(customer => byContacts(person, customer));
    if (step2.length === 1) {
      return step2[0];
    }
    else {
      return person; // Should create a new one
    }

    console.log('We should fail here, but I\'m to fucking tired to handle exception tree');
    return null;
  }

  const createCustomer = async (person: Person & FiatPayment): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
    console.log('Registering new customer');
    reportMessage('Registering a new customer');
    const { FiatAmount, ...rest } = person;
    const putQuery = {
      TableName: customersTable,
      Item: {
        id: id_gen(),
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
      reportMessage(`Customer: ${putQuery.Item.id} stored successfully.`);
      return putQuery.Item;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const updateCustomerKyc = async (customer: RegisteredEntity<Customer>, kyc: KYCState): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
    console.log('Updating customer KYC');
    reportMessage('Updating customer KYC');

    const updateQuery = {
      TableName: customersTable,
      Key: { id: customer.id, Email: customer.Email },
      UpdateExpression: 'SET KYC_State = :k',
      ExpressionAttributeValues: {
        ':k': kyc
      }
    }
    try {
      const result = await dynamo.update(updateQuery).promise();
      reportMessage(`Customer id(${customer.id}) email(${customer.Email}) fields has been updated → Kyc: ${kyc}`);
      console.info('Successfully updated item.\n', result);
      return customer;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const updateCustomerLimits = async (customer: RegisteredEntity<Customer>, payment: FiatPayment): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
    console.log('Updating customer limits');
    reportMessage('Updating customer limits');
    const currentAmount: FiatAmount = {
      FiatDailyAmount: customer.FiatDailyAmount + payment.FiatAmount,
      FiatMonthlyAmount: customer.FiatMonthlyAmount + payment.FiatAmount,
      FiatCurrency: payment.FiatCurrency
    }

    const tier = selectAppropriateTier(currentAmount);
    if (tier !== customer.Tier) {
      reportMessage('A new tier should be applied. [Not implemented yet]');
    }
    // TODO: check limits and update tier if needed
    const updateQuery = {
      TableName: customersTable,
      Key: { id: customer.id, Email: customer.Email },
      UpdateExpression: 'SET Tier = :t, FiatDailyAmount = :d, FiatMonthlyAmount = :m',
      ExpressionAttributeValues: {
        ':t': tier,
        ':d': currentAmount.FiatDailyAmount,
        ':m': currentAmount.FiatMonthlyAmount
      }
    }
    try {
      const result = await dynamo.update(updateQuery).promise();
      reportMessage(`Customer id(${customer.id}) email(${customer.Email}) fields has been updated → Tier: ${tier} DailyAmount: ${currentAmount.FiatDailyAmount} MonthlyAmount: ${currentAmount.FiatMonthlyAmount}`);
      console.info('Successfully updated item.\n', result);
      return customer;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const validateCustomerTransaction = (customer: RegisteredEntity<Customer> & FiatPayment): ValidationResult => {
    // TODO: provide logs
    // TODO: block payment in case of over-limit and KYC check not passed
    // TODO: If KYC was passed before but over-limit occurs a tier level-up should be initiated
    reportMessage('Validating customer transaction');
    // const today = customer.FiatDailyAmount + customer.FiatAmount;
    // const monthly = customer.FiatMonthlyAmount + customer.FiatAmount;
    const isAllowed = customer.KYC_State !== 'Validated' && isCustomerOverLimit(customer, customer);
    return {
      KYC: customer.KYC_State,
      Tier: customer.Tier,
      PaymentAllowed: isAllowed
    }
  }

  const registerIfUnknown = async (person: Person & FiatPayment): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
    reportMessage('Performing person lookup and creating a new one in case provided one is not registered');
    const customers = await resolveCustomerByFirstLastName(person);
    if (Array.isArray(customers)) {
      const knownCustomer = matchCustomer(person, customers);
      if (knownCustomer === person) {
        const customer = await createCustomer(person);
        return customer;
      }
      if (knownCustomer !== null) {
        const message = successResponse('Fine with a person, person already registered');
        return knownCustomer as RegisteredEntity<Customer>;
      }
    }
    throw Error('Shit happens');
  }

  return { resolveCustomerByEmail, resolveCustomerByFirstLastName, registerIfUnknown, createCustomer, validateCustomerTransaction, updateCustomerLimits }

}