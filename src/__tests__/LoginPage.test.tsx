import { render, screen } from "../common/test-utils";
import LoginPage from "../components/LoginPage";
import { UserState } from "../store/user/types";

const initStateLoggedIn: UserState = {
  entities: {
    user: {
      profile: {
        uid: "123",
        email: "123@gmail.com",
        bookmarkedIds: [],
        photoURL: null,
        displayName: "123 name",
      },
      loading: "idle",
      error: undefined,
    },
  },
};

describe("Login Page", () => {
  it("should render the Login Page when no User is logged in", () => {
    render(<LoginPage />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  // it.only("should NOT render the Login Page when a User is logged in", () => {
  //   render(<App />, {
  //     route: "/",
  //     initialState: initStateLoggedIn,
  //   });
  //   screen.getByRole("");
  //   // expect(screen.getByText("Login")).toBeInTheDocument();
  // });
});
