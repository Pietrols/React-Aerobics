import { configureStore } from "@reduxjs/toolkit";
// Import the counter
import counterReducer from "./reducers/counterReducer.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
