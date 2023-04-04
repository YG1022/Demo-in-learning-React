import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import studentApi from './studentApi';

const queryStore: ToolkitStore = configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(studentApi.middleware),
});

export default queryStore;
