import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { signInWithPopup, provider, auth } from "../../common/fbConfig";
import { UserProfile, UserState } from "./types";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    const response = await signInWithPopup(auth, provider);
    return response.user;
  }
);

const getUserProfileLocalStorage = JSON.parse(
  window.localStorage.getItem("userProfile")!
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {
      user: {
        profile: getUserProfileLocalStorage as UserProfile | null,
        loading: "idle",
        error: undefined,
      },
    },
  } as UserState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      const { uid, email, photoURL, displayName, bookmarkedIds } =
        action.payload;
      const formartedProfile = {
        uid,
        email,
        photoURL,
        displayName,
        bookmarkedIds,
      };
      window.localStorage.setItem(
        "userProfile",
        JSON.stringify(formartedProfile)
      );
      state.entities.user.profile = formartedProfile;
      state.entities.user.loading = "idle";
    },
  },
  extraReducers: {
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

export const { setUserProfile } = userSlice.actions;
export const userSelector = (state: RootState) => state.user.entities;
