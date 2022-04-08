import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { db, collection, getDocs } from "../../common/fbConfig";
import { Movie, MoviesState } from "./types";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await getDocs(collection(db, "moviesList"));
  const data = response.docs.map((doc) => doc.data() as Movie);
  return data;
});

const getMoviesListLocalStorage = JSON.parse(
  window.localStorage.getItem("moviesList")!
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    entities: {
      movies: {
        moviesList: getMoviesListLocalStorage as Movie[] | [],
        loading: "idle",
        error: undefined,
      },
    },
  } as MoviesState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.entities.movies.moviesList = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled.toString()]: (
      state,
      action: PayloadAction<Movie[]>
    ) => {
      const { movies } = state.entities;
      movies.moviesList = action.payload;
      window.localStorage.setItem("moviesList", JSON.stringify(action.payload));
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

export const { setMovies } = moviesSlice.actions;

export const moviesSelector = (state: RootState) => state.movies.entities;
