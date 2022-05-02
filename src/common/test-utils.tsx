import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { moviesSlice } from "../store/movies/moviesSlice";
import { userSlice } from "../store/user/userSlice";

interface WrapperProps {
  children?: React.ReactNode;
}

function render(ui: any, { route = "/", initialState = {} } = {}) {
  window.history.pushState({}, "Test page", route);
  const store = configureStore({
    reducer: {
      movies: moviesSlice.reducer,
      user: userSlice.reducer,
    },
    preloadedState: initialState,
  });

  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
