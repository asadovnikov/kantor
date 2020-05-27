/*! 0.0.1 */
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

const customersTable = 'STCustomerStoreTbl-dev';
const resolveCustomer = (dynamo) => async (person) => {
    console.log('Performing customer lookup');
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
const createCustomer = (dynamo) => async (person, id) => {
    console.log('Registering new customer');
    const { FiatAmount, ...rest } = person;
    const putQuery = {
        TableName: customersTable,
        Item: {
            id: id,
            Tier: 'High',
            KYC_State: 'unknown',
            FiatDailyAmount: FiatAmount,
            FiatMonthlyAmount: FiatAmount,
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

exports.helpers = { createCustomer, extractTransaction, handleQueryError, resolveCustomer, updateCustomerLimits };
//# sourceMappingURL=bundle.js.map
