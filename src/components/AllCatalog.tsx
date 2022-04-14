import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/moviesSlice";
import { useSearch } from "./MainLayout";
import MovieSection from "./MovieSection";
import { Movie } from "../store/movies/types";
import CategoryContainer from "./CategoryContainer";
import MovieCardSlider from "./MovieCardSlider";

const AllCatalog: FC = () => {
  const { movies } = useSelector(moviesSelector);
  const { searchValue } = useSearch();
  const trendingMovies = useMemo(
    () => movies.moviesList.filter((movie: Movie) => movie.isTrending),
    [movies.moviesList]
  );

  return (
    <>
      {!searchValue && (
        <MovieSection title="Trending">
          <MovieCardSlider moviesList={trendingMovies} />
        </MovieSection>
      )}
      <CategoryContainer customSectionTitle="Recommended for you" />
    </>
  );
};

export default AllCatalog;
