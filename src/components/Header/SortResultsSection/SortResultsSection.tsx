import React, { FC, useCallback } from 'react';
import './SortResultsSection.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../Generic/Button/Button';
import { AppState, ConvertedMovie } from '../../App.types';
import { useSearchParams } from '../../App.helpers';

interface SortResultsSectionProps {
  isSearchShown?: boolean;
  movie?: ConvertedMovie;
  moviesFound?: number;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({ isSearchShown, movie, moviesFound }) => {
  const { genres } = movie ?? {};

  const history = useHistory();

  const handleSortMoviesClick = useCallback(
    (option) => () => {
      const oldSearchURL = history.location.search.split('&');
      oldSearchURL.splice(0, 1, `?sortBy=${option}`);
      const newSearchURL = oldSearchURL.join('&');

      history.push({
        pathname: '/search',
        search: newSearchURL,
      });
    },
    [history],
  );

  const sortBy = useSearchParams(['sortBy']).sortBy || 'release_date';

  return (
    <section className="result-sort__container">
      {moviesFound !== 0 && (
        <div>
          {isSearchShown ? (
            <>
              <span className="filmsBy">
                <strong>Films by: </strong>
              </span>
              {genres && <span className="genre">{genres[0]} genre</span>}
            </>
          ) : (
            <span>
              <strong className="moviesFound">{`${moviesFound} movies found`}</strong>
            </span>
          )}
        </div>
      )}

      {!isSearchShown && moviesFound !== 0 && (
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

const mapStateToProps = ({ movie, moviesFound }: AppState) => ({
  movie,
  moviesFound,
});

export default connect(mapStateToProps, null)(SortResultsSection);
