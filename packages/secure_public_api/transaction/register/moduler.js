const isFalsy = (val) => !val;

// 2xx: Success - 	Indicates that the client’s request was accepted successfully.
const ServerFailed = {
    code: 500,
    status: 'Internal Server Error',
    message: 'The request was not completed due to an internal error on the server side.'
};

/**
 * build wrapper, that wraps all execution calls
 */
const messageStore = [];
const reportMessage = (message) => {
    messageStore.push(message);
};
const buildTrace = () => {
    return messageStore.map((message, index) => `${index}: ${message}`).join('\n');
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
    reportMessage('Handling db error');
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
const isCustomerOverLimit = (customer, amount) => {
    reportMessage('Check payment over tier limits');
    const limit = paymentLimits[customer.Tier];
    // TODO: Decide how to handle situation of FiatCurrency mismatch
    return isOverLimit(customer.Tier, {
        FiatDailyAmount: customer.FiatDailyAmount + amount.FiatAmount,
        FiatMonthlyAmount: customer.FiatMonthlyAmount + amount.FiatAmount,
        FiatCurrency: amount.FiatCurrency
    });
};
const isOverLimit = (tier, currentAmount) => {
    reportMessage('Check payment over tier limits');
    const limit = paymentLimits[tier];
    // TODO: Decide how to handle situation of FiatCurrency mismatch
    return !(currentAmount.FiatDailyAmount > limit.FiatDailyAmount || currentAmount.FiatMonthlyAmount > limit.FiatMonthlyAmount);
};
const selectAppropriateTier = (amount) => {
    reportMessage('Selecting suitable tier according to provided amount');
    if (amount.FiatCurrency !== paymentLimits[DefaultTier].FiatCurrency) {
        reportMessage('Found currency mismatch. [Not implemented yet]');
    }
    if (!isOverLimit('Low', amount)) {
        return 'Low';
    }
    if (isOverLimit('Medium', amount)) {
        return 'High';
    }
    if (isOverLimit('Low', amount)) {
        return 'Medium';
    }
    return 'High';
};
const DefaultTier = 'Low';

const DefaultKYCState = 'Initiated';
const kycCheck = (customer, payment) => {
    reportMessage('Performing KYC status check');
    if (customer.KYC_State === 'Validated' && isCustomerOverLimit(customer, payment)) {
        reportMessage('Moving KYC to pending state, due to possible tier level up. [Not implemented yet]');
        return true;
    }
    return isCustomerOverLimit(customer, payment);
};
/**
 * KYC steps for each tier
 *
 */

/**
 * in case of error
 * 1. Check error type
 *    a. Select response code
 *    b. Select response message
 *    c. do a log record
 *    d. publish sns topic
 * 2. In case everything is fine
 *    a. code is 200
 *    b. build response message
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Success"] = 200] = "Success";
    ResponseType[ResponseType["Failed"] = 500] = "Failed";
})(ResponseType || (ResponseType = {}));
const successResponse = (message) => {
    reportMessage(`Building success response`);
    return {
        code: 200,
        message: message,
        body: buildTrace()
    };
};
const errorResponse = (props) => {
};

const customersTable = 'STCustomerStoreTbl-dev2';
const buildHashKey = (person) => {
    return `#${person.Firstname.toLowerCase()}-#${person.Surname.toLowerCase()}`;
};
const resolveCustomerByEmail = (dynamo) => async (person) => {
    console.log('Performing customer query byEmail:');
    reportMessage('Performing customer query byEmail:');
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
        reportMessage(`Query successful. Found ${result.Count} items.`);
        return result.Items;
    }
    catch (err) {
        return handleQueryError(err);
    }
};
const lookupCustomers = (dynamo) => async (person) => {
    console.log('Performing customer query hashKey-index:');
    reportMessage('Performing customer query hashKey-index:');
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
        reportMessage(`Query successful. Found ${result.Count} items.`);
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
    return person.City.toLowerCase() === customer.City.toLowerCase() && person.Country.toLowerCase() === customer.Country.toLowerCase();
};
const matchCustomer = (person, customers) => {
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
    console.log('Step1: by Country and City');
    reportMessage('Doing person lookup by County and City');
    const step1 = customers.filter(customer => byCityCountry(person, customer));
    if (step1.length === 1) {
        return step1[0];
    }
    console.log('Step2: by Email or Phone');
    reportMessage('Doing person lookup by Email or phone');
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
    reportMessage('Registering a new customer');
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
const updateCustomerLimits = (dynamo) => async (customer, payment) => {
    console.log('Updating customer limits');
    reportMessage('Updating customer limits');
    const currentAmount = {
        FiatDailyAmount: customer.FiatDailyAmount + payment.FiatAmount,
        FiatMonthlyAmount: customer.FiatMonthlyAmount + payment.FiatAmount,
        FiatCurrency: payment.FiatCurrency
    };
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
    reportMessage('Validating customer transaction');
    // const today = customer.FiatDailyAmount + customer.FiatAmount;
    // const monthly = customer.FiatMonthlyAmount + customer.FiatAmount;
    const isAllowed = customer.KYC_State !== 'Validated' && isCustomerOverLimit(customer, customer);
    return {
        KYC: customer.KYC_State,
        Tier: customer.Tier,
        PaymentAllowed: isAllowed
    };
};
const registerIfUnknown = (dynamo) => async (person, id) => {
    reportMessage('Performing person lookup and creating a new one in case provided one is not registered');
    const customers = await lookupCustomers(dynamo)(person);
    if (Array.isArray(customers)) {
        const knownCustomer = matchCustomer(person, customers);
        if (knownCustomer === person) {
            const customer = await createCustomer(dynamo)(person, id);
            const message = successResponse(`A new customer was created: ${id}`);
            return {
                result: customer,
                ...message
            };
        }
        if (knownCustomer !== null) {
            const message = successResponse('Fine with a person, person already registered');
            return {
                result: knownCustomer,
                ...message
            };
        }
    }
    else {
        return {
            code: 500,
            message: 'Investigate logs, we have a problem',
            body: JSON.stringify(event)
        };
    }
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
const saveTransaction = (dynamo) => async (transaction, id) => {
    console.log('Saving transaction to db.');
    reportMessage('Saving transaction to db.');
    transaction.id = id;
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
    reportMessage('Extracting transaction from a message');
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

exports.helpers = { DefaultKYCState, ResponseType, buildHashKey, buildTrace, createCustomer, errorResponse, extractTransaction, kycCheck, lookupCustomers, matchCustomer, registerIfUnknown, reportMessage, resolveCustomerByEmail, saveTransaction, successResponse, updateCustomerLimits, validateCustomerTransaction };
//# sourceMappingURL=bundle.js.map
