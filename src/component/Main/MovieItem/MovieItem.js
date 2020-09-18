import React from 'react';
import style from './MovieItem.module.css';

const MovieItem = () => {
  return (
    <div className={style.MovieItem}>
      <img
        className={style.MovieItem__img}
        src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81277950/thumbnail/medium/pkdhjf35g"
      ></img>
      <div>
        <div className={style.MovieItem__info}>
          <div>Movie Title</div>
          <div className={style.MovieItem__year}>2020</div>
        </div>
        <div className={style.MovieItem__info}>
          <div>Genre</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
