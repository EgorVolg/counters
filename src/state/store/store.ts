import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { areasSlice } from "../slices/areasSlices";
import { api } from "../../api/makeRequest";


const reducers = combineReducers({
    areas: areasSlice.reducer,
    [api.reducerPath]: api.reducer

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})  