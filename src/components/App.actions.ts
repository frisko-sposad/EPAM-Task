import { createSelector } from 'reselect';
import { convertMovieToCamelCase } from './App.helpers';
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
  sortByOption?: string | null,
  searchQuery?: string | null,
  searchByOption?: string | null,
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

export function fetchMovieByIdAndRelatedMovies(movieId: string) {
  return (dispatch: AppDispatch): void => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        const convertedMovie = data;
        // const convertedMovie = convertMovieToCamelCase(data);
        dispatch(searchMovieByIdAction(convertedMovie));
        dispatch(fetchMovies('release_date', convertedMovie.genres[0], 'genres'));
      });
  };
}

// export function convertMovie(movie: RawMovie) {
//   return (dispatch: AppDispatch): void => {
//     const convertedMovie = convertMovieToCamelCase(movie);
//     dispatch(searchMovieByIdAction(convertedMovie));
//   };
// }

// export const convertMovie(movie: RawMovie) {
//   return (dispatch: AppDispatch): void => {
//     const convertedMovie = convertMovieToCamelCase(movie);
//     dispatch(searchMovieByIdAction(convertedMovie));
//   };
// }

const unconvertedMovies = (state: { movie: RawMovie }) => state.movie;

export const convertMovie = createSelector(unconvertedMovies, (movie) =>
  movie !== null ? convertMovieToCamelCase(movie) : null,
);

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )
