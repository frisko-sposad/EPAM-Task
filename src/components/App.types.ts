import { ThunkDispatch } from 'redux-thunk';

export const SET_SEARCH_MOVIES = 'SET_SEARCH_MOVIES';
export const SET_SEARCH_MOVIE_BY_ID = 'SET_SEARCH_MOVIE_BY_ID';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_MOVIES = 'SET_SORT_MOVIES';
export const SET_CURRENT_REQUEST = 'SET_CURRENT_REQUEST';
export const SET_IS_SEARCH_SHOWN = 'SET_IS_SEARCH_SHOWN';

export interface AppState {
  movies: ConvertedMovie[];
  movie: ConvertedMovie | null;
  searchByOption: string;
  searchQuery: string;
  sortByOption: string;
  moviesFound: number;
  isSearchShown: boolean;
  genre: string;
}

export interface RawMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  release_date: string;
  genres: string[];
  poster_path: string;
  overview: string;
  runtime: number | null;
}

export interface ConvertedMovie {
  id: number;
  title: string;
  tagline: string;
  voteAverage: number;
  releaseDate: string;
  genres: string[];
  posterPath: string;
  overview: string;
  runtime: number | null;
}

export type MovieItemType = Pick<ConvertedMovie, 'id' | 'posterPath' | 'title' | 'releaseDate' | 'genres'>;

export interface SearchMoviesResult {
  movies: ConvertedMovie[];
  moviesFound: number;
}

export interface SearchMovies {
  type: typeof SET_SEARCH_MOVIES;
  result: SearchMoviesResult;
}

export interface SearchMovieById {
  type: typeof SET_SEARCH_MOVIE_BY_ID;
  result: ConvertedMovie;
}

export interface SetSearchByOption {
  type: typeof SET_SEARCH_BY;
  result: string;
}

export interface SortMovies {
  type: typeof SET_SORT_MOVIES;
  result: string;
}

export interface SetSearchQuery {
  type: typeof SET_CURRENT_REQUEST;
  result: string;
}

export interface SetIsSearchShown {
  type: typeof SET_IS_SEARCH_SHOWN;
  result: boolean;
}

export type Action =
  | SearchMovies
  | SearchMovieById
  | SetSearchByOption
  | SortMovies
  | SetSearchQuery
  | SetIsSearchShown;

export type AppDispatch = ThunkDispatch<AppState, void, Action>;
