import { CustomerWorker } from './operations';
import { dynamoDb, putQuery, updateQuery, dbQuery } from '../types/dbaccess.types';
import { RegisteredEntity, Customer, Person } from '../types/common.types';
import { uuid } from 'uuidv4';
import * as event from './validate.event.json';
import * as recordEvent from './record.event.json';
import { extractTransaction } from '../transaction';
import { extractTransactionFromDBEvent } from '../parser';
// import { extractTransaction, OperationResult } from '../main';

let byIdDb = {};
let byEmailDb = {};
let byHashId = {};

const hashed = (person: Person) => `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;

const saveInMock = (customer: RegisteredEntity<Customer>) => {
  byIdDb[customer.id] = customer;
  byEmailDb[customer.Email] = Array.isArray(byEmailDb[customer.Email]) ? [...new Set([customer, ...byEmailDb[customer.Email]])] : [customer];

  byHashId[hashed(customer)] = Array.isArray(byHashId[hashed(customer)]) ? [...new Set([customer, ...byHashId[hashed(customer)]])] : [customer];
}
const dbMock: dynamoDb<RegisteredEntity<Customer>> = {
  query: (props: dbQuery) => {
    return {
      promise: () => {
        let customer = props.IndexName === 'byEmail' ? byEmailDb[props.ExpressionAttributeValues[':a']] : byHashId[props.ExpressionAttributeValues[':a']];
        const items = customer ? customer : [];
        return {
          Items: items,
          Item: customer,
          Count: 0
        }
      }
    }
  },
  put: (props: putQuery<RegisteredEntity<Customer>>) => {
    return {
      promise: () => {
        saveInMock(props.Item);
        return {
          Items: [],
          Item: props.Item,
          Count: 0
        }
      }
    }
  },
  update: (props: updateQuery) => {
    return {
      promise: () => {
        const customer = byIdDb[props.Key.id];
        customer.Tier = props.ExpressionAttributeValues[':t'];
        customer.FiatDailyAmount = props.ExpressionAttributeValues[':d'];
        customer.FiatMonthlyAmount = props.ExpressionAttributeValues[':m'];

        saveInMock(customer);
        return {
          Items: [customer],
          Item: customer,
          Count: 0
        }
      }
    }
  }
}

describe('Customer worker', () => {
  let worker = CustomerWorker(dbMock, uuid);
  let transaction = extractTransaction(JSON.parse(event.body));

  beforeEach(() => {
    byIdDb = [];
    byEmailDb = [];
    byHashId = [];
    worker = CustomerWorker(dbMock, uuid);
    transaction = extractTransaction(JSON.parse(event.body));
  });

  it('Create customer in case person is unknown: KYC_Sate: Initiated, FiatDailyAmount: 0, FiatMonthlyAmount: 0, Tier: Low', async () => {
    const createCustomer = await worker.createCustomer(transaction) as RegisteredEntity<Customer>;
    expect(byIdDb[createCustomer.id]).toBeDefined();
    expect(createCustomer).not.toEqual(transaction);
    expect(createCustomer.KYC_State).toBe('Initiated');
    expect(createCustomer.Tier).toBe('Low');
    expect(createCustomer.FiatDailyAmount).toBe(0);
    expect(createCustomer.FiatMonthlyAmount).toBe(0);
    //expect that kyc check started
  });

  it('Register customer in case person is unknown: KYC_Sate: Initiated, FiatDailyAmount: 0, FiatMonthlyAmount: 0, Tier: Low', async () => {
    const customer = await worker.registerIfUnknown(transaction) as RegisteredEntity<Customer>;
    expect(byIdDb[customer.id]).toBeDefined();
    expect(customer).not.toEqual(transaction);
    expect(customer.KYC_State).toBe('Initiated');
    expect(customer.Tier).toBe('Low');
    expect(customer.FiatDailyAmount).toBe(0);
    expect(customer.FiatMonthlyAmount).toBe(0);
    //expect that kyc check started
  });

  it('Resolves customer in case it was already registered', async () => {
    const customer1 = { ...transaction };
    customer1.Email = customer1.Email + '_customer1';
    await worker.createCustomer(transaction);
    await worker.createCustomer(customer1);

    const customer = await worker.registerIfUnknown(transaction) as RegisteredEntity<Customer>;
    expect(byIdDb[customer.id]).toBeDefined();
    expect(customer).not.toEqual(transaction);
    expect(customer.KYC_State).toBe('Initiated');
    expect(customer.Tier).toBe('Low');
    expect(customer.FiatDailyAmount).toBe(0);
    expect(customer.FiatMonthlyAmount).toBe(0);
    expect(customer.Email).toBe(transaction.Email);
  });

  it('Resolves customer in case it was already registered - same hash different email', async () => {
    const customer1 = { ...transaction };
    customer1.Email = customer1.Email + '_customer1';
    await worker.createCustomer(transaction);
    await worker.createCustomer(customer1);

    const customer = await worker.registerIfUnknown(customer1) as RegisteredEntity<Customer>;
    expect(byIdDb[customer.id]).toBeDefined();
    expect(customer).not.toEqual(transaction);
    expect(customer.KYC_State).toBe('Initiated');
    expect(customer.Tier).toBe('Low');
    expect(customer.FiatDailyAmount).toBe(0);
    expect(customer.FiatMonthlyAmount).toBe(0);
    expect(customer.Email).toBe(customer1.Email);
  });

  it('Updates limits newly create customer', async () => {
    const payment = { ...transaction };
    const customer = await worker.createCustomer(transaction);
    const customer1 = { ...transaction };
    customer1.Email = customer1.Email + '_customer1';
    await worker.createCustomer(customer1);
    customer1.Email = customer1.Email + '_customer2';
    customer1.Firstname = customer1.Firstname + '_customer2'
    await worker.createCustomer(customer1);

    payment.FiatAmount = 117;
    await worker.updateCustomerLimits(customer as RegisteredEntity<Customer>, payment);
    const resolved = await worker.registerIfUnknown(transaction) as RegisteredEntity<Customer>;

    expect(resolved.KYC_State).toBe('Initiated');
    expect(resolved.Tier).toBe('Low');
    expect(resolved.FiatDailyAmount).toBe(117);
    expect(resolved.FiatMonthlyAmount).toBe(117);
    expect(resolved.Email).toBe(transaction.Email);
  });

  it('Updates existing customer', async () => {

    const payment = { ...transaction };
    const customer = await worker.createCustomer(transaction);
    const customer1 = { ...transaction };
    customer1.Email = customer1.Email + '_customer1';
    await worker.createCustomer(customer1);
    customer1.Email = customer1.Email + '_customer2';
    customer1.Firstname = customer1.Firstname + '_customer2'
    await worker.createCustomer(customer1);

    payment.FiatAmount = 100;
    await worker.updateCustomerLimits(customer as RegisteredEntity<Customer>, payment);
    payment.FiatAmount = 17;
    await worker.updateCustomerLimits(customer as RegisteredEntity<Customer>, payment);
    const resolved = await worker.registerIfUnknown(transaction) as RegisteredEntity<Customer>;

    expect(resolved.KYC_State).toBe('Initiated');
    expect(resolved.Tier).toBe('Low');
    expect(resolved.FiatDailyAmount).toBe(117);
    expect(resolved.FiatMonthlyAmount).toBe(117);
    expect(resolved.Email).toBe(transaction.Email);

  });

  it('Change customer tier in case of over limit: KYC-initiated', async () => {
    const record = extractTransactionFromDBEvent(recordEvent);
  });

  it('Change KYC state on changing tier', async () => {

  })

})

/**
 * Matching person to a customer case
 * 1. Several customers with same hash but different emails
 */

/**
 * 1. transaction with an unknown new person
 * --- person should be created
 * --- limits should be set at 0
 * --- KYC_Sate = unknown
 * --- [not implemented] KYC_State = Initiated
 * --- [not implemented] KYC validation started should be published as event
 * --- results ok
 *
 * 2. transaction with known user(KYC: = validated, limits are ok)
 * --- person resolved
 * --- limits calculated ok
 * --- result: ok
 *
 * 3. transaction with known user(KYC: != validated, limits are ok)
 * --- person resolved
 * --- limits calculated ok
 * --- result: ok
 *
 * 4. transaction with known user(KYC: = validated, limits are not ok)
 * --- Tier: level up
 * --- KYC_State: pending
 * --- results: ok
 *
 * 5. transaction with known user(KYC: != validated, limits are not ok)
 * --- result: not ok
 */