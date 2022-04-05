import React, { useCallback, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { fetchMovies } from "./store/movies/moviesSlice";

import AllCatalog from "./components/AllCatalog";
import LoginPage from "./components/LoginPage";
import Bookmarked from "./components/Bookmarked";
import CategoryContainer from "./components/CategoryContainer";
import RequireAuth from "./components/RequireAuth";

import { useAppDispatch } from "./store";
import "./sass/main.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchUserProfile()));
    // if (user) {
    dispatch(fetchMovies());
    // }
  }, [dispatch]);

  const [searchValue, setSearchValue] = useState("");

  const onSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Search input", e.target.value);
      setSearchValue(e.target.value);
    },
    []
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <RequireAuth>
              <MainLayout
                searchValue={searchValue}
                onSearchInput={onSearchInput}
              />
            </RequireAuth>
          }
        >
          <Route path="*" element={<AllCatalog searchValue={searchValue} />} />
          <Route
            path="/movies-catalog"
            element={
              <CategoryContainer category="Movie" searchValue={searchValue} />
            }
          />
          <Route
            path="/TV-catalog"
            element={
              <CategoryContainer
                category="TV Series"
                searchValue={searchValue}
              />
            }
          />
          <Route
            path="/Bookmarked"
            element={<Bookmarked searchValue={searchValue} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
