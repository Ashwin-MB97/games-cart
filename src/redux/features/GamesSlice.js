import { createSlice } from "@reduxjs/toolkit";
import games from "../../games.json";

const initialState = {
  games: games,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    filterGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const { filterGames } = gamesSlice.actions;
export default gamesSlice.reducer;
