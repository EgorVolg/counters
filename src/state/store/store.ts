import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { areasSlice } from "../slices/areasSlice";
import { api } from "../../api/makeRequest";
import { metersSlice } from "../slices/metersSlice";


const reducers = combineReducers({
    areas: areasSlice.reducer,
    meters: metersSlice.reducer,
    [api.reducerPath]: api.reducer

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})  