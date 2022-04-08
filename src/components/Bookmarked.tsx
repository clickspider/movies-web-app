import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { isMovieBookmarked } from "../common/helpers";
import { moviesSelector } from "../store/movies/moviesSlice";
import { Movie, Categories } from "../store/movies/types";
import { userSelector } from "../store/user/userSlice";
import CategoryContainer from "./CategoryContainer";

const Bookmarked: FC = () => {
  const { movies } = useSelector(moviesSelector);
  const { user } = useSelector(userSelector);

  const moviesList = JSON.parse(JSON.stringify(movies.moviesList)) as Movie[];

  const [moviesArray, tvSeriesArray]: [
    [{ isBookmarked: boolean }],
    [{ isBookmarked: boolean }]
  ] = moviesList.reduce(
    (acc, movie) => {
      const isBookmarked = isMovieBookmarked(
        movie.id,
        user!.profile!.bookmarkedIds
      );
      switch (movie.category as Categories) {
        case Categories.Movie:
          acc[0].push({ isBookmarked });
          break;
        case Categories.TVSeries:
          acc[1].push({ isBookmarked });
          break;
        default:
          break;
      }
      return acc;
    },
    [
      [] as unknown as [{ isBookmarked: boolean }],
      [] as unknown as [{ isBookmarked: boolean }],
    ]
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
          isBookmarkedSection
        />
      ) : null}
      {isCategoryBookmarked(Categories.TVSeries) ? (
        <CategoryContainer
          customSectionTitle="Bookmarked TV Series"
          category="TV Series"
          isBookmarkedSection
        />
      ) : null}
    </>
  );
};

export default Bookmarked;
