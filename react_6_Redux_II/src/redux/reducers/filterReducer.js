import { SET_FILTER, SHOW_ALL } from "../actions/filterActions";

const initialState = SHOW_ALL;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
