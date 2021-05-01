import { combineReducers } from "redux";
import { searchReducer } from "./searchShopReducer";

export default combineReducers({
  search: searchReducer,
});
