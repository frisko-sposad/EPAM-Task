import React from 'react';
import style from './MovieInfo.module.css';
import Button from '../../Generic/Button/Button';

const MovieInfo = (props) => {  
  return (
    <div className={style.search__container}>
      <div className={style.btnSearch_container}>        
        <Button className="btnSearch" onClick={props.openSearch}>SEARCH</Button>        
      </div>

      <div className={style.conteiner}>
        <img
          className={style.MovieInfo__img}
          src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81277950/thumbnail/medium/pkdhjf35g"
        ></img>
        <div className={style.discription}>
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
