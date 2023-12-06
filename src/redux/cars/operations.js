import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../fetchInstance';

export const getAllCars = createAsyncThunk('cars/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
