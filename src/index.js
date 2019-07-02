import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import style from "./App"
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import 'semantic-ui-css/semantic.min.css'

// import apiDataFiniti from "./COMPONENTS/api_dataFiniti"; 
// import apiConnect from "./COMPONENTS/api_connect2"; 
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
