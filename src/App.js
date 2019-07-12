import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components";
import ClientLogin from "./views/ClientLoginPage"
import ClientAccount from "./views/ClientAccountPage";
import PricingPage from "./views/PricingPage";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

// import { AuthPage } from "../../../capstone-front/src/components";

class App extends Component {
  render() {
    
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/clientlogin" render={() => <ClientLogin/>} />
        <Route exact path="/clientaccount" render={() => <ClientAccount/>} />
        <Route exact path="/pricingpage" render={() => <PricingPage/>} />

        {/* <Route exact path="/messagefeed" render={() => <MessageFeed />}/> */}
        {/* <Route exact path="/profile" render={() => <UserProfile />} /> */}
      </Switch>
    );
  }
}

export default App;

//test