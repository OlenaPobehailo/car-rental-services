import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder => {
    builder.addCase(getAllCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.cars = payload;
    });
  },
});

export const carsReducer = slice.reducer;
