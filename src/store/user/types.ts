export interface User {
  uid: number;
  name: string;
  email: string;
  mookmarkedMovies: number[];
}

export interface UserState {
  entities: {
    user: {
      profile: User | null;
      loading: "idle" | "pending";
      error: string | undefined;
    };
  };
}
