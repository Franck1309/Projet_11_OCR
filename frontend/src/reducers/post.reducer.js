import { USER_POSTS } from "../actions/post.action";
import { SIGN_OUT } from "../actions/userData.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case USER_POSTS:
      return action.payload;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
