import React, { FC, memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '../Generic/Button/Button';
import SortResultContainer from './SortResultsSection.styled';
import VariantBtn from '../Generic/Button/Button.types';

interface SortResultsSectionProps {
  isSearchPage: boolean;
  genres?: string[];
  moviesCount: number;
}

const SortResultsSection: FC<SortResultsSectionProps> = ({ isSearchPage, genres, moviesCount }) => {
  const router = useRouter();
  const { sortBy, search, searchBy } = router?.query?.sortBy
    ? router?.query
    : {
        sortBy: 'release_date',
        search: '',
        searchBy: 'title',
      };

  const handleSortMoviesClickByReleaseDate = useCallback(() => {
    router.push(`/search/?sortBy=release_date&search=${search}&searchBy=${searchBy}`);
  }, [router, search, searchBy]);

  const handleSortMoviesClickByRating = useCallback(() => {
    router.push(`/search/?sortBy=vote_average&search=${search}&searchBy=${searchBy}`);
  }, [router, search, searchBy]);

  return (
    <SortResultContainer>
      {isSearchPage ? (
        moviesCount !== 0 && (
          <>
            <span>
              <strong>{`${moviesCount} movies found`}</strong>
            </span>
            <div>
              <span>
                <strong>Sort by: </strong>
              </span>
              <Button
                variant={VariantBtn.SortBy}
                active={sortBy === 'release_date'}
                onClick={handleSortMoviesClickByReleaseDate}
              >
                release date
              </Button>
              <Button
                variant={VariantBtn.SortBy}
                active={sortBy === 'vote_average'}
                onClick={handleSortMoviesClickByRating}
              >
                rating
              </Button>
            </div>
          </>
        )
      ) : (
        <div>
          <span>
            <strong>Films by: </strong>
          </span>
          {genres?.[0] ? <span>{genres[0]} genre</span> : <span>Unnone genre</span>}
        </div>
      )}
    </SortResultContainer>
  );
};

export default memo(SortResultsSection);
