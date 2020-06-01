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

const {Content, Footer} = Layout;

function App() {
  return (
    <Router>
      <Layout>
            <ShopHeader/>
              <Content style={{padding: '0 50px', width: "100%"}}>

                <div style={{background: '#fff', width: "100%"}}>
                    {/* <Route exact path='/' component={HomePage}/>
                    <Route path={'/home'} component={HomePage}/>
                    <Router path={'/paymentfailed'} component={FailedPage}/>
                    <Router path={'/paymentsuccessfull'} component={SuccessPage}/>
                    <Router path={'/kycverification'} component={KYCPage}/> */}
                    <Switch>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route path="/home">
                        <HomePage />
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
                      <Route path="*">
                        <NoFoundPage />
                      </Route>  
                    </Switch>
                    {/* <Route path={"/login"} component={AuthScreen}/>
                    <Route path={"/register"} component={AuthScreen}/>
                    <Route path={"/registerconfirm"} component={AuthScreen}/>
                    <Route path={"/forgotpassword1"} component={AuthScreen}/>
                    <Route path={"/forgotpassword2"} component={AuthScreen}/> */}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>kosevych.info © 2020 </Footer>
        </Layout>
    </Router>
  );
}

export default App;
