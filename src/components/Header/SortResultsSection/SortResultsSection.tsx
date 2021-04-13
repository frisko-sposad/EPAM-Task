import React, { FC, useCallback } from 'react';
import router, { useRouter } from 'next/router';
import Button from '../../Generic/Button/Button';
import { ConvertedMovie } from '../../App.types';
import SortResultContainer from './SortResultsSection.styled';
import VariantBtn from '../../Generic/Button/Button.types';

interface SortResultsSectionProps {
  isSearchPage?: boolean;
  movie?: ConvertedMovie | null | undefined;
  moviesFound?: number;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({ isSearchPage, movie, moviesFound }) => {
  const { genres } = movie ?? {};
  const { sortBy, search, searchBy } = useRouter().query;

  const handleSortMoviesClick = useCallback(
    (option) => () => {
      router.push(`/search/?sortBy=${option ?? 'release_date'}&search=${search}&searchBy=${searchBy}`);
    },
    [search, searchBy],
  );

  return (
    <SortResultContainer>
      {isSearchPage ? (
        <>
          {moviesFound !== 0 && moviesFound && (
            <>
              <span>
                <strong>{`${moviesFound} movies found`}</strong>
              </span>
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
            </>
          )}
        </>
      ) : (
        <div>
          <span>
            <strong>Films by: </strong>
          </span>
          {genres && <span>{genres[0]} genre</span>}
        </div>
      )}
    </SortResultContainer>
  );
};

export default SortResultsSection;
