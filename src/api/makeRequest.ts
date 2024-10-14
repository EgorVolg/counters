import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TArea, TMeter } from "../components/types";

type metersRest = {
  results: TMeter[];
  count: number;
};


const API_URL = "http://showroom.eis24.me/api/v4/test";
// const API_URL = "http://localhost:3000";
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["areas", "meters"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAreas: builder.query({
      query: () => "/areas/?limit=158",
      providesTags: [{ type: "areas" }],
      transformResponse: (response: { results: TArea[] }) => {
        return response.results;
      },
    }),
    getMeters: builder.query({
      query: (pageNumber: number) => `/meters/?limit=20&offset=${pageNumber * 20}`,
      providesTags: [{ type: "meters" }],
      transformResponse: (response: metersRest) => {
        const results = response.results;
        const count = response.count;
        return { results, count };
      },
    }),
    removeItem: builder.mutation({
      query: (id: string) => ({
        url: `/meters/${id}`,
        method: "DELETE",

      }),
      invalidatesTags: ["meters"],
    }),
  }),
});

export const { useGetAreasQuery, useGetMetersQuery, useRemoveItemMutation } = api;
