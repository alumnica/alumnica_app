import { combineReducers } from "redux";

import odasReducer from "./odasReducer.js";
import momentosReducer from "./momentosReducer.js";
import contentsReducer from "./contentsReducer.js";
import subjectsReducer from "./subjectsReducer.js";
import authReducer from "./authReducer.js";
import statusReducer from "./statusReducer.js";

export default combineReducers({
  odas: odasReducer,
  momentos: momentosReducer,
  contents: contentsReducer,
  subjects: subjectsReducer,
  auth: authReducer,
  status: statusReducer
});
