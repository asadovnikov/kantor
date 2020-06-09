import React from 'react';
import { Result, Button } from 'antd';

export const FailedPage = () => {
  return (
    <Result
      status="error"
      title="Payment Failed"
      subTitle="Something went wrong. Please try again"
      extra={[
        <Button type="primary" key="console">
          Go to payment
      </Button>,
      ]}
    />
  );
}