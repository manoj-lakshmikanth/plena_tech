import { createSlice } from "@reduxjs/toolkit";
import type { Item } from "../types/watchlist.interface";

interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addWatchlist: (state, action) => {
        state.items.push(action.payload)
    },
    removeWatchlist: (state, action) => {
      state.items = state.items.filter((ele) => ele.item.id !== action.payload); // remove element by id
    },
    clearWatchlist: (state) => {
      state.items = []; // remove all elements
    },
  },
});

export const { addWatchlist, removeWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
