import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../fetchInstance";

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (page, thunkAPI) => {
    try {
      const { data } = await instance.get(`/advert?page=${page}&limit=12`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
