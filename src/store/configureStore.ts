import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./movies/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});
