import { MOMENTOS } from "../../data/dummy_data.js";

const initialState = {
  momentos: MOMENTOS
};

const momentosReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default momentosReducer;
