import React from 'react';
import style from './SearchSection.module.css';
import Button from '../../Generic/Button/Button';

const SearchSection = () => {
  return (
    <div className={style.search__container}>
      <p>FIND YOUR MOVIE</p>
      <input type="text" className={style.formControl}></input>
      <div className={style.btn__container}>
        <div className={style.searchBy}>
          <span>SEARCH BY</span>
          <div className="btn-group" role="group">
            <Button className="btnSearchBy">TITLE</Button>
            <Button className="btnSearchBy">GENRE</Button>
          </div>
        </div>
        <Button className="btnSearch">SEARCH</Button>
      </div>
    </div>
  );
};

export default SearchSection;
