import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  // credentials: "include",
  mode:"cors",
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export const chartsDataApi = createApi({
  reducerPath:"chartsDataApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

