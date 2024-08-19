import { createSlice } from "@reduxjs/toolkit";
 
export const areasSlice = createSlice({
    name: "areas",
    initialState: [],
    reducers: {
        updateAreas: (state, action) => {
            return action.payload.areas
        },
        default: () => console.log("error")
    },
});

export const { updateAreas } = areasSlice.actions;

export default areasSlice.reducer;
