import { CONTENTS } from "../../data/dummy_data.js";

const initialState = {
  contents: CONTENTS
};

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contentsReducer;
