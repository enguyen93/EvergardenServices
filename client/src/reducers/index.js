import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { getRecipientsReducer } from "./modalReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  recipients: getRecipientsReducer
});