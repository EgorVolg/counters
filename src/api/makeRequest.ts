import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3000";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["areas", "meters"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAreas: builder.query({
      query: () => "/areas",
      providesTags: [{ type: "areas" }],
    }),
    getMeters: builder.query({
      query: () => "/meters?_limit=20",
      providesTags: [{ type: "meters" }],
    }),
    removeItem: builder.mutation({
      query: (id: string) => ({
        url: `/meters/${id}`,
        method: "DELETE",
       }),
    }),
  }),
});

export const { useGetAreasQuery, useGetMetersQuery, useRemoveItemMutation } = api;
