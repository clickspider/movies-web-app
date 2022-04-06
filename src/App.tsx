import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { fetchMovies } from "./store/movies/moviesSlice";
import { setUserProfile } from "./store/user/userSlice";

import AllCatalog from "./components/AllCatalog";
import LoginPage from "./components/LoginPage";
import Bookmarked from "./components/Bookmarked";
import CategoryContainer from "./components/CategoryContainer";
import RequireAuth from "./components/RequireAuth";

import { auth, onAuthStateChanged } from "./common/fbConfig";

import { useAppDispatch } from "./store";
import "./sass/main.scss";

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      dispatch(fetchMovies());
      dispatch(setUserProfile({ ...newUser, bookmarkedIds: [] }));
    } else {
      dispatch(setUserProfile(null));
    }
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
