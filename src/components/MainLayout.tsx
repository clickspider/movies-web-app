import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchInput from "./SearchInput";
// import Footer from "./Footer";
import SideBarNavigation from "./SideBarNavigation";

import AllCatalog from "./AllCatalog";
import MoviesCatalog from "./MoviesCatalog";
import TvCatalog from "./TvCatalog";
import Bookmarked from "./Bookmarked";

const MainLayout: FC = ({ children }) => (
  <>
    <BrowserRouter>
      <div className="main-container">
        <SideBarNavigation />
        <div className="main-content">
          <SearchInput />
          <main className="mt-34">
            <Routes>
              <Route path="*" element={<AllCatalog />} />
              <Route path="/movies-catalog" element={<MoviesCatalog />} />
              <Route path="/TV-catalog" element={<TvCatalog />} />
              <Route path="/Bookmarked" element={<Bookmarked />} />
            </Routes>
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  </>
);

export default MainLayout;
