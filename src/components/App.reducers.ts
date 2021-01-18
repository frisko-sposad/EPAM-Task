import {
  SEARCH_MOVIES_ACTION,
  SEARCH_MOVIES_BY_ID_ACTION,
  SEARCH_BY,
  SORT_MOVIES_ACTION,
  CURRENT_REQUEST,
  IS_SEARCH_SHOWN,
  StateType,
} from './App.types';

const initialState: StateType = {
  movies: [],
  movie: {},
  searchByOption: 'title',
  searchQuery: '',
  sortBy: 'release_date',
  total: 0,
  isSearchShown: true,
  movieId: 17,
  genre: '',
};

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType =
  | Action<'SEARCH_MOVIES_ACTION', { value: string }>
  | Action<'SEARCH_MOVIES_BY_ID_ACTION', { value: string }>
  | Action<'SEARCH_BY', { value: string }>
  | Action<'SORT_MOVIES_ACTION', { value: string }>
  | Action<'CURRENT_REQUEST', { value: string }>
  | Action<'IS_SEARCH_SHOWN', { value: string }>;

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_ACTION:
      return { ...state, movies: action.result.movies, total: action.result.total };
    case SEARCH_MOVIES_BY_ID_ACTION:
      return { ...state, movie: action.result };
    case SEARCH_BY:
      return { ...state, searchByOption: action.result };
    case SORT_MOVIES_ACTION:
      return { ...state, sortBy: action.result };
    case CURRENT_REQUEST:
      return { ...state, searchQuery: action.result };
    case IS_SEARCH_SHOWN:
      return { ...state, isSearchShown: action.result };
    default:
      return state;
  }
}
