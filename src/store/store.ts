import { configureStore } from '@reduxjs/toolkit';
import { catFactSlice } from '../features/cat-fact/catFactSlice';

export const store = configureStore({
    reducer: {
        catFact: catFactSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
