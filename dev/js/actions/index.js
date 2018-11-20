export const selectMovie = (movie) => {
  return {
    type: 'MOVIE_SELECT',
    payload: movie
  }
};