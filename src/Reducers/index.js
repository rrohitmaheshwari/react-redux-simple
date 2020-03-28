import text from "./text";
import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  text
});

export default rootReducer;
