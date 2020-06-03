import React from 'react';
import {Result, Button, Card, Col, Row, Avatar} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
const { Meta } = Card;

const KYCValidationState = () => {
  let {validationId} = useParams();
  return (
    <div className="site-card-wrapper">
      <Row justify="center">
        <Col span={8}>
          <Card 
            hoverable
            style={{ marginTop: 16 }}
          >
            <Meta 
              avatar={
                <Avatar shape="square" size={84} src="https://cdn4.iconfinder.com/data/icons/travel-21/256/Passport-512.png" />
              }
              title="ID Verification"
              description="We need photo of your id document to prove your identity"
            />
          </Card>
        </Col>        
      </Row>
      <Row justify="center">
      <Col span={8}>
          <Card 
              style={{ marginTop: 16}}
              hoverable
            >
              <Meta 
                avatar={
                  <Avatar shape="square" size={84} src="https://cdn1.iconfinder.com/data/icons/e-commerce-online-shopping-3-5/64/x-12-2-512.png" />
                }
                title="Address Verification"
                description="We need to prove specified address"
              />
          </Card>
        </Col>        
      </Row>
      <Row justify="center">
      <Col span={8}>
          <Card 
              style={{ marginTop: 16 }}
              hoverable
              // title={validationId}
            >
              <Meta 
                avatar={
                  <Avatar shape="square" size={84} src="https://cdn1.iconfinder.com/data/icons/business-office-41/64/x-01-512.png" />
                }
                title="Financial documents"
                description="You should prove your income"
              />
            </Card>
        </Col>
      </Row>
    </div>
  )
}


export const KYCPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />
      </Route>
      <Route path={`${path}/:validationId`}>
        <KYCValidationState />
      </Route>
    </Switch>
  );
}