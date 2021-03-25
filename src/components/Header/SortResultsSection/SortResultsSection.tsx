import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../Generic/Button/Button';
import { AppState, ConvertedMovie } from '../../App.types';
import { useSearchParams } from '../../App.helpers';
import SortResultContainer from './SortResultsSection.styled';
import VariantBtn from '../../Generic/Button/Button.types';

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
    <SortResultContainer>
      {moviesFound !== 0 && (
        <>
          {isSearchShown ? (
            <div>
              <span>
                <strong>Films by: </strong>
              </span>
              {genres && <span>{genres[0]} genre</span>}
            </div>
          ) : (
            <span>
              <strong>{`${moviesFound} movies found`}</strong>
            </span>
          )}
          {!isSearchShown && (
            <div>
              <span>
                <strong>Sort by: </strong>
              </span>
              <Button
                variant={VariantBtn.SortBy}
                active={sortBy === 'release_date'}
                onClick={handleSortMoviesClick('release_date')}
              >
                release date
              </Button>
              <Button
                variant={VariantBtn.SortBy}
                active={sortBy === 'vote_average'}
                onClick={handleSortMoviesClick('vote_average')}
              >
                rating
              </Button>
            </div>
          )}
        </>
      )}
    </SortResultContainer>
  );
};

const mapStateToProps = ({ movie, moviesFound }: AppState) => ({
  movie,
  moviesFound,
});

export default connect(mapStateToProps, null)(SortResultsSection);
