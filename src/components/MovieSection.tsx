import React, { FC } from "react";

interface MovieSectionProps {
  title: string;
}

const MovieSection: FC<MovieSectionProps> = ({ children, title }) => (
  <section className="movie-section">
    <h1 className="movie-section__heading heading-primary">{title}</h1>
    {children}
  </section>
);

export default MovieSection;
