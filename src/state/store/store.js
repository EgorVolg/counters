import {configureStore} from "@reduxjs/toolkit";
import {areasSlice} from "../slices/areaSlice.ts";

export const store = configureStore({
    reducer: {
        areas: areasSlice

    }
})