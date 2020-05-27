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

const paymentLimits = {
    'Low': {
        FiatDailyAmount: 1000,
        FiatMonthlyAmount: 20000,
        FiatCurrency: 'EUR'
    },
    'Medium': {
        FiatDailyAmount: 5000,
        FiatMonthlyAmount: 100000,
        FiatCurrency: 'EUR'
    },
    'High': {
        FiatDailyAmount: 20000,
        FiatMonthlyAmount: 300000,
        FiatCurrency: 'EUR'
    }
};
const isOverLimit = (tier, currentAmount) => {
    const limit = paymentLimits[tier];
    // TODO: Decide how to handle situation of FiatCurrency mismatch
    return currentAmount.FiatDailyAmount > limit.FiatDailyAmount || currentAmount.FiatMonthlyAmount > limit.FiatMonthlyAmount;
};
const DefaultTier = 'Low';

const DefaultKYCState = 'Initiated';
/**
 * KYC steps for each tier
 *
 */

const customersTable = 'STCustomerStoreTbl-dev';
const buildHashKey = (person) => {
    return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
};
const resolveCustomerByEmail = (dynamo) => async (person) => {
    console.log('Performing customer query byEmail:');
    const query = {
        TableName: customersTable,
        IndexName: 'byEmail',
        KeyConditionExpression: 'Email = :a',
        ExpressionAttributeValues: {
            ':a': person.Email
        }
    };
    try {
        const result = await dynamo.query(query).promise();
        console.log(`Query successful. Found ${result.Count} items.\nQuery:\n`, query);
        return result.Items;
    }
    catch (err) {
        return handleQueryError(err);
    }
};
const lookupCustomers = (dynamo) => async (person) => {
    console.log('Performing customer query hashKey-index:');
    const query = {
        TableName: customersTable,
        IndexName: 'hashKey-index',
        KeyConditionExpression: 'hashKey = :a',
        ExpressionAttributeValues: {
            ':a': buildHashKey(person)
        }
    };
    try {
        const result = await dynamo.query(query).promise();
        console.log(`Query successful. Found ${result.Count} items.\nQuery:\n`, query);
        return result.Items;
    }
    catch (err) {
        return handleQueryError(err);
    }
};
const byContacts = (person, customer) => {
    // TODO: provide more exact and presides algorithm
    return person.Email.toLowerCase() === customer.Email.toLowerCase() || customer.Telephone.toLowerCase() === person.Telephone.toLowerCase();
};
const byCityCountry = (person, customer) => {
    return person.City.toLowerCase() === customer.City.toLowerCase() && person.Country.toLowerCase() === person.Country.toLowerCase();
};
const matchCustomer = (person, customers) => {
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
};
const createCustomer = (dynamo) => async (person, id) => {
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
const updateCustomerLimits = (dynamo) => async (customer) => {
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
    };
    try {
        const result = await dynamo.update(updateQuery).promise();
        console.info('Successfully updated item.\n', result);
        return customer;
    }
    catch (err) {
        return handleQueryError(err);
    }
};
const validateCustomerTransaction = (customer) => {
    // TODO: provide logs
    // TODO: block payment in case of over-limit and KYC check not passed
    // TODO: If KYC was passed before but over-limit occurs a tier level-up should be initiated
    const today = customer.FiatDailyAmount + customer.FiatAmount;
    const monthly = customer.FiatMonthlyAmount + customer.FiatAmount;
    const isAllowed = customer.KYC_State !== 'Validated' && isOverLimit(customer.Tier, {
        FiatDailyAmount: today,
        FiatMonthlyAmount: monthly,
        FiatCurrency: customer.FiatCurrency
    });
    return {
        KYC: customer.KYC_State,
        Tier: customer.Tier,
        PaymentAllowed: isAllowed
    };
};

/**
 * Extract transaction from body
 * Extract person from transaction
 * Resolve customer
 * -- if customer is unknown
 * -- ~~~ create new with low tire limit
 * -- ~~~ initiate KYC
 * Check customer KYC
 * Check customer limits
 */
const transactionsTbl = 'STTransactionStoreTbl-dev';
const saveTransaction = (dynamo) => async (transaction) => {
    console.log('Saving transaction to db.');
    var params = {
        TableName: transactionsTbl,
        Item: transaction
    };
    try {
        var result = await dynamo.put(params).promise();
        console.log(`Item ${params.Item.id} stored successfully:\n`, result);
        return params.Item;
    }
    catch (error) {
        return handleQueryError(error);
    }
};
// export const registerTransaction
// TODO: provide additional checks
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

exports.helpers = { buildHashKey, createCustomer, extractTransaction, handleQueryError, lookupCustomers, matchCustomer, resolveCustomerByEmail, saveTransaction, updateCustomerLimits, validateCustomerTransaction };
//# sourceMappingURL=bundle.js.map
