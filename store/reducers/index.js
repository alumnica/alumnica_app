import { combineReducers } from "redux";

import odasReducer from "./odasReducer.js";
import momentosReducer from "./momentosReducer.js";
import contentsReducer from "./contentsReducer.js";
import subjectsReducer from "./subjectsReducer.js";
import userAuthReducer from "./userAuthReducer.js";

export default combineReducers({
  odas: odasReducer,
  momentos: momentosReducer,
  contents: contentsReducer,
  subjects: subjectsReducer,
  userAuth: userAuthReducer
});
