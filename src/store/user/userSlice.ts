import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { BASE_API_URL } from "../../common/config";
import { User, UserState } from "./types";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    const response = await window.fetch(`${BASE_API_URL}/movies`);
    const data = (await response.json()) as User[];
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {
      user: {
        profile: null,
        loading: "idle",
        error: undefined,
      },
    },
  } as UserState,
  reducers: {},
  extraReducers: {
    [fetchUserProfile.fulfilled.toString()]: (
      state,
      action: PayloadAction<{ user: User }>
    ) => {
      const { user } = state.entities;
      user.profile = action.payload.user;
      user.loading = "idle";
    },
    [fetchUserProfile.pending.toString()]: (state) => {
      const { user } = state.entities;
      user.loading = "pending";
    },
    [fetchUserProfile.rejected.toString()]: (
      state,
      action: PayloadAction<undefined, string, any, Error>
    ) => {
      const { user } = state.entities;
      user.loading = "idle";
      user.error = action.error.message;
    },
  },
});

export const userSelector = (state: RootState) => state.user.entities;
