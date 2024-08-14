import {configureStore} from "@reduxjs/toolkit";

// type TStore = {
//
// }

type TArea = {
    id: number,
    number: number,
    str_number: string,
    str_number_full: string,
    address: string,
}

const initialState: TArea = {
    id: 1,
    number: 1,
    str_number: "",
    str_number_full: "",
    address: "",
}

type TAction = {
    type: "upState"
}

const areasReducer = (state = initialState, action: TAction): TArea => {
    switch (action.type) {
        case "upState":
            return {

            }
        default:
            return state
    }
}

export const store = configureStore({
    reducer: areasReducer,
})