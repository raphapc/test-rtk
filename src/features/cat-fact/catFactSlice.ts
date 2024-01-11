import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCatFact } from './catFactApi';
import { CatFact } from './models/catFact';

export const getCatFact = createAsyncThunk(
    'catfact/fetchCatFact',
    fetchCatFact
);

export const catFactSlice = createSlice({
    name: 'catFact',
    initialState: { fact: '', length: 0 } as CatFact,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCatFact.fulfilled, (state, action) => {
            state.fact = action.payload.fact;
            state.length = action.payload.length;
        });
    },
});
