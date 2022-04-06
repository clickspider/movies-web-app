import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/moviesSlice";
import { Movie, Categories } from "../store/movies/types";
import CategoryContainer from "./CategoryContainer";

const Bookmarked: FC = () => {
  const { movies } = useSelector(moviesSelector);

  const [moviesArray, tvSeriesArray]: [Movie[], Movie[]] =
    movies.moviesList.reduce(
      (acc, movie) => {
        switch (movie.category as Categories) {
          case Categories.Movie:
            acc[0].push(movie);
            break;
          case Categories.TVSeries:
            acc[1].push(movie);
            break;
          default:
            break;
        }
        return acc;
      },
      [[] as Movie[], [] as Movie[]]
    );

  const isCategoryBookmarked = useCallback(
    (category: string) => {
      switch (category) {
        case Categories.Movie:
          return moviesArray.some((movie) => movie.isBookmarked);
        case Categories.TVSeries:
          return tvSeriesArray.some((movie) => movie.isBookmarked);
        default:
          return false;
      }
    },
    [moviesArray, tvSeriesArray]
  );

  if (
    !isCategoryBookmarked(Categories.Movie) &&
    !isCategoryBookmarked(Categories.TVSeries)
  ) {
    return <div>Bookmark something and then come back =) !</div>;
  }

  return (
    <>
      {isCategoryBookmarked(Categories.Movie) ? (
        <CategoryContainer
          className="mb-100"
          customSectionTitle="Bookmarked Movies"
          category="Movie"
          bookmarked
        />
      ) : null}
      {isCategoryBookmarked(Categories.TVSeries) ? (
        <CategoryContainer
          customSectionTitle="Bookmarked TV Series"
          category="TV Series"
          bookmarked
        />
      ) : null}
    </>
  );
};

export default Bookmarked;
