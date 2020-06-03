import { dynamoDb } from "../types/dbaccess.types";
import { RegisteredEntity, Customer, Person, FiatPayment } from "../types/common.types";
import { DBAccessResult } from "../types/response.types";
// import { reportMessage } from "../operationlog";
import { handleQueryError } from "../validation/DbErrors";
import { DefaultKYCState } from "../kyc";
import { DefaultTier } from "../validation/limits";

export const CustomerWorker = (dynamo: dynamoDb<RegisteredEntity<Customer>>, customersTable: string, id_gen: () => string) => {
  const buildHashKey = (person: Person) => {
    return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
  }

  const tableScanQuery = (key: string, value: string) => {
    return {
      TableName: customersTable,
      FilterExpression: `${key} = :a`,
      ExpressionAttributeValues: {
        ':a': value
      }
    }
  }

  const scanCustomerByEmail = async (person: Person): Promise<DBAccessResult<RegisteredEntity<Customer>[]>> => {
    console.log('Performing customer query byEmail:');
    try {
      const result = await dynamo.scan(tableScanQuery('Email', person.Email)).promise();
      console.log(`Query successful. Found ${result.Count} items.`);
      return result.Items;
    }
    catch (err) {
      return handleQueryError(err);
    }
  }

  const createCustomer = async (person: Person & FiatPayment, verificationId: string): Promise<DBAccessResult<RegisteredEntity<Customer>>> => {
    console.log('Registering new customer');
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
        KYCVerification: verificationId,
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
  return { scanCustomerByEmail, createCustomer };
}