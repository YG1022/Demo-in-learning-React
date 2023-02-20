import { Slice, configureStore, createSlice } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export interface stateType {
    student: stuType
}

export interface stuType {
    name: string,
    age: number,
    gender: string
}

const stuSlice: Slice = createSlice({
    name: "stu",
    initialState: {
        name: "Jenkins",
        age: 12,
        gender: "male"
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setAge(state, action) {
            state.age = action.payload;
        }
    }
});

export const { setName, setAge } = stuSlice.actions;

const store: ToolkitStore = configureStore({
    reducer: {
        student: stuSlice.reducer
    }
});

export default store;