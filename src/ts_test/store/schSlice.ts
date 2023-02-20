import { Slice, createSlice } from "@reduxjs/toolkit";

export interface schType {
    name: string,
    address: string
}

const schSlice: Slice = createSlice({
    name: "sch",
    initialState: {
        name: "Empiror",
        address: "Locating"
    },
    reducers: {
        setSchName(state, action) {
            state.name = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        }
    }
});

export const { setSchName, setSchAddress } = schSlice.actions;
export const { reducer: schReducer } = schSlice;