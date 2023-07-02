import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

export const userData = createReducer(initialState, {
  registerUser: (state, action) => {
    // state.userInfo = action.payload.userData.userInfo;
    state.userInfo = action.payload.userData;
  },
  loadUser: (state, action) => {
    state.userInfo = action.payload.userData;
  },
  clearUser: (state, action) => {
    state.userInfo = {};
  },
});
