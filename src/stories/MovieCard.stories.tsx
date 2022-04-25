import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "../components/MovieCard";
import { Categories } from "../store/movies/types";

const BASE_URL = "https://inspiring-bubblegum-34cb15.netlify.app";

const MOVIE = {
  title: "Beyond Earth",
  id: 0,
  thumbnail: {
    trending: {
      small: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/trending/small.jpg`,
      medium: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/trending/medium.jpg`,
      large: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/trending/large.jpg`,
    },
    regular: {
      small: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/regular/small.jpg`,
      medium: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg`,
      large: `${BASE_URL}/assets/thumbnails/dark-side-of-the-moon/regular/large.jpg`,
    },
  },
  year: 2019,
  category: Categories.Movie,
  rating: "PG",
  isBookmarked: false,
  isTrending: true,
};

export default {
  title: "MovieCard",
  component: MovieCard,
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const CardLarge = (args: any) => {
  return (
    <Template {...args} movie={MOVIE}>
      {" "}
    </Template>
  );
};

export const CardSmall = Template.bind({});
CardSmall.args = {
  mode: "card-small",
  movie: MOVIE,
};
