import React, { FC, useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchInput from "./SearchInput";
import MainContainer from "./MainContainer";
import SideBarNavigation from "./SideBarNavigation";

import AllCatalog from "./AllCatalog";

import Bookmarked from "./Bookmarked";
import CategoryContainer from "./CategoryContainer";

const MainLayout: FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Search input", e.target.value);
      setSearchValue(e.target.value);
    },
    []
  );

  return (
    <BrowserRouter>
      <div className="main-container">
        <SideBarNavigation />
        <div className="main-content">
          <SearchInput onChange={onSearchInput} value={searchValue} />
          <main className="mt-34">
            <MainContainer>
              <Routes>
                <Route
                  path="*"
                  element={<AllCatalog searchValue={searchValue} />}
                />
                <Route
                  path="/movies-catalog"
                  element={
                    <CategoryContainer
                      category="Movie"
                      searchValue={searchValue}
                    />
                  }
                />
                <Route
                  path="/TV-catalog"
                  element={
                    <CategoryContainer
                      category="TV Series"
                      searchValue={searchValue}
                    />
                  }
                />
                <Route
                  path="/Bookmarked"
                  element={<Bookmarked searchValue={searchValue} />}
                />
              </Routes>
            </MainContainer>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MainLayout;
