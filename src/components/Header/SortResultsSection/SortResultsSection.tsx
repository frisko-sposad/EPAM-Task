import React, { FC } from 'react';
import './SortResultsSection.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { searchMovies, sortMovies } from '../../App.actions';
import { SearchMovies, SortMovies } from '../../App.types';

interface SortResultsSectionProps {
  filmsBy?: string;
  genre?: string;
  moviesFound?: string;
  sortByTitle?: string;
  releaseDate?: string;
  rating?: string;
  sortBy: string;
  sortMovies: SortMovies;
  searchMovies: SearchMovies;
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      sortMovies,
      searchMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SortResultsSection);
