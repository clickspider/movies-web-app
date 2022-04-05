import React, { FC } from "react";

interface MovieSectionProps {
  title: string;
  className?: string;
}

const MovieSection: FC<MovieSectionProps> = ({
  children,
  title,
  className,
}) => (
  <section className={`movie-section ${className ? className : ""}`}>
    <h1 className="movie-section__heading heading-primary">{title}</h1>
    {children}
  </section>
);

export default MovieSection;
