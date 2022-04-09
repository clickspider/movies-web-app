import React, { FC } from "react";
import { Movie } from "../store/movies/types";
import icons from "../assets/icons";
import IconContainer from "./IconContainer";
import Button from "./Button";

interface MovieCardProps {
  movie: Movie;
  mode?: "card-small" | "card-large";
  onBookmarkClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: Movie["id"]
  ) => void;
  onPlayClick: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: Movie["id"]
  ) => void;
  isBookmarked: boolean;
}

const MovieCard: FC<MovieCardProps> = ({
  mode = "card-large",
  movie,
  onBookmarkClick,
  onPlayClick,
  isBookmarked = false,
}) => {
  return (
    <div className={`movie-card ${mode}`}>
      <div
        className="movie-card__overlay-button"
        onClick={(event) => onPlayClick(event, movie.id)}
      >
        <Button className="movie-card__play-button">
          <IconContainer className="icon-container__play-icon">
            <icons.iconPlay />
          </IconContainer>
          <span className="heading-tertiary">Play</span>
        </Button>
      </div>
      <img
        src={
          movie.thumbnail?.trending?.large || movie.thumbnail?.regular?.large
        }
        alt={movie.title}
      />
      <Button
        className="movie-card__bookmark-button"
        onClick={(event) => onBookmarkClick(event, movie.id)}
      >
        {isBookmarked ? (
          <IconContainer className="icon-container__bookmarked">
            <icons.iconBookmarkFull />
          </IconContainer>
        ) : (
          <IconContainer>
            <icons.iconBookmarkEmpty />
          </IconContainer>
        )}
      </Button>
      {mode === "card-large" && <div className="movie-card__bg-layer"></div>}
      <div
        className={
          mode === "card-large"
            ? "movie-card__content-large"
            : "movie-card__content-small"
        }
      >
        <ul className="movie-card__content-list">
          <li className="movie-card__content-list--item">{movie.year}</li>
          <li className="movie-card__content-list--item mx-8">&#8226;</li>
          <li className="movie-card__content-list--item">
            {movie.category === "Movie" ? (
              <icons.iconCategoryMovie className="mr-6 fill-white stroke-none" />
            ) : (
              <icons.iconCategoryTV className="mr-6 fill-white stroke-none" />
            )}

            {movie.category}
          </li>
          {mode === "card-large" ? (
            <>
              <li className="movie-card__content-list--item mx-8 d-none d-md-block">
                &#8226;
              </li>
              <li className="movie-card__content-list--rating-speical">
                {movie.rating}
              </li>
            </>
          ) : (
            <>
              <li className="movie-card__content-list--item mx-8">&#8226;</li>
              <li className="movie-card__content-list--item">{movie.rating}</li>
            </>
          )}
        </ul>
        <h3 className="movie-card__content-title heading-secondary">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
