import React from 'react';
import './SearchSection.css';
import Button from '../../Generic/Button/Button';

const SearchSection = () => (
  <div className="search__container">
    <p>FIND YOUR MOVIE</p>
    <input type="text" className="search__search-query" />
    <div className="search-by__container">
      <div className="search-by-btn__container">
        <span>SEARCH BY</span>
        <div className="btn-group" role="group">
          <Button className="btn_search-by">TITLE</Button>
          <Button className="btn_search-by">GENRE</Button>
        </div>
      </div>
      <Button className="btn_search">SEARCH</Button>
    </div>
  </div>
);

export default SearchSection;
