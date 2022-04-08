import React, { FC } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../store/movies/types";
import { useAppDispatch } from "../store";
import { updateBookmarkedIDs } from "../store/user/actions";
import { isMovieBookmarked } from "../common/helpers";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user/userSlice";

interface MovieCardSliderProps {
  moviesList?: Movie[];
}

const MovieCardSlider: FC<MovieCardSliderProps> = ({ moviesList }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector(userSelector);

  return (
    <section className="movie-card-slider">
      <div className="movie-card-slider__container">
        {moviesList &&
          moviesList.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isBookmarked={isMovieBookmarked(
                movie.id,
                user.profile!.bookmarkedIds
              )}
              onBookmarkClick={(_, movieIdx) =>
                dispatch(updateBookmarkedIDs(movieIdx))
              }
              onPlayClick={(e, id) => console.log("Play", e, id)}
            />
          ))}
      </div>
    </section>
  );
};

export default MovieCardSlider;
