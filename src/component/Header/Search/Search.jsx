import React from 'react';
import style from './Search.module.css';

const Search = () => {
  return (
    <div className={style.search__container}>
      <h1>NetflixRoulette</h1>
      <p>FIND YOUR MOVIE</p>
      <input type="text" className="form-control"></input>

      <div className={style.btn__container}>
        <div className={style.sort__container}>
          <span>SEARCH BY</span>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">
              TITLE
            </button>
            <button type="button" className="btn btn-secondary">
              GENRE
            </button>
          </div>
        </div>

        <button type="button" className="btn btn-danger">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Search;
