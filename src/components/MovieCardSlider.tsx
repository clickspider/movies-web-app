import React, { FC } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../store/movies/types";

interface MovieCardSliderProps {
  moviesList?: Movie[];
}

const MovieCardSlider: FC<MovieCardSliderProps> = ({ moviesList }) => {
  return (
    <section className="movie-card-slider">
      <div className="movie-card-slider__container">
        {moviesList &&
          moviesList.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onBookmarkClick={(e, id) => console.log("BookMark", e, id)}
              onPlayClick={(e, id) => console.log("Play", e, id)}
            />
          ))}
      </div>
    </section>
  );
};

export default MovieCardSlider;
