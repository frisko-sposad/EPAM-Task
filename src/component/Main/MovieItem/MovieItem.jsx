import React from 'react';
import style from './MovieItem.module.css';

const MovieItem = (props) => {
  return (
    <div className={style.MovieItem}>
      <img
        className={style.MovieItem__img}
        src={props.image}
      ></img>
      <div>
        <div className={style.MovieItem__info}>
          <div>{props.name}</div>
          <div className={style.MovieItem__year}>{props.year}</div>
        </div>
        <div className={style.MovieItem__info}>
          <div>{props.genre}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
