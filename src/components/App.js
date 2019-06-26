import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from ".";
// import { AuthPage } from "../../../capstone-front/src/components";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        {/* <Route exact path="/messagefeed" render={() => <MessageFeed />}/> */}
        {/* <Route exact path="/profile" render={() => <UserProfile />} /> */}
      </Switch>
    );
  }
}

export default App;
