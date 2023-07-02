import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authBaseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  mode: "cors",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    // headers.set("Accept", "application/json, text/plain, /")

    return headers;
  },
});

export const authSlice = createApi({
  reducerPath: "authSlice",
  baseQuery: authBaseQuery,
  endpoints: (builder) => ({}),
});
