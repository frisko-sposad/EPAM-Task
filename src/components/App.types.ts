export const SEARCH_MOVIES_ACTION = 'SEARCH_MOVIES_ACTION';
export const SEARCH_MOVIES_BY_ID_ACTION = 'SEARCH_MOVIES_BY_ID_ACTION';
export const SEARCH_BY = 'SEARCH_BY';
export const SORT_MOVIES_ACTION = 'SORT_MOVIES_ACTION';
export const CURRENT_REQUEST = 'CURRENT_REQUEST';
export const IS_SEARCH_SHOWN = 'IS_SEARCH_SHOWN';

export interface StateType {
  movies: ConvertedMovie[];
  movie: ConvertedMovie | null;
  searchByOption: string;
  searchQuery: string;
  sortBy: string;
  total: number;
  isSearchShown: boolean;
  movieId: number;
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

export type MovieInfoType = Pick<
  ConvertedMovie,
  'id' | 'posterPath' | 'title' | 'releaseDate' | 'genres' | 'overview' | 'runtime'
> | null;

export interface SearchMoviesResult {
  movies: ConvertedMovie[];
  total: number;
}

export interface SearchMovies {
  type: typeof SEARCH_MOVIES_ACTION;
  result: SearchMoviesResult;
}

export interface SearchMovieById {
  type: typeof SEARCH_MOVIES_BY_ID_ACTION;
  result: ConvertedMovie;
}

export interface SetSearchByOption {
  type: typeof SEARCH_BY;
  result: string;
}

export interface SortMovies {
  type: typeof SORT_MOVIES_ACTION;
  result: string;
}

export interface SetSearchQuery {
  type: typeof CURRENT_REQUEST;
  result: string;
}

export interface SetIsSearchShown {
  type: typeof IS_SEARCH_SHOWN;
  result: boolean;
}

export type Action =
  | SearchMovies
  | SearchMovieById
  | SetSearchByOption
  | SortMovies
  | SetSearchQuery
  | SetIsSearchShown;
