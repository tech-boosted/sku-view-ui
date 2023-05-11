import {createReducer} from "@reduxjs/toolkit";

const initialState ={
 chartData:[],
 insightsData : []
}

export const appData = createReducer(initialState,{

loadChartData:(state,action)=>{
  state.chartData = action.payload;
},
loadInsightsData:(state,action)=>{
  state.insightsData = action.payload
}
})
