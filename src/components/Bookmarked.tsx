import React, { FC } from "react";

import CategoryContainer from "./CategoryContainer";

const Bookmarked: FC = () => {
  return (
    <section>
      <CategoryContainer
        customSectionTitle="Bookmarked Movies"
        category="Movie"
        bookmarked
      />
      <CategoryContainer
        className="mt-100"
        customSectionTitle="Bookmarked TV Series"
        category="TV Series"
        bookmarked
      />
    </section>
  );
};

export default Bookmarked;
