import { createSlice } from "@reduxjs/toolkit";
 
export const areasSlice = createSlice({
    name: "areas",
    initialState: [],
    reducers: {
        updateAreas: (state, action) => {
            state = action.payload.areas
            return state
        },
        default: () => console.log("error")
    },
});

export const { updateAreas } = areasSlice.actions;

export default areasSlice.reducer;
