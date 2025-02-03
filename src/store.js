// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./redux/employeereducer";

// Configure the store with the rootReducer
const store = configureStore({
  reducer: {
    employees: employeeReducer, // Define your reducer here
  },
  // For Redux DevTools (this is automatically handled by configureStore, but you can keep it)
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
