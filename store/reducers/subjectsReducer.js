import {FETCH_SUBJECTS} from "../actions/types.js"

const initialState = {subjects:[]};

const subjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
        return { ...state, subjects: action.payload};
    default:
      return state;
  }
};

export default subjectsReducer;
