import { configureStore } from "@reduxjs/toolkit";
import { userData } from "./reducers/accountReducer";
import { insightsData } from "./reducers/insightsReducer";

const store = configureStore({
  reducer: {
    accountData: userData,
    insightsData:insightsData
  },
});

export default store;
