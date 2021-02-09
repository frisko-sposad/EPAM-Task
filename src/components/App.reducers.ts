import {
  SET_SEARCH_MOVIES,
  SET_SEARCH_MOVIE_BY_ID,
  AppState,
  Action,
  SearchMoviesResult,
  ConvertedMovie,
} from './App.types';

const initialState: AppState = {
  movies: [],
  movie: null,
  moviesFound: 0,
};

export default function rootReducer(state = initialState, { type, result }: Action): AppState {
  switch (type) {
    case SET_SEARCH_MOVIES: {
      const { movies, moviesFound } = result as SearchMoviesResult;
      return { ...state, movies, moviesFound };
    }
    case SET_SEARCH_MOVIE_BY_ID:
      return { ...state, movie: result as ConvertedMovie };
    default:
      return state;
  }
}
