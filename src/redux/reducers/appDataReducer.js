import {createReducer} from "@reduxjs/toolkit";
import { insightsData } from "./insightsReducer";

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
},
clearAppData :(state,action)=>{
  state.chartData = [];
  state.insightsData = [];
  state.dateData = [];
}
})
