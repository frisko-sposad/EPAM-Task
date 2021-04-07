import { createSelector } from 'reselect';
import convertMovieToCamelCase from './App.helpers';
import {
  SET_SEARCH_MOVIES,
  SET_SEARCH_MOVIE_BY_ID,
  CLEAR_MOVIES_ACTION,
  SearchMoviesResult,
  SearchMovies,
  ConvertedMovie,
  SearchMovieById,
  AppDispatch,
  ClearMovies,
  RawMovie,
  Movie,
} from './App.types';

export const searchMoviesAction = (result: SearchMoviesResult): SearchMovies => ({
  type: SET_SEARCH_MOVIES,
  result,
});

export const clearMoviesAction = (): ClearMovies => ({
  type: CLEAR_MOVIES_ACTION,
  result: { movies: [], moviesFound: 0 },
});

export const searchMovieByIdAction = (base: ConvertedMovie): SearchMovieById => ({
  type: SET_SEARCH_MOVIE_BY_ID,
  result: base,
});

export function fetchMovies(
  sortByOption?: string | string[] | undefined,
  searchQuery?: string | string[] | undefined,
  searchByOption?: string | string[] | undefined,
): (dispatch: AppDispatch) => void {
  return (dispatch: AppDispatch): void => {
    fetch(
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${
        sortByOption !== 'null' ? sortByOption : 'release_date'
      }&sortOrder=desc&search=${searchQuery ?? ''}&searchBy=${searchByOption || 'title'}`,
    )
      .then((res) => res.json())
      .then(({ data, total }) => {
        const mappedData = data.map(convertMovieToCamelCase);
        dispatch(searchMoviesAction({ movies: mappedData, moviesFound: total }));
      });
  };
}

export function fetchMovieByIdAndRelatedMovies(movieId: string | string[] | undefined) {
  return (dispatch: AppDispatch): void => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchMovieByIdAction(data));
        dispatch(fetchMovies('release_date', data.genres[0], 'genres'));
      });
  };
}

const selectMovie = (movie: Movie) => movie;

export const convertMovie = createSelector(selectMovie, (movie) =>
  movie !== null ? convertMovieToCamelCase(movie as RawMovie) : null,
);
