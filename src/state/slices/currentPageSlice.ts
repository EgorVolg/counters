import { createSlice } from "@reduxjs/toolkit";

export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState: 1,
    reducers: {
        updateCurrentPage: (state, action) => {
            state = action.payload
            return state
        },
        default: () => console.log("error")
    }
})

export const { updateCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer