import { chartsDataApi } from "./apiSlice";

export const chartApiSlice = chartsDataApi.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: () => "/data",
    }),
  }),
});

export const userDataApiSlice = chartsDataApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user/userInfo",
    }),
  }),
});

export const { useGetChartDataQuery } = chartApiSlice;
export const { useGetUserInfoQuery } = userDataApiSlice;
