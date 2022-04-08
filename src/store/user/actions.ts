import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  auth,
  provider,
  db,
  doc,
  setDoc,
  signInWithPopup,
} from "../../common/fbConfig";
import { isMovieBookmarked } from "../../common/helpers";
import { UserProfile } from "./types";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async () => {
    // Warning: in App.tsx, there's a hook "onAuthStateChanged"
    // that listens to auth state changes and acts upon it.
    const userRes = await signInWithPopup(auth, provider);
    return userRes.user;
  }
);

export const updateBookmarkedIDs = createAsyncThunk(
  "user/updateBookmarkedIDs",
  async (movieID: number, { getState }) => {
    const state = getState() as {
      user: { entities: { user: { profile: UserProfile } } };
    };
    const {
      entities: {
        user: { profile },
      },
    } = state.user;

    let bookmarkedIdsArray;

    if (isMovieBookmarked(movieID, profile.bookmarkedIds)) {
      bookmarkedIdsArray = profile.bookmarkedIds.filter((id) => id !== movieID);
    } else {
      bookmarkedIdsArray = [...profile!.bookmarkedIds, movieID];
    }

    await setDoc(doc(db, "users", profile!.uid), {
      bookmarkedIds: bookmarkedIdsArray,
    });

    return movieID;
  }
);
