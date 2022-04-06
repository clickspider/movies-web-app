export enum Categories {
  Movie = "Movie",
  TVSeries = "TV Series",
}
export interface Movie {
  title: string;
  id: number;
  thumbnail?: {
    trending: {
      small: string;
      medium: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: Categories;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface MoviesState {
  entities: {
    movies: {
      moviesList: Movie[];
      loading: "idle" | "pending";
      error: string | undefined;
    };
  };
}
