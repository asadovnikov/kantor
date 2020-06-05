import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Layout} from 'antd';
import {ShopHeader} from './Components/Header';
import NoFoundPage from './Pages/404'
import {FailedPage} from './Pages/Failed';
import {SuccessPage} from './Pages/Success';
import {KYCPage} from './Pages/KYC';
import HomePage from './Pages/secured/Home';
import PaymentPage from './Pages/secured/Payment';

const {Content, Footer} = Layout;

function App() {
  return (
    <Router>
      <Layout>
            <ShopHeader/>
              <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ background: '#fff', padding: 24, minHeight: 380 }}>                    
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route path="/home">
                        <HomePage />
                      </Route>
                      <Route path="/payment">
                        <PaymentPage />
                      </Route>
                      <Route path="/paymentfailed">
                        <FailedPage />
                      </Route>
                      <Route path="/failed">
                        <FailedPage />
                      </Route>
                      <Route path="/paymentsuccessfull">
                        <SuccessPage />
                      </Route>
                      <Route path="/successful">
                        <SuccessPage />
                      </Route>
                      <Route path="/success">
                        <SuccessPage />
                      </Route>
                      <Route path="/kycverification">
                        <KYCPage />
                      </Route>
                      <Route path="/kyc">
                        <KYCPage />
                      </Route>
                      <Route path="*">
                        <NoFoundPage />
                      </Route>  
                    </Switch>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>kosevych.info © 2020 </Footer>
        </Layout>
    </Router>
  );
}

export default App;
