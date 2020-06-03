import { dynamoDb } from "../types/dbaccess.types";
import { RegisteredEntity, KYCVerification } from "../types/common.types";
import { DBAccessResult } from "../types/response.types";
import { handleQueryError } from "../validation/DbErrors";


export const KYCVerificationWorker = (dynamo: dynamoDb<RegisteredEntity<KYCVerification>>, VerificationTable: string, id_gen: () => string) => {
  // const customersTable = 'STCustomerStoreTbl-dev';

  const createVerificationRecord = async (): Promise<DBAccessResult<RegisteredEntity<KYCVerification>>> => {
    console.log('Creating kyc verification customer');
    const putQuery = {
      TableName: VerificationTable,
      Item: {
        id: id_gen(),
        idVerification: 'NOT_REQUIRED',
        poaVerification: 'NOT_REQUIRED',
        financeVerification: 'NOT_REQUIRED',
        createdOn: new Date().toISOString(),
        updatedOn: new Date().toISOString()
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

  // return { resolveCustomerByEmail, resolveCustomerByFirstLastName, registerIfUnknown, createCustomer, validateCustomerTransaction, updateCustomerLimits }
  return { createVerificationRecord };
}