import React, { FC } from 'react';
import './SearchSection.css';
import Button from '../../Generic/Button/Button';

interface SearchSectionProps {
  closeSearch: () => void;
}
const SearchSection: FC<SearchSectionProps> = ({ closeSearch }: SearchSectionProps) => (
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
      <Button className="btn_search" onClick={closeSearch}>
        SEARCH
      </Button>
    </div>
  </div>
);

export default SearchSection;
