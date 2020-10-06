import React from 'react';
import style from './SearchSection.module.css';
import Button from '../../Generic/Button/Button';

const SearchSection = () => {
  return (
    <div className={style.search__container}>
      <h1>NetflixRoulette</h1>
      <p>FIND YOUR MOVIE</p>
      <input type="text" className={style.formControl}></input>
      <div className={style.btn__container}>
        <div className={style.searchBy}>
          <span>SEARCH BY</span>
          <div className="btn-group" role="group">
            <Button btnStyle="btnSearchBy" textBtn="TITLE" />
            <Button btnStyle="btnSearchBy" textBtn="GENRE" />
          </div>
        </div>
        <Button btnStyle="btnSearch" textBtn="SEARCH" />
      </div>
    </div>
  );
};

export default SearchSection;
