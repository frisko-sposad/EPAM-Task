import React from 'react';
import style from './MovieInfo.module.css';

const MovieInfo = () => {
  return (
    <div className={style.search__container}>
      <div className={style.h1_container}>
        <h1>NetflixRoulette</h1>
        <button type="button" className={`${style.btnh1} btn btn-danger`}>
          SEARCH
        </button>
      </div>

      <div className={style.MovieInfo__conteiner}>
        <img
          className={style.MovieInfo__img}
          src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81277950/thumbnail/medium/pkdhjf35g"
        ></img>
        <div className={style.MovieInfo__discription}>
          <h2 className={style.h2}>Elona Holmes</h2>
          <p>Oscar-writing Movies</p>
          <div className={style.videoParameters}>
            <strong>1994</strong>
            <strong>154 min</strong>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            sapiente veniam culpa sunt nam dolorem molestiae reprehenderit
            soluta nesciunt, nostrum non adipisci consectetur laudantium eaque
            ipsum pariatur inventore temporibus autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
