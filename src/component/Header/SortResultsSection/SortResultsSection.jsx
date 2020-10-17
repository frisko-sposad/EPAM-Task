import React from 'react';
import style from './SortResultsSection.module.css';

const SortResultsSection = ({
  filmsBy,
  genre,
  moviesFound,
  sortBy,
  releaseDate,
  rating,
}) => {
  return (
    <section className={style.resultSort__container}>
      {filmsBy ? (
        <div className={style.resultCount}>
          <span>
            <strong>{filmsBy} </strong>
          </span>
          <span>{genre}</span>
        </div>
      ) : null}
      {moviesFound ? (
        <div className={style.resultCount}>
          <span>
            <strong>{moviesFound} </strong>
          </span>
        </div>
      ) : null}
      {sortBy ? (
        <div className={style.resultSort}>
          <span>
            <strong>{sortBy} </strong>
          </span>
          <button className={style.sortBtn}>{releaseDate}</button>
          <button className={style.sortBtn}>{rating}</button>
        </div>
      ) : null}
    </section>
  );
};

export default SortResultsSection;
