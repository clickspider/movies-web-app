import { addDoc, collection, db } from "./fbConfig";
import { Movie } from "../store/movies/types";
import data from "./data.json";

export const isMovieBookmarked = (
  movieIdx: number,
  bookmarkedIdsArray: number[]
) => {
  const isBookmarked = bookmarkedIdsArray.includes(movieIdx);
  return isBookmarked;
};

export const addMockDataToFirestone = (function () {
  const {
    movies: { moviesList },
  }: { movies: { moviesList: Movie[] } } = JSON.parse(JSON.stringify(data));
  let executed = false;
  return function () {
    if (!executed) {
      executed = true;
      moviesList.forEach(async function ({
        title,
        id,
        thumbnail,
        year,
        category,
        rating,
        isBookmarked,
        isTrending,
      }) {
        return await addDoc(collection(db, "moviesList"), {
          title,
          id,
          thumbnail,
          year,
          category,
          rating,
          isBookmarked,
          isTrending,
        });
      });
    }
  };
})();
