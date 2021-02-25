import React, { FC, KeyboardEvent, ChangeEvent, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { AppDispatch } from '../../App.types';
import { fetchMovies } from '../../App.actions';
import { useSearchParams } from '../../App.helpers';
import { Container, Input, SearchByContainer, SearchByBtnContainer, SearchByBtnTitle } from './SearchSection.styled';

interface SearchSectionProps {
  searchMovies: (sortBy: string, search: string, searchBy: string) => void;
}

const SearchSection: FC<SearchSectionProps> = ({ searchMovies }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchByOption, setSearchByOption] = useState('title');
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const { sortBy, search, searchBy } = useSearchParams(['sortBy', 'search', 'searchBy']);

  useEffect(() => {
    if (sortBy || search || searchBy) {
      searchMovies(sortBy, search, searchBy);
    }
  }, [searchMovies, sortBy, search, searchBy]);

  const history = useHistory();

  const handleClick = () => {
    if (inputValue !== '') {
      history.push({
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
    <Container>
      <p>FIND YOUR MOVIE</p>
      <Input placeholder="search" value={inputValue} onChange={changeInputValue} onKeyPress={handleEnterClick} />
      <SearchByContainer>
        <SearchByBtnContainer>
          <SearchByBtnTitle>SEARCH BY</SearchByBtnTitle>
          <div role="group">
            <Button variantBtn="searchBy" active={searchByOption === 'title'} onClick={setSearchBy('title')}>
              TITLE
            </Button>
            <Button variantBtn="searchBy" active={searchByOption === 'genres'} onClick={setSearchBy('genres')}>
              GENRE
            </Button>
          </div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </SearchByBtnContainer>
        <Button active={false} variantBtn="search" onClick={handleClick}>
          SEARCH
        </Button>
      </SearchByContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      searchMovies: fetchMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SearchSection);
