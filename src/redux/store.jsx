import { configureStore } from "@reduxjs/toolkit";
import { userData } from "./reducers/accountReducer";
import { insightsData } from "./reducers/insightsReducer";
import { appData } from "./reducers/appDataReducer";

const store = configureStore({
  reducer: {
    accountData: userData,
    insightsData:insightsData,
    appData:appData
  },
});

export default store;
