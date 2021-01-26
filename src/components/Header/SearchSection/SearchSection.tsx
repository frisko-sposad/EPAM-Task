import React, { FC, KeyboardEvent, ChangeEvent, useState, useCallback } from 'react';
import './SearchSection.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { setSearchByOptionAction, setSearchQueryAction } from '../../App.actions';
import { AppDispatch } from '../../App.types';

interface SearchSectionProps {
  setSearchByOption: (searchByOption: string) => void;
  setSearchQuery: (query: string) => void;
  searchByOption: string;
}

const SearchSection: FC<SearchSectionProps> = ({ setSearchByOption, setSearchQuery, searchByOption }) => {
  const [inputValue, setInputValue] = useState('');
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
  const startMovieSearch = useCallback(() => {
    setSearchQuery(inputValue);
  }, [inputValue, setSearchQuery]);
  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      startMovieSearch();
    }
  };

  const handleSearchByOptonClick = useCallback((option: string) => () => setSearchByOption(option), [
    setSearchByOption,
  ]);

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
              onClick={handleSearchByOptonClick('title')}
            >
              TITLE
            </Button>
            <Button
              className={`btn_search-by ${searchByOption === 'genres' ? 'active' : ''}`}
              onClick={handleSearchByOptonClick('genres')}
            >
              GENRE
            </Button>
          </div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <Button className="btn_search" onClick={startMovieSearch}>
          SEARCH
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      setSearchByOption: setSearchByOptionAction,
      setSearchQuery: setSearchQueryAction,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SearchSection);
