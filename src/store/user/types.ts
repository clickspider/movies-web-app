export interface UserProfile {
  uid: string;
  email: string | null;
  bookmarkedIds: number[];
  photoURL: string | null;
  displayName: string | null;
}

export interface UserState {
  entities: {
    user: {
      profile: UserProfile | null;
      loading: "idle" | "pending";
      error: string | undefined;
    };
  };
}
