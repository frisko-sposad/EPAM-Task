import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { convertMovieToCamelCase } from './App.helpers';
import {
  SEARCH_MOVIES_ACTION,
  SEARCH_MOVIES_BY_ID_ACTION,
  SEARCH_BY,
  SORT_MOVIES_ACTION,
  CURRENT_REQUEST,
  IS_SEARCH_SHOWN,
  SearchMoviesResult,
  SearchMovies,
  ConvertedMovie,
  SearchMovieById,
  SetSearchByOption,
  SortMovies,
  SetSearchQuery,
  SetIsSearchShown,
  StateType,
} from './App.types';

export const searchMoviesAction = ({ movies, total }: SearchMoviesResult): SearchMovies => ({
  type: SEARCH_MOVIES_ACTION,
  result: { movies, total },
});

export const searchMovieByIdAction = (base: ConvertedMovie): SearchMovieById => ({
  type: SEARCH_MOVIES_BY_ID_ACTION,
  result: base,
});

export const setSearchByOption = (searchByOption: string): SetSearchByOption => ({
  type: SEARCH_BY,
  result: searchByOption,
});

export const sortMovies = (sortBy: string): SortMovies => ({
  type: SORT_MOVIES_ACTION,
  result: sortBy,
});

export const setSearchQuery = (query: string): SetSearchQuery => ({
  type: CURRENT_REQUEST,
  result: query,
});

export const setIsSearchShown = (isSearchShown: boolean): SetIsSearchShown => ({
  type: IS_SEARCH_SHOWN,
  result: isSearchShown,
});

export function fetchMovies() {
  return (dispatch: Dispatch, getState: () => StateType): void => {
    const { searchByOption, searchQuery, sortBy } = getState();
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchQuery}&searchBy=${searchByOption}`,
    )
      .then((res) => res.json())
      .then(({ data, total }) => {
        const mappedData = data.map(convertMovieToCamelCase);
        dispatch(searchMoviesAction({ movies: mappedData, total }));
      });
  };
}

export function searchMovieByIdAndRelatedMovies(movieId: number) {
  return (dispatch: ThunkDispatch<StateType, void, Action>): void => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        const camelCaseData = convertMovieToCamelCase(data);
        dispatch(searchMovieByIdAction(camelCaseData));
        dispatch(setSearchByOption('genres'));
        dispatch(setSearchQuery(camelCaseData.genres[0]));
        dispatch(searchMovies());
      });
  };
}
