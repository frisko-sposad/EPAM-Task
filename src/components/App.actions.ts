import { convertMovieToCamelCase } from './App.helpers';
import {
  SET_SEARCH_MOVIES,
  SET_SEARCH_MOVIE_BY_ID,
  SearchMoviesResult,
  SearchMovies,
  ConvertedMovie,
  SearchMovieById,
  AppDispatch,
} from './App.types';

export const searchMoviesAction = (result: SearchMoviesResult): SearchMovies => ({
  type: SET_SEARCH_MOVIES,
  result,
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
      `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByOption || 'release_date'}&sortOrder=desc&search=${
        searchQuery ?? ''
      }&searchBy=${searchByOption || 'title'}`,
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
        const convertedMovie = convertMovieToCamelCase(data);
        dispatch(searchMovieByIdAction(convertedMovie));
        dispatch(fetchMovies('release_date', convertedMovie.genres[0], 'genres'));
      });
  };
}
