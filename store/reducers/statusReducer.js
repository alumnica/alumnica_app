import { LOADING, SET_ERROR, READY, TO_AUTH } from "../actions/types.js";

const initialState = {
  status: "ready",
  errorMessage: ""
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        status: "loading"
      };
    case SET_ERROR:
      return {
        ...state,
        status: "error",
        errorMessage: action.payload
      };
    case READY:
      return {
        ...state,
        status: "ready"
      };
    case TO_AUTH:
      return {
        ...state,
        status: "no_user"
      };
    default:
      return state;
  }
};

export default statusReducer;
