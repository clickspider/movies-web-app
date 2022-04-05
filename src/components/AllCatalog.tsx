import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/moviesSlice";
import MovieSection from "./MovieSection";
import { Movie } from "../store/movies/types";
import CategoryContainer from "./CategoryContainer";
import MovieCardSlider from "./MovieCardSlider";

interface AllCatalogProps {
  searchValue: string;
}

const AllCatalog: FC<AllCatalogProps> = ({ searchValue }) => {
  const { movies } = useSelector(moviesSelector);

  const trendingMovies = useMemo(() => {
    if (movies.moviesList) {
      return movies.moviesList.filter((movie: Movie) => movie.isTrending);
    }
  }, [movies.moviesList]);

  return (
    <section>
      {!searchValue && (
        <MovieSection title="Trending">
          <MovieCardSlider moviesList={trendingMovies} />
        </MovieSection>
      )}
      <CategoryContainer
        customSectionTitle="Recommended for you"
        searchValue={searchValue}
      />
    </section>
  );
};

export default AllCatalog;
