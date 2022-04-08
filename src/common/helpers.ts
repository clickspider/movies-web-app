export const isMovieBookmarked = (
  movieIdx: number,
  bookmarkedIdsArray: number[]
) => {
  const isBookmarked = bookmarkedIdsArray.includes(movieIdx);
  return isBookmarked;
};
