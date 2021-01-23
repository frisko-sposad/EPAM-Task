import {
  SET_SEARCH_MOVIES,
  SET_SEARCH_MOVIE_BY_ID,
  SET_SEARCH_BY,
  SET_SORT_MOVIES,
  SET_CURRENT_REQUEST,
  SET_IS_SEARCH_SHOWN,
  AppState,
  Action,
  SearchMoviesResult,
  ConvertedMovie,
} from './App.types';

const initialState: AppState = {
  movies: [],
  movie: null,
  searchByOption: 'title',
  searchQuery: '',
  sortByOption: 'release_date',
  moviesFound: 0,
  isSearchShown: false,
  genre: '',
};

export default function rootReducer(state = initialState, { type, result }: Action): AppState {
  switch (type) {
    case SET_SEARCH_MOVIES: {
      const { movies, moviesFound } = result as SearchMoviesResult;
      return { ...state, movies, moviesFound };
    }
    case SET_SEARCH_MOVIE_BY_ID:
      return { ...state, movie: result as ConvertedMovie };
    case SET_SEARCH_BY:
      return { ...state, searchByOption: result as string };
    case SET_SORT_MOVIES:
      return { ...state, sortByOption: result as string };
    case SET_CURRENT_REQUEST:
      return { ...state, searchQuery: result as string };
    case SET_IS_SEARCH_SHOWN:
      return { ...state, isSearchShown: result as boolean };
    default:
      return state;
  }
}
