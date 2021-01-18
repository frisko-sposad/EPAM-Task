import React, { FC, useState } from 'react';
import './SearchSection.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Button from '../../Generic/Button/Button';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import BuggyCounter from '../ErrorBoundary/BuggyCounter';
import { fetchMovies, setSearchByOption, setSearchQuery } from '../../App.actions';
import { SearchMovies, SetSearchByOption, SetSearchQuery } from '../../App.types';

interface SearchSectionProps {
  searchMovies: SearchMovies;
  setSearchByOption: SetSearchByOption;
  setSearchQuery: SetSearchQuery;
}

const SearchSection: FC<SearchSectionProps> = ({ searchMovies, setSearchByOption, setSearchQuery, searchByOption }) => {
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
            <Button
              className={`btn_search-by ${searchByOption === 'title' ? 'active' : ''}`}
              onClick={() => setSearchByOption('title')}
            >
              TITLE
            </Button>
            <Button
              className={`btn_search-by ${searchByOption === 'genres' ? 'active' : ''}`}
              onClick={() => setSearchByOption('genres')}
            >
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
      searchMovies: fetchMovies,
      setSearchByOption,
      setSearchQuery,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(SearchSection);
