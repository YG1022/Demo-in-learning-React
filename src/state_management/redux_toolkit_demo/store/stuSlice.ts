import { Slice, createSlice } from '@reduxjs/toolkit';

export interface stuType {
    name: string;
    age: number;
    gender: string;
}

const stuSlice: Slice = createSlice({
    name: 'stu',
    initialState: {
        name: 'Jenkins',
        age: 12,
        gender: 'male',
    },
    reducers: {
        setStuName(state, action) {
            state.name = action.payload;
        },
        setStuAge(state, action) {
            state.age = action.payload;
        },
    },
});

export const { setStuName, setStuAge } = stuSlice.actions;
export const { reducer: stuReducer } = stuSlice;
