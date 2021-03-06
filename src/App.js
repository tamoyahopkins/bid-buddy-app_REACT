import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components";
import ClientLogin from "./views/ClientLoginPage"
import ClientAccountPage from "./views/ClientAccountPage";
import PricingPage from "./views/PricingPage";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import RegisterForm from "./views/RegisterForm"
import UserLogin from "./views/userLoginPage"
import VoucherPage from "./views/VoucherPage"


// import { AuthPage } from "../../../capstone-front/src/components";

class App extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/" render={() => <UserLogin />} />
        <Route exact path="/scanitem" render={() => <Home />} />
        <Route exact path="/clientlogin" render={() => <ClientLogin/>} />
        <Route exact path="/clientaccount" render={() => <ClientAccountPage/>} />
        <Route exact path="/pricingpage" render={() => <PricingPage/>} />
        <Route exact path="/voucherpage" render={() => <VoucherPage/>} />
        
        {/* <Route exact path="/register" render={() => <RegisterForm/>} /> */}
        {/* <Route exact path="/messagefeed" render={() => <MessageFeed />}/> */}
        {/* <Route exact path="/profile" render={() => <UserProfile />} /> */}
      </Switch>
    );
  }
}

export default App;


