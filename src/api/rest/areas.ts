import { api } from "../makeRequest";

export const areasApi = api.injectEndpoints({
    endpoints: builder => ({
        getAreas: builder.query({
            query: () => "/areas",
        }),
        getMeters: builder.query({
            query: () => "/meters",
        })
    })
})