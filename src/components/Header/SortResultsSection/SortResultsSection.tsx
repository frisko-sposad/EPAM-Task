import React, { FC } from 'react';
import './SortResultsSection.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { searchMovies, sortMovies } from '../../App.actions';

interface SortResultsSectionProps {
  filmsBy?: string;
  genre?: string;
  moviesFound?: string;
  sortBy?: string;
  releaseDate?: string;
  rating?: string;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({
  filmsBy,
  genre,
  moviesFound,
  sortBy,
  releaseDate,
  rating,
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
    {sortBy && (
      <div>
        <span className="sortBy">
          <strong>{sortBy}</strong>
        </span>
        <button
          type="button"
          className="btn_sort releaseDate"
          onClick={() => {
            sortMovies('release_date');
            searchMovies();
          }}
        >
          {releaseDate}
        </button>
        <button
          type="button"
          className="btn_sort rating"
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      sortMovies,
      searchMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SortResultsSection);
