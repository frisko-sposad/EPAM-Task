import { SEARCH_MOVIES, SORT_MOVIES } from './App.actions';

const initialState = { movies: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, movies: action.result };
    case SORT_MOVIES:
      return { ...state, movies: action.result };
    default:
      return state;
  }
}


