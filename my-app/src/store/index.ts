import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import autorizeUserSlice from './autorizeUserSlice';
const store = configureStore({
    reducer: {
        todos: todoReducer,
        autorizeUser: autorizeUserSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;