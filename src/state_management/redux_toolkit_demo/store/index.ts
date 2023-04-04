import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { stuReducer, stuType } from './stuSlice';
import { schReducer, schType } from './schSlice';

export interface stateType {
    student: stuType;
    school: schType;
}

const toolkitStore: ToolkitStore = configureStore({
    reducer: {
        student: stuReducer,
        school: schReducer,
    },
});

export default toolkitStore;
