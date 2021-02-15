import { combineReducers } from "redux";

// reducers
import inboxReducer from "./inbox.reducer";
import sessionReducer from "./session.reducer";

export default combineReducers({
  session: sessionReducer,
  inbox: inboxReducer,
});
