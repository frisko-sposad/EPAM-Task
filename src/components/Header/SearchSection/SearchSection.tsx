import React, { FC, KeyboardEvent, ChangeEvent, useState, useCallback, useEffect } from 'react';
import './SearchSection.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { AppDispatch } from '../../App.types';
import { fetchMovies } from '../../App.actions';
import { useSearchParams } from '../../App.helpers';

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
    <div className="search__container">
      <p>FIND YOUR MOVIE</p>
      <input
        type="text"
        className="search__search-query"
        placeholder="search"
        value={inputValue}
        onChange={changeInputValue}
        onKeyPress={handleEnterClick}
      />
      <div className="search-by__container">
        <div className="search-by-btn__container">
          <span>SEARCH BY</span>
          <div className="btn-group" role="group">
            <Button
              className={`btn_search-by ${searchByOption === 'title' ? 'active' : ''}`}
              onClick={setSearchBy('title')}
            >
              TITLE
            </Button>
            <Button
              className={`btn_search-by ${searchByOption === 'genres' ? 'active' : ''}`}
              onClick={setSearchBy('genres')}
            >
              GENRE
            </Button>
          </div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <Button className="btn_search" onClick={handleClick}>
          SEARCH
        </Button>
      </div>
    </div>
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
