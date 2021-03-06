import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useSearch } from "./MainLayout";
import { moviesSelector } from "../store/movies/moviesSlice";
import MovieSection from "./MovieSection";
import { Movie } from "../store/movies/types";
import MovieCard from "./MovieCard";
import { useAppDispatch } from "../store";
import { updateBookmarkedIDs } from "../store/user/actions";
import { userSelector } from "../store/user/userSlice";
import { isMovieBookmarked } from "../common/helpers";

interface CategoryContainerProps {
  category?: "Movie" | "TV Series";
  customSectionTitle?: string;
  isBookmarkedSection?: boolean;
  className?: string;
}

const CategoryContainer: FC<CategoryContainerProps> = ({
  category = "",
  customSectionTitle,
  isBookmarkedSection = false,
  className = "mt-40",
}) => {
  const { movies } = useSelector(moviesSelector);
  const { user } = useSelector(userSelector);
  const { searchValue } = useSearch();
  const dispatch = useAppDispatch();

  const filteredMovies = movies.moviesList.filter(
    (movie: Movie) =>
      movie.category.toLowerCase().includes(category.toLowerCase()) &&
      movie.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      (isBookmarkedSection
        ? isMovieBookmarked(movie.id, user!.profile!.bookmarkedIds)
        : true)
  );

  if (!filteredMovies?.length && searchValue === "") {
    return null;
  }

  const foundTitle = `Found ${
    filteredMovies?.length
  } results for ‘${searchValue}’ ${category ? `in ${category}` : ""}`;

  const customTitle = customSectionTitle || category;

  const movieSectionTitle = searchValue ? foundTitle : customTitle;

  return (
    <MovieSection title={movieSectionTitle} className={className}>
      <div className="grid-container">
        {filteredMovies?.map((movie: Movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            mode="card-small"
            onBookmarkClick={(_, movieIdx) =>
              dispatch(updateBookmarkedIDs(movieIdx))
            }
            isBookmarked={isMovieBookmarked(
              movie.id,
              user.profile!.bookmarkedIds
            )}
            onPlayClick={(e, id) => console.log("Play single", e, id)}
          />
        ))}
      </div>
    </MovieSection>
  );
};

export default CategoryContainer;
