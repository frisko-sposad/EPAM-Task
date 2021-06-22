import React, { FC, KeyboardEvent, ChangeEvent, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Input, SearchByContainer, SearchByBtnContainer, SearchByBtnTitle } from './SearchSection.styled';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import VariantBtn from '../../Generic/Button/Button.types';

const SearchSection: FC = () => {
  const router = useRouter();
  const sortByParam = router?.query?.sortBy || 'release_date';
  const searchInput = router?.query?.search || '';

  const [inputValue, setInputValue] = useState(searchInput);
  const [searchByOption, setSearchByOption] = useState('title');
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleClick = () => {
    if (inputValue !== '') {
      router.push({
        pathname: '/search',
        search: `?sortBy=${sortByParam}&search=${inputValue}&searchBy=${searchByOption}`,
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

export default SearchSection;
