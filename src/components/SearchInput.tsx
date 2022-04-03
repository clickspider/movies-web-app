import React, { useCallback } from "react";
import icons from "../assets/icons";
import { useLocation } from "react-router-dom";

const SearchInput = () => {
  const location = useLocation();
  const getTabName = useCallback(() => {
    switch (location.pathname) {
      case "/movies-catalog":
        return "Movies";
      case "/TV-catalog":
        return "TV Series";
      case "/bookmarked":
        return "bookmarked shows";
      default:
        return "Movies or TV Series";
    }
  }, [location]);

  return (
    <section className="search-input">
      <icons.iconSearch />
      <div className="search-input__container">
        <input type="text" placeholder={"Search for " + getTabName()} />
      </div>
    </section>
  );
};

export default SearchInput;
