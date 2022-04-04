import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { BASE_API_URL } from "../../common/config";
import { Movie, MoviesState } from "./types";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await window.fetch(`${BASE_API_URL}/movies`);
  const data = (await response.json()) as Movie[];
  return data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    entities: {
      movies: {
        moviesList: [],
        loading: "idle",
        error: undefined,
      },
    },
  } as MoviesState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled.toString()]: (
      state,
      action: PayloadAction<{ moviesList: Movie[] }>
    ) => {
      const { movies } = state.entities;
      movies.moviesList = action.payload.moviesList;
      movies.loading = "idle";
    },
    [fetchMovies.pending.toString()]: (state) => {
      const { movies } = state.entities;
      movies.loading = "pending";
    },
    [fetchMovies.rejected.toString()]: (
      state,
      action: PayloadAction<undefined, string, any, Error>
    ) => {
      const { movies } = state.entities;
      movies.loading = "idle";
      movies.error = action.error.message;
    },
  },
});

export const moviesSelector = (state: RootState) => state.movies.entities;
