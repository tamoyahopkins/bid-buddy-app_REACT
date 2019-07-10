import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import scannedItems from "./scannerReducer"

export default history =>
  combineReducers({
    router: connectRouter(history),
    scanned: scannedItems
  });

  //test