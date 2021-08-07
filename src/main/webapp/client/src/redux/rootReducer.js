import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
//import bookReducer from "./book/bookReducer";

import incomeReducer from './income/incomeReducer'
const rootReducer = combineReducers({
  auth: authReducer,
  income: incomeReducer,
  //expense: expenseReducer,
  //asset: assetReducer,
  //liability: liabilityReducer,
});

export default rootReducer;
