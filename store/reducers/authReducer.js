import {RESTORE_TOKEN,SIGN_IN,SIGN_UP,SIGN_OUT} from "../actions/types.js"

const initialState = {
  user: null,
  isLoading: false,
  error: false
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default userAuthReducer;
