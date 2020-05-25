'use strict';

// var AWS = require('aws-sdk');
// var publisher = new AWS.Sns();
// const WARNING_TOPIC_ARN = process.env.WARNING_TOPIC_ARN;

exports.mapCustomer = async (event) => {
  console.log('MapCustomer received an event:\n', event);
  const { customers, transaction } = event;

  if (customers.length === 1) {
    console.log('MapCustomer received unique customer:\n', customers[0]);
    return customers[0];
  }
  console.log('Narrow down by Firstname and Surname');
  let limited = customers.filter(record => {
    return record['Firstname'] === transaction['Firstname'] && record['Surname'] === transaction['Surname'];
  });
  if (limited.length === 1) {
    console.log('Successfully matched by Firstname and Surname');
    return limited[0];
  }
  console.log('Narrow down by Country, City, StateProvince and PostalCode');
  limited = customers.filter(record => {
    return record['Country'] === transaction['Country'] && record['City'] === transaction['City'] && record['StateProvince'] === transaction['StateProvince'] && record['PostalCode'] === transaction['PostalCode'];
  });
  if (limited.length === 1) {
    console.log('Successfully matched by Country, City, StateProvince and PostalCode');
    return limited[0];
  }
  if (limited.length === 0) {
    throw `Unable to match received customers ${customers.map(customer => JSON.stringify(customer)).join('\n')} with the one mentioned in transaction: ${JSON.stringify(transaction)}`;
  }
  console.log('Unable to match customer with transaction\n', event);
  return limited[0];
  // const message = {
  //   Message: 'Unable to match customer with transaction'
  //   TopicArn: WARNING_TOPIC_ARN,
  //   MessageAttributes:{
  //     transaction: {
  //       DataType: 'String',
  //       StringValue: JSON.stringify(event)
  //     }
  //   }
  // }
  // await publisher.publish(message).promise();
}