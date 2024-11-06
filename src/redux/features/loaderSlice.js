import { createSlice } from "@reduxjs/toolkit";
import games from "../../games.json";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { isLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
