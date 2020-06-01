import React from 'react';
import { Result, Button } from 'antd';

export const SuccessPage = () => {
  return (
    <Result
      status="success"
      title="Payment completed"
      // subTitle="Payment number: 2017182818828182881 Processing may take 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Show my transactions
      </Button>,
      ]}
    />
  );
}