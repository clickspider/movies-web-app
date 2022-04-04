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
  category: string;
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
