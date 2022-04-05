import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import SearchInput from "./SearchInput";
import MainContainer from "./MainContainer";
import SideBarNavigation from "./SideBarNavigation";

interface MainLayoutProps {
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}
const MainLayout: FC<MainLayoutProps> = ({ onSearchInput, searchValue }) => {
  return (
    <div className="main-container">
      <SideBarNavigation />
      <div className="main-content">
        <SearchInput onChange={onSearchInput} value={searchValue} />
        <main className="mt-34">
          <MainContainer>
            <Outlet />
          </MainContainer>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
