import { configureStore } from "@reduxjs/toolkit";
import { userData } from "./reducers/accountReducer";
import { insightsData } from "./reducers/insightsReducer";
import { appData } from "./reducers/appDataReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  accountData: userData,
  insightsData: insightsData,
  appData: appData,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
