import React, { FC } from 'react';
import './SortResultsSection.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSortByOptionAction } from '../../App.actions';
import { AppDispatch } from '../../App.types';
import Button from '../../Generic/Button/Button';

interface SortResultsSectionProps {
  isSearchShown: boolean;
  genre?: string;
  moviesFound?: number;
  sortBy?: string;
  sortMovies: (sortBy: string) => void;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({ isSearchShown, genre, moviesFound, sortBy, sortMovies }) => {
  const handleSortMoviesClick = (option: string) => () => sortMovies(option);
  return (
    <section className="result-sort__container">
      <div>
        {isSearchShown ? (
          <>
            <span className="filmsBy">
              <strong>Films by: </strong>
            </span>
            {genre && <span className="genre">{genre} genre</span>}
          </>
        ) : (
          <span>
            <strong className="moviesFound">{`${moviesFound} movies found`}</strong>
          </span>
        )}
      </div>

      {!isSearchShown && (
        <div>
          <span className="sortBy">
            <strong>Sort by: </strong>
          </span>
          <Button
            type="button"
            className={`btn_sort ${sortBy === 'release_date' ? 'btn_sort_active' : ''}`}
            onClick={handleSortMoviesClick('release_date')}
          >
            release date
          </Button>
          <Button
            type="button"
            className={`btn_sort ${sortBy === 'vote_average' ? 'btn_sort_active' : ''}`}
            onClick={handleSortMoviesClick('vote_average')}
          >
            rating
          </Button>
        </div>
      )}
    </section>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      sortMovies: setSortByOptionAction,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SortResultsSection);
