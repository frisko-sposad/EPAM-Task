import { convertMovieToCamelCase } from './App.helpers';
import {
  SET_SEARCH_MOVIES,
  SET_SEARCH_MOVIE_BY_ID,
  SET_SEARCH_BY,
  SET_SORT_MOVIES,
  SET_CURRENT_REQUEST,
  SET_IS_SEARCH_SHOWN,
  SearchMoviesResult,
  SearchMovies,
  ConvertedMovie,
  SearchMovieById,
  SetSearchByOption,
  SortMovies,
  SetSearchQuery,
  SetIsSearchShown,
  AppState,
  AppDispatch,
} from './App.types';

export const searchMoviesAction = (result: SearchMoviesResult): SearchMovies => ({
  type: SET_SEARCH_MOVIES,
  result,
});

export const searchMovieById = (base: ConvertedMovie): SearchMovieById => ({
  type: SET_SEARCH_MOVIE_BY_ID,
  result: base,
});

export const setSearchByOptionAction = (searchByOption: string): SetSearchByOption => ({
  type: SET_SEARCH_BY,
  result: searchByOption,
});

export const setSortByOptionAction = (sortByOption: string): SortMovies => ({
  type: SET_SORT_MOVIES,
  result: sortByOption,
});

export const setSearchQueryAction = (query: string): SetSearchQuery => ({
  type: SET_CURRENT_REQUEST,
  result: query,
});

export const setIsSearchShownAction = (isSearchShown: boolean): SetIsSearchShown => ({
  type: SET_IS_SEARCH_SHOWN,
  result: isSearchShown,
});

export function fetchMovies() {
  return (dispatch: AppDispatch, getState: () => AppState): void => {
    const { searchByOption, searchQuery, sortByOption } = getState();
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByOption}&sortOrder=desc&search=${searchQuery}&searchBy=${searchByOption}`,
    )
      .then((res) => res.json())
      .then(({ data, total }) => {
        const mappedData = data.map(convertMovieToCamelCase);
        dispatch(searchMoviesAction({ movies: mappedData, moviesFound: total }));
      });
  };
}

export function fetchMovieByIdAndRelatedMovies(movieId: number) {
  return (dispatch: AppDispatch): void => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        const convertedMovie = convertMovieToCamelCase(data);
        dispatch(searchMovieById(convertedMovie));
        dispatch(setSearchByOptionAction('genres'));
        dispatch(setSearchQueryAction(convertedMovie.genres[0]));
        dispatch(fetchMovies());
      });
  };
}
