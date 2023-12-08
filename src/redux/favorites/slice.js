import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'favorites',

  initialState: {
    favoritesList: [],
  },

  reducers: {
    addToFavorites: (state, { payload }) => {
      console.log(payload);
      state.favoritesList.push(payload);
    },

    removeFromFavorites: (state, { payload }) => {
      state.favoritesList = state.favoritesList.filter(item => item.id !== payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;
export default slice.reducer;
