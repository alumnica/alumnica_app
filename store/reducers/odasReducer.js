import { ODAS } from "../../data/dummy_data.js";

const initialState = {
  odas: ODAS
};

const odasReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default odasReducer;
