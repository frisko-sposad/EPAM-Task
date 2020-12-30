import { convertMovieToCamelCase } from './App.helpers';

export const SEARCH_MOVIES_ACTION = 'SEARCH_MOVIES_ACTION';
export const SEARCH_MOVIES_BY_ID_ACTION = 'SEARCH_MOVIES_BY_ID_ACTION';
export const SEARCH_BY = 'SEARCH_BY';
export const SORT_MOVIES_ACTION = 'SORT_MOVIES_ACTION';
export const CURRENT_REQUEST = 'CURRENT_REQUEST';
export const TOTAL_MOVIES = 'TOTAL_MOVIES';
export const IS_SEARCH_SHOWN = 'IS_SEARCH_SHOWN';
export const GET_MOVIE_ID = 'GET_MOVIE_ID';
export const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';

export const searchMoviesAction = (movies, total) => ({
  type: SEARCH_MOVIES_ACTION,
  result: { movies, total }
});

export const searchMovieByIdAction = (base) => ({
  type: SEARCH_MOVIES_BY_ID_ACTION,
  result: base,
});

export const setSearchByOption = (searchByOption: string) => ({
  type: SEARCH_BY,
  result: searchByOption,
});

export const sortMovies = (sortBy: string) => ({
  type: SORT_MOVIES_ACTION,
  result: sortBy,
});

export const setSearchQuery = (query: string) => ({
  type: CURRENT_REQUEST,
  result: query,
});

export const getTotalMovies = (total: string) => ({
  type: GET_TOTAL_MOVIES,
  result: total,
});

export const setIsSearchShown = (isSearchShown: boolean) => ({
  type: IS_SEARCH_SHOWN,
  result: isSearchShown,
});

export function searchMovies() {
  return (dispatch, getState) => {
    const { searchByOption, searchQuery, sortBy } = getState();
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchQuery}&searchBy=${searchByOption}`,
    )
      .then((res) => res.json())
      .then(({ data, total }) => {
        const mappedData = data.map(convertMovieToCamelCase);
        dispatch(searchMoviesAction(mappedData, total));
        // dispatch(getTotalMovies(total));
      });
  };
}

export function searchMovieByIdAndRelatedMovies(movieId) {
  return (dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchMovieByIdAction(data));
        dispatch(setSearchByOption('genres'));
        dispatch(setSearchQuery(data.genres[0]));
        dispatch(searchMovies());
      });
  };
}
