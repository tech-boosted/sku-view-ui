import {createReducer} from "@reduxjs/toolkit";

const initialState ={
 chartData:[],
 insightsData : [],
 dateData:[],
}

export const appData = createReducer(initialState,{

loadChartData:(state,action)=>{
  state.chartData = action.payload;
},
loadDateData:(state,action)=>{
  state.dateData = action.payload
},
loadInsightsData:(state,action)=>{
  state.insightsData = action.payload
}
})
