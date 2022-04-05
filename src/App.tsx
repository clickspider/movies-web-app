import React, { useEffect } from "react";
import "./sass/main.scss";
import MainLayout from "./components/MainLayout";
import { fetchMovies } from "./store/movies/moviesSlice";

import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return <MainLayout />;
}

export default App;
