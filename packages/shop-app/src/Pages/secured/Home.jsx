import React, { useEffect, useState } from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import gql from 'graphql-tag';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../..//graphql/queries';
import { appClient } from '../../client';
import { Tabs, List, Typography } from 'antd';

const { TabPane } = Tabs;

function HomePage() {
  const [paymentRequests, setPaymentRequests] = useState([]);
  const [registeredTransactions, setRegisteredTransactions] = useState([]);
  const [recordedUsers, setRecordedUsers] = useState([]);
  useEffect(
    () => {
      // debugger;
      appClient.query({
        query: gql(queries.listPaymentRequests)
      }).then(({ data: { listPaymentRequests } }) => {
        setPaymentRequests(listPaymentRequests.items);
      });

      appClient.query({
        query: gql(queries.listCustomers)
      }).then(({ data: { listCustomers } }) => {
        setRecordedUsers(listCustomers.items);
      });

      appClient.query({
        query: gql(queries.listTransactions)
      }).then(({ data: { listTransactions } }) => {
        setRegisteredTransactions(listTransactions.items);
      });
    }
  );


  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab="Users" key="1">
        <List
          header={<div>Registered users</div>}
          bordered
          dataSource={recordedUsers}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Requests" key="2">
        <List
          header={<div>Received payment validation requests</div>}
          bordered
          dataSource={paymentRequests}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Transactions" key="3">
        <List
          header={<div>Committed transactions</div>}
          bordered
          dataSource={registeredTransactions}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </TabPane>
    </Tabs>
  );
}

export default withAuthenticator(HomePage);