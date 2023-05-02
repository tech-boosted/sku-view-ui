import {createReducer} from "@reduxjs/toolkit";

const initialState ={
  userInfo:{
     
    },
}

export const userData = createReducer(initialState,{
registerUser:(state,action)=>{
  state.userInfo = action.payload.userData.userInfo;
},
loadUser:(state,action)=>{
  state.userInfo = action.payload.userData;
}

})
