import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  currentPage: 1,
};

export const slice = createSlice({
  name: "cars",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
      })

      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
