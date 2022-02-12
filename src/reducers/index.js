import { combineReducers } from "redux";
import GetData from "./GetDataReducer";

export default combineReducers({
  products: GetData
});
