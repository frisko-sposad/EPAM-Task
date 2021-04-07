import React, { FC, KeyboardEvent, ChangeEvent, useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router';
import { Input, SearchByContainer, SearchByBtnContainer, SearchByBtnTitle } from './SearchSection.styled';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { AppDispatch, AppState } from '../../App.types';
import { fetchMovies } from '../../App.actions';
import VariantBtn from '../../Generic/Button/Button.types';

interface SearchSectionProps {
  searchMovies: (
    sortBy: string | string[] | undefined,
    search: string | string[] | undefined,
    searchBy: string | string[] | undefined,
  ) => void;
}

const SearchSection: FC<SearchSectionProps> = ({ searchMovies }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchByOption, setSearchByOption] = useState('title');
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const router = useRouter();
  const { sortBy, search, searchBy } = router.query;

  useEffect(() => {
    if (sortBy || search || searchBy) {
      searchMovies(sortBy, search, searchBy);
    }
  }, [searchMovies, sortBy, search, searchBy]);

  const handleClick = () => {
    if (inputValue !== '') {
      router.push({
        pathname: '/search',
        search: `?sortBy=${sortBy ?? 'release_date'}&search=${inputValue}&searchBy=${searchByOption}`,
      });
    }
  };

  const setSearchBy = useCallback(
    (option) => () => {
      setSearchByOption(option);
    },
    [],
  );

  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <p>FIND YOUR MOVIE</p>
      <Input placeholder="search" value={inputValue} onChange={changeInputValue} onKeyPress={handleEnterClick} />
      <SearchByContainer>
        <SearchByBtnContainer>
          <SearchByBtnTitle>SEARCH BY</SearchByBtnTitle>
          <div>
            <Button variant={VariantBtn.SearchBy} active={searchByOption === 'title'} onClick={setSearchBy('title')}>
              TITLE
            </Button>
            <Button variant={VariantBtn.SearchBy} active={searchByOption === 'genres'} onClick={setSearchBy('genres')}>
              GENRE
            </Button>
          </div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </SearchByBtnContainer>
        <Button active variant={VariantBtn.Search} onClick={handleClick}>
          SEARCH
        </Button>
      </SearchByContainer>
    </>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      searchMovies: fetchMovies,
    },
    dispatch,
  );

const mapStateToProps = ({ movies }: AppState) => ({ movies });

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
