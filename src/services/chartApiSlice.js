import { dataSlice } from "./apiSlice";

export const chartApiSlice = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: () => "/data",
    }),
  }),
});

export const userDataApiSlice = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user/userInfo",
    }),
  }),
});

export const dateData = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateData: builder.mutation({
      query: ({ startDate, endDate }) => ({
        url: ``,
        method: "POST",
        body: { startDate, endDate },
      }),
    }),
  }),
});

export const logOut = dataSlice.injectEndpoints({
  endpoints: (builder) => ({
    logOutUser: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetChartDataQuery } = chartApiSlice;
export const { useGetUserInfoQuery } = userDataApiSlice;
export const { useUpdateDataMutation } = dateData;
export const { useLogOutUserMutation } = logOut;
