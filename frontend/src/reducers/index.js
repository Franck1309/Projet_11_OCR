import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./userData.reducer";

export default combineReducers({
  postReducer,
  userReducer,
});
