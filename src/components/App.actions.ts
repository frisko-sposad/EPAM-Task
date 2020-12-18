export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SORT_MOVIES = 'SORT_MOVIES';

export const seachMovies = () => ({
  type: SEARCH_MOVIES,
  result: [],
});

export const sortMovies = () => ({
  type: SORT_MOVIES,
  result: [],
});
