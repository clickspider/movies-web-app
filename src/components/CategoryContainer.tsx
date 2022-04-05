import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { moviesSelector } from "../store/movies/moviesSlice";
import MovieSection from "./MovieSection";
import { Movie } from "../store/movies/types";
import MovieCard from "./MovieCard";

interface CategoryContainerProps {
  searchValue: string;
  category?: "Movie" | "TV Series";
  customSectionTitle?: string;
  bookmarked?: boolean;
  className?: string;
}

const CategoryContainer: FC<CategoryContainerProps> = ({
  searchValue,
  category = "",
  customSectionTitle,
  bookmarked = false,
  className = "mt-40",
}) => {
  const { movies } = useSelector(moviesSelector);

  const filteredMovies = useMemo(() => {
    if (movies.moviesList) {
      return movies.moviesList.filter(
        (movie: Movie) =>
          movie.category.toLowerCase().includes(category.toLowerCase()) &&
          movie.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          (bookmarked ? movie.isBookmarked : true)
      );
    }
  }, [bookmarked, category, movies.moviesList, searchValue]);

  if (!filteredMovies?.length && searchValue === "") {
    return <div>No movies</div>;
  }

  return (
    <MovieSection
      title={
        searchValue
          ? `Found ${filteredMovies?.length} results for ‘${searchValue}’ ${
              category ? `in ${category}` : ""
            }`
          : `${customSectionTitle || category}`
      }
      className={className}
    >
      <div className="grid-container">
        {filteredMovies?.map((movie: Movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            mode="card-small"
            onBookmarkClick={(e, id) => console.log("BookMark Single", e, id)}
            onPlayClick={(e, id) => console.log("Play single", e, id)}
          />
        ))}
      </div>
    </MovieSection>
  );
};

export default CategoryContainer;
