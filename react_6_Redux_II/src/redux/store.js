import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: rootReducer,
  filter: filterReducer,
});

export default store;
