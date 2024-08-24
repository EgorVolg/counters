import { createSlice } from "@reduxjs/toolkit";

export const metersSlice = createSlice({
    name: "meters",
    initialState: [],
    reducers: {
        updateMeters: (state, action) => {
            state = action.payload.meters
            return state
        },
        default: () => console.log("error")
    },
});


export const { updateMeters } = metersSlice.actions;

export default metersSlice.reducer;