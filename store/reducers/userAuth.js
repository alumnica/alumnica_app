const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        userToken: action.payload,
        isLoading: false
      };
    case "SIGN_IN":
      return {
        ...state,
        isSignout: false,
        userToken: action.payload
      };
    case "SIGN_UP":
      return {
        ...state,
        isSignout: false,
        userToken: action.payload
      };
    case "SIGN_OUT":
      return {
        ...state,
        userToken: null
      };
    default:
      return state;
  }
};

export default userAuthReducer;
