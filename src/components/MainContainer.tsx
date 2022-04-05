import React from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/moviesSlice";

const MainContainer: React.FC = ({ children }) => {
  const { movies } = useSelector(moviesSelector);
  if (movies.loading === "pending") {
    return <div>Loading...</div>;
  }

  if (movies.error) {
    return <div>Error in loading movies!</div>;
  }

  if (!movies) {
    return <div>No movies</div>;
  }

  return <>{children}</>;
};

export default MainContainer;
