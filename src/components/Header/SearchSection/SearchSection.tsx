import React from 'react';
import './SearchSection.css';
import Button from '../../Generic/Button/Button';

<<<<<<< HEAD
interface SearchSectionProps {
  closeSearch: () => void;
}
const SearchSection = ({ closeSearch }: SearchSectionProps) => (
=======
interface SearchSectionProps { closeSearch: () => void }

const SearchSection = ({ closeSearch }:SearchSectionProps) => (
  
>>>>>>> 7b7863b... fixed bugs,
  <div className="search__container">
    <p>FIND YOUR MOVIE</p>
    <input type="text" className="search__search-query" />
    <div className="search-by__container">
      <div className="search-by-btn__container">
        <span>SEARCH BY</span>
        <div className="btn-group" role="group">
          <Button className="btn_search-by" buttonTitle="TITLE"></Button>
          <Button className="btn_search-by" buttonTitle="GENRE" ></Button>
        </div>
      </div>
<<<<<<< HEAD
      <Button className="btn_search" onClick={closeSearch}>
        SEARCH
      </Button>
=======
      <Button className="btn_search" onClick={ closeSearch } buttonTitle="SEARCH"></Button>
>>>>>>> 7b7863b... fixed bugs,
    </div>
  </div>
);

export default SearchSection;
