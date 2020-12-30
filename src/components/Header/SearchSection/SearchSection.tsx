import React, { FC, useState } from 'react';
import './SearchSection.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { searchMovies, setSearchByOption, setSearchQuery } from '../../App.actions';

interface SearchSectionProps {
  closeSearch: () => void;
}

const SearchSection: FC<SearchSectionProps> = ({ searchMovies, setSearchByOption, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const chengeSearchQuery = (e) => setInputValue(e.target.value);
  const sendSearchQueryIfClickingEnter = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue);
      searchMovies();
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
        onChange={chengeSearchQuery}
        onKeyPress={sendSearchQueryIfClickingEnter}
      />
      <div className="search-by__container">
        <div className="search-by-btn__container">
          <span>SEARCH BY</span>
          <div className="btn-group" role="group">
            <Button className="btn_search-by" onClick={() => setSearchByOption('title')}>
              TITLE
            </Button>
            <Button className="btn_search-by" onClick={() => setSearchByOption('genres')}>
              GENRE
            </Button>
          </div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <Button
          className="btn_search"
          onClick={() => {
            setSearchQuery(inputValue);
            searchMovies();
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      searchMovies,
      setSearchByOption,
      setSearchQuery,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SearchSection);
