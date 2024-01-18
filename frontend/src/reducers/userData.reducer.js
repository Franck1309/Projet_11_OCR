import { SIGN_OUT, USER_DATA } from "../actions/userData.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return { ...action.payload.body }
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
