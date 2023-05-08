import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    skuColumns: ["Sku", "Impressions", "Clicks", "Spend", "Sales", "Orders"],
    customClass: "",
    data: [],
}

export const insightsData = createReducer(initialState, {

    loadPerformersData:(state,action) =>{
        state.data = action.payload;
    }
})