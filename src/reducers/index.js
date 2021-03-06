import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import scannedItems from "./scannerReducer"
import auth from "./authReducer"
import user from "./userReducer"
import bids from "./bidReducer"

export default history =>
  combineReducers({
    router: connectRouter(history),
    scanned: scannedItems,
    auth,
    user,
    bids
  });

 