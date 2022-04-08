import React, { FC, useState, useCallback } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import SearchInput from "./SearchInput";
import MainContainer from "./MainContainer";
import SideBarNavigation from "./SideBarNavigation";

type ContextType = { searchValue: string };

const MainLayout: FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );
  return (
    <div className="main-container">
      <SideBarNavigation />
      <div className="main-content">
        <SearchInput onChange={onSearchInput} value={searchValue} />
        <main className="mt-34">
          <MainContainer>
            <Outlet context={{ searchValue }} />
          </MainContainer>
        </main>
      </div>
    </div>
  );
};

export function useSearch() {
  return useOutletContext<ContextType>();
}

export default MainLayout;
