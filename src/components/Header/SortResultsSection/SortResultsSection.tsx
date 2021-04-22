import React, { FC, useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '../../Generic/Button/Button';
import SortResultContainer from './SortResultsSection.styled';
import VariantBtn from '../../Generic/Button/Button.types';

interface SortResultsSectionProps {
  isSearchPage?: boolean;
  genres: string[] | undefined;
  moviesFound?: number;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({ isSearchPage, genres, moviesFound }) => {
  const router = useRouter();
  const sortByParam = router?.query.sortBy;
  const searchParam = router?.query.search;
  const searchByParam = router?.query.searchBy;

  const handleSortMoviesClick = useCallback(
    (option) => () => {
      router.push(`/search/?sortBy=${option ?? 'release_date'}&search=${searchParam}&searchBy=${searchByParam}`);
    },
    [router, searchParam, searchByParam],
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
                  active={sortByParam === 'release_date'}
                  onClick={handleSortMoviesClick('release_date')}
                >
                  release date
                </Button>
                <Button
                  variant={VariantBtn.SortBy}
                  active={sortByParam === 'vote_average'}
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
