import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TArea, TMeter } from "../components/types";

// const API_URL = "http://showroom.eis24.me/api/v4/test";
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
      transformResponse: (response: { results: TArea[] }) => {
        return response.results;
      },
    }),
    getMeters: builder.query({
      query: () => "/meters",
      providesTags: [{ type: "meters" }],
      transformResponse: (response: { results: TMeter[] }) => {
        return response.results;
      },
    }),
    removeItem: builder.mutation({
      query: (id: string) => ({
        url: `/meters/${id}`,
        method: "DELETE",
        invalidateTags: ["meters"],
      }),
    }),
  }),
});

export const { useGetAreasQuery, useGetMetersQuery, useRemoveItemMutation } = api;
