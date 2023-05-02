import { configureStore } from "@reduxjs/toolkit";
import {  userData } from "./reducers/accountReducer";

const store = configureStore({
  reducer: {
    accountData: userData,
  },
});

export default store;
