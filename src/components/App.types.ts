import { ThunkDispatch } from 'redux-thunk';

export const SET_SEARCH_MOVIES = 'SET_SEARCH_MOVIES';
export const SET_SEARCH_MOVIE_BY_ID = 'SET_SEARCH_MOVIE_BY_ID';

export interface AppState {
  movies: ConvertedMovie[];
  movie: ConvertedMovie | null;
  moviesFound: number;
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

export type Action = SearchMovies | SearchMovieById;

export type AppDispatch = ThunkDispatch<AppState, void, Action>;
