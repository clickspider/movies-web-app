import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { isMovieBookmarked } from "../../common/helpers";
import { fetchUserProfile, updateBookmarkedIDs } from "./actions";
import { UserProfile, UserState } from "./types";

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
    setUserProfile: (state, action: PayloadAction<UserProfile | null>) => {
      let formartedProfile = null;
      if (action.payload) {
        const { uid, email, photoURL, displayName, bookmarkedIds } =
          action.payload;
        formartedProfile = {
          uid,
          email,
          photoURL,
          displayName,
          bookmarkedIds,
        };
      }
      window.localStorage.setItem(
        "userProfile",
        JSON.stringify(formartedProfile)
      );
      // console.log(formartedProfile);
      state.entities.user.profile = formartedProfile;
      state.entities.user.loading = "idle";
    },
  },
  extraReducers: {
    [fetchUserProfile.fulfilled.toString()]: (state) => {},
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
    [updateBookmarkedIDs.fulfilled.toString()]: (
      state,
      action: PayloadAction<number>
    ) => {
      const {
        user: { profile },
      } = state.entities;
      const { user } = state.entities;
      let newBookmarkedIds = [...profile!.bookmarkedIds];
      if (isMovieBookmarked(action.payload, profile!.bookmarkedIds)) {
        newBookmarkedIds = newBookmarkedIds.filter(
          (id) => id !== action.payload
        );
      } else {
        newBookmarkedIds = [...newBookmarkedIds, action.payload];
      }
      profile!.bookmarkedIds = newBookmarkedIds;
      window.localStorage.setItem("userProfile", JSON.stringify(profile));
      user.loading = "idle";
    },
    [updateBookmarkedIDs.pending.toString()]: (state) => {
      const { user } = state.entities;
      user.loading = "pending";
    },
    [updateBookmarkedIDs.rejected.toString()]: (
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
