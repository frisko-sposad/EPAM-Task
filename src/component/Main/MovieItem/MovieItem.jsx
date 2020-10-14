import React from 'react';
import style from './MovieItem.module.css';

const MovieItem = ({ image, name, year, genre }) => {
  return (
    <div className={style.MovieItem}>
      <img className={style.MovieItem__img} src={image}></img>
      <div>
        <div className={style.MovieItem__info}>
          <div>{name}</div>
          <div className={style.MovieItem__year}>{year}</div>
        </div>
        <div className={style.MovieItem__info}>
          <div>{genre}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
