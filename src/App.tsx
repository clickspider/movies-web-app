import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { fetchMovies } from "./store/movies/moviesSlice";
import { setUserProfile } from "./store/user/userSlice";
import { UserProfile } from "./store/user/types";

import AllCatalog from "./components/AllCatalog";
import LoginPage from "./components/LoginPage";
import Bookmarked from "./components/Bookmarked";
import CategoryContainer from "./components/CategoryContainer";
import RequireAuth from "./components/RequireAuth";

import {
  auth,
  collection,
  db,
  getDocs,
  onAuthStateChanged,
  query,
  where,
} from "./common/fbConfig";

import { useAppDispatch } from "./store";
import "./sass/main.scss";

function App() {
  const dispatch = useAppDispatch();

  const initAppWithUserProfile = (userProfie: UserProfile | null) => {
    dispatch(setUserProfile(userProfie));
    dispatch(fetchMovies());
  };

  onAuthStateChanged(auth, async (inComingUser) => {
    if (!inComingUser) return dispatch(setUserProfile(null));
    const q = query(
      collection(db, "users"),
      where("__name__", "==", inComingUser.uid)
    );
    const userBookmarkedIds = await getDocs(q);

    const userProfile = {
      ...inComingUser,
      bookmarkedIds: userBookmarkedIds.docs[0]?.data().bookmarkedIds || [],
    };

    return initAppWithUserProfile(userProfile);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        >
          <Route path="*" element={<AllCatalog />} />
          <Route
            path="/movies-catalog"
            element={<CategoryContainer category="Movie" />}
          />
          <Route
            path="/TV-catalog"
            element={<CategoryContainer category="TV Series" />}
          />
          <Route path="/Bookmarked" element={<Bookmarked />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
