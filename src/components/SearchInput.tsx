import React, { FC } from "react";
import icons from "../assets/icons";
import { useLocation } from "react-router-dom";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  const location = useLocation();
  const getTabName = () => {
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
  };
  return (
    <section className="search-input">
      <icons.iconSearch />
      <div className="search-input__container">
        <input
          type="text"
          placeholder={"Search for " + getTabName()}
          value={value}
          onChange={onChange}
        />
      </div>
    </section>
  );
};

export default SearchInput;
