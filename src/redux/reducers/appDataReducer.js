import {createReducer} from "@reduxjs/toolkit";

const initialState ={
 chartData:[],
}

export const appData = createReducer(initialState,{

loadChartData:(state,action)=>{
  state.chartData = action.payload;
}
})
