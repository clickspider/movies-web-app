import React, { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { moviesSelector, fetchMovies } from "../store/movies/moviesSlice";
import { useAppDispatch } from "../store";
import MovieSection from "./MovieSection";
import { Movie } from "../store/movies/types";

import MovieCardSlider from "./MovieCardSlider";

const AllCatalog: FC = () => {
  const dispatch = useAppDispatch();
  const { movies } = useSelector(moviesSelector);
  const trendingMovies = useMemo(() => {
    if (movies.moviesList) {
      return movies.moviesList.filter((movie: Movie) => movie.isTrending);
    }
  }, [movies.moviesList]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (movies.loading === "pending") {
    return <div>Loading...</div>;
  }

  if (movies.error) {
    return <div>Error!</div>;
  }

  if (!movies) {
    return <div>No movies</div>;
  }

  return (
    <section className="home-catalog">
      <MovieSection title="Trending">
        <MovieCardSlider moviesList={trendingMovies} />
      </MovieSection>

      {/* <MovieSection title="Recommended for you">
        <div className="grid-container">
          <MovieCard
            movie={{ title: "Beyond Earth", year: 2019, category: "movie" }}
            mode="card-small"
          />
        </div>
      </MovieSection> */}
    </section>
  );
};

export default AllCatalog;
