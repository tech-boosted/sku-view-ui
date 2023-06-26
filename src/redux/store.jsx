import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userData } from "./reducers/accountReducer";
import { insightsData } from "./reducers/insightsReducer";
import { appData } from "./reducers/appDataReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { chartsDataApi } from "../services/apiSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  accountData: userData,
  insightsData: insightsData,
  appData: appData,
  [chartsDataApi.reducerPath]: chartsDataApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([chartsDataApi.middleware]),
});

export default store;
