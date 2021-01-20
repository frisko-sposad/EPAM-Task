import React, { FC } from 'react';
import './SortResultsSection.css';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { fetchMovies, sortMoviesAction } from '../../App.actions';
import { Action, StateType } from '../../App.types';

interface SortResultsSectionProps {
  filmsBy?: string;
  genre?: string;
  moviesFound?: string;
  sortByTitle?: string;
  releaseDate?: string;
  rating?: string;
  sortBy?: string;
  sortMovies: (sortBy: string) => void;
  searchMovies: () => void;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({
  filmsBy,
  genre,
  moviesFound,
  sortByTitle,
  releaseDate,
  rating,
  sortBy,
  sortMovies,
  searchMovies,
}) => (
  <section className="result-sort__container">
    {(filmsBy || moviesFound) && (
      <div>
        <span className="filmsBy">
          <strong>{filmsBy}</strong>
        </span>
        <span>
          <strong className="moviesFound">{moviesFound}</strong>
        </span>
        {genre && <span className="genre">{genre}</span>}
      </div>
    )}
    {sortByTitle && (
      <div>
        <span className="sortBy">
          <strong>{sortByTitle}</strong>
        </span>
        <button
          type="button"
          className={`btn_sort ${sortBy === 'release_date' ? 'btn_sort_active' : ''}`}
          onClick={() => {
            sortMovies('release_date');
            searchMovies();
          }}
        >
          {releaseDate}
        </button>
        <button
          type="button"
          className={`btn_sort ${sortBy === 'vote_average' ? 'btn_sort_active' : ''}`}
          onClick={() => {
            sortMovies('vote_average');
            searchMovies();
          }}
        >
          {rating}
        </button>
      </div>
    )}
  </section>
);

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, Action>) =>
  bindActionCreators(
    {
      sortMovies: sortMoviesAction,
      searchMovies: fetchMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SortResultsSection);
