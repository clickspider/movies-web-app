import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { moviesSlice } from "./movies/moviesSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
