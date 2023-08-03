import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false
    },

    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },

        getCatSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },

        getCatsFailure: (state) => {
            state.isLoading = false;
        },
    }
});

export const { getCatsFetch, getCatsFailure, getCatSuccess } = catSlice.actions;

export default catSlice.reducer;