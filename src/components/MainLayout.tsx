import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SideBarNavigation from "./SideBarNavigation";

import AllCatalog from "./AllCatalog";
import MoviesCatalog from "./MoviesCatalog";
import TvCatalog from "./TvCatalog";
import SavedCatalog from "./SavedCatalog";

const MainLayout: FC = ({ children }) => (
  <>
    <BrowserRouter>
      <div className="main-container">
        <SideBarNavigation />
        <div className="main-content">
          <Header />
          <main>
            <Routes>
              <Route path="*" element={<AllCatalog />} />
              <Route path="/movies-catalog" element={<MoviesCatalog />} />
              <Route path="/TV-catalog" element={<TvCatalog />} />
              <Route path="/saved-catalog" element={<SavedCatalog />} />
            </Routes>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </>
);

export default MainLayout;
