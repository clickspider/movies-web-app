import React, { FC } from "react";

import CategoryContainer from "./CategoryContainer";

interface BookmarkedProps {
  searchValue: string;
}

const Bookmarked: FC<BookmarkedProps> = ({ searchValue }) => {
  return (
    <section>
      <CategoryContainer
        customSectionTitle="Bookmarked Movies"
        category="Movie"
        searchValue={searchValue}
        bookmarked
      />
      <CategoryContainer
        className="mt-100"
        customSectionTitle="Bookmarked TV Series"
        category="TV Series"
        searchValue={searchValue}
        bookmarked
      />
    </section>
  );
};

export default Bookmarked;
