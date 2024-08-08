import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import areas from "../../api/makeRequest.ts";

export const fetchAreas = createAsyncThunk(
    "areas/fetch", async () => areas())

export const areasSlice = createSlice({
    name: "areas",
    initialState: {
        areas: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAreas.fulfilled, (
            state, action) => {
            state.areas = action.payload
        })
    }
})

export default areasSlice.reducer