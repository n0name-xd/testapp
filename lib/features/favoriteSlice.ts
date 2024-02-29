import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteSliceState {
  dataList: number[];
}

const initialState: FavoriteSliceState = {
  dataList: [],
};

export const favoriteSlice = createAppSlice({
  name: "favorite",
  initialState,
  reducers: (create) => ({
    addFavorite: create.reducer((state, action: PayloadAction<number>) => {
      state.dataList.push(action.payload);
    }),
    removeFavorite: create.reducer((state, action: PayloadAction<number>) => {
      state.dataList = state.dataList.filter((el) => el !== action.payload);
    }),
  }),
  selectors: {
    selectFavorite: (date) => date.dataList,
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const { selectFavorite } = favoriteSlice.selectors;
