import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default rootReducer;
