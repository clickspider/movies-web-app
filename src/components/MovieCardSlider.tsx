import React, { FC } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../store/movies/types";

interface MovieCardSliderProps {
  moviesList?: Movie[];
}

const MovieCardSlider: FC<MovieCardSliderProps> = ({ moviesList }) => {
  return (
    <section className="movie-card-slider">
      {moviesList &&
        moviesList.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onBookmarkClick={(e, id) => console.log(e, id)}
          />
        ))}
    </section>
  );
};

export default MovieCardSlider;
