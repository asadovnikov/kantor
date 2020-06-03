//parse received event
//parse received db event
const validateRequiredFields = (request) => {
    const missingFields = [];
    if (request.City === undefined) {
        missingFields.push('City');
    }
    if (request.PostalCode === undefined) {
        missingFields.push('PostalCode');
    }
    if (request.Country === undefined) {
        missingFields.push('Country');
    }
    if (request.StateProvince === undefined) {
        missingFields.push('StateProvince');
    }
    if (request.Firstname === undefined) {
        missingFields.push('Firstname');
    }
    if (request.Surname === undefined) {
        missingFields.push('Surname');
    }
    if (request.Email === undefined) {
        missingFields.push('Email');
    }
    if (request.StreetLine1 === undefined) {
        missingFields.push('StreetLine1');
    }
    if (request.FiatAmount === undefined) {
        missingFields.push('FiatAmount');
    }
    if (request.FiatCurrency === undefined) {
        missingFields.push('FiatCurrency');
    }
    if (missingFields.length > 0) {
        throw Error(`ERROR: Next fields are missing: ${missingFields.join('\n')}`);
    }
};
const isTransactionRequest = (arg) => {
    return (arg || {}).hasOwnProperty('Email') || (arg || {}).hasOwnProperty('email');
    // const tr = (arg as TransactionRequest);
    // return tr.email !== undefined;
};
const prepareTrRequest = (arg) => {
    return arg;
    // return Object.fromEntries(Object.keys(arg).map(key => [key.charAt(0).toUpperCase() + key.slice(1), arg[key]])) as TransactionRequest;
};
const extractTransaction = (message) => {
    // reportMessage('Extracting transaction from a message');
    if (isTransactionRequest(message)) {
        return prepareTrRequest(message);
    }
    if (message.transaction !== undefined) {
        if (isTransactionRequest(message.transaction)) {
            return prepareTrRequest(message.transaction);
        }
    }
    if (message.body !== undefined) {
        if (isTransactionRequest(message.body)) {
            return prepareTrRequest(message.body);
        }
        if (message.body.transaction !== undefined) {
            if (isTransactionRequest(message.body.transaction)) {
                return prepareTrRequest(message.body.transaction);
            }
        }
    }
    throw new Error('Failed extracting transaction details');
};
const extractTransactionFromDBEvent = (dbevent) => {
    const { NewImage } = typeof dbevent === 'string' ? JSON.parse(dbevent) : dbevent;
    const person = {
        Email: NewImage.Email.S,
        Firstname: NewImage.Firstname.S,
        Surname: NewImage.Surname.S,
        Country: NewImage.Country.S,
        City: NewImage.City.S,
        StateProvince: NewImage.StateProvince.S,
        PostalCode: NewImage.PostalCode.N,
        StreetLine1: NewImage.StreetLine1.S,
        StreetLine2: NewImage.StreetLine2.S,
        DateOfBirth: NewImage.DateOfBirth.M,
        FiatAmount: NewImage.FiatAmount.N,
        FiatCurrency: NewImage.FiatCurrency.S
    };
    return person;
};
const findTransaction = (event) => {
    if (event !== undefined) {
        if (event.body !== undefined) {
            return typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        }
        if (event.transaction !== undefined) {
            return typeof event.transaction === 'string' ? JSON.parse(event.transaction) : event.transaction;
        }
    }
    throw Error('Error: request is empty, nothing to work with.');
};
const extractTransactionFromRequest = async (event) => {
    const requested = extractTransaction(findTransaction(event));
    validateRequiredFields(requested);
    return requested;
};

const isFalsy = (val) => !val;

// 2xx: Success - 	Indicates that the client’s request was accepted successfully.
const ServerFailed = {
    code: 500,
    status: 'Internal Server Error',
    message: 'The request was not completed due to an internal error on the server side.'
};

const errorStore = {
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
};
const handleQueryError = (err) => {
    if (isFalsy(err)) {
        console.error('Encountered error object was empty');
        return ServerFailed;
    }
    if (isFalsy(err.code)) {
        console.error(`An exception occurred, investigate and configure retry strategy. Error: ${JSON.stringify(err)}`);
    }
    return handleCommonErrors(err);
};
const handleCommonErrors = (err) => {
    if (err.code in errorStore) {
        const errInfo = errorStore[err.code];
        console.error(`${errInfo.logMessage} Error: ${err.message}`);
        return errInfo;
    }
    console.error(`An exception occurred, investigate and configure retry strategy. Error: ${err.message}`);
    return ServerFailed;
};

const DefaultTier = 'Low';

const DefaultKYCState = 'Initiated';
/**
 * KYC steps for each tier
 *
 */

// import { reportMessage } from "../operationlog";
const CustomerWorker = (dynamo, customersTable, id_gen) => {
    const buildHashKey = (person) => {
        return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
    };
    const tableScanQuery = (key, value) => {
        return {
            TableName: customersTable,
            FilterExpression: `${key} = :a`,
            ExpressionAttributeValues: {
                ':a': value
            }
        };
    };
    const scanCustomerByEmail = async (person) => {
        console.log('Performing customer query byEmail:');
        try {
            const result = await dynamo.scan(tableScanQuery('Email', person.Email)).promise();
            console.log(`Query successful. Found ${result.Count} items.`);
            return result.Items;
        }
        catch (err) {
            return handleQueryError(err);
        }
    };
    const createCustomer = async (person, verificationId) => {
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
        };
        try {
            const result = await dynamo.put(putQuery).promise();
            console.log(`Item ${putQuery.Item.id} stored successfully:\n`, result);
            return putQuery.Item;
        }
        catch (err) {
            return handleQueryError(err);
        }
    };
    return { scanCustomerByEmail, createCustomer };
};

const KYCVerificationWorker = (dynamo, VerificationTable, id_gen) => {
    // const customersTable = 'STCustomerStoreTbl-dev';
    const createVerificationRecord = async () => {
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
        };
        try {
            const result = await dynamo.put(putQuery).promise();
            console.log(`Item ${putQuery.Item.id} stored successfully:\n`, result);
            return putQuery.Item;
        }
        catch (err) {
            return handleQueryError(err);
        }
    };
    // return { resolveCustomerByEmail, resolveCustomerByFirstLastName, registerIfUnknown, createCustomer, validateCustomerTransaction, updateCustomerLimits }
    return { createVerificationRecord };
};

exports.helpers = { CustomerWorker, KYCVerificationWorker, extractTransactionFromDBEvent, extractTransactionFromRequest };
//# sourceMappingURL=bundle.js.map
