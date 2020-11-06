import React, { memo } from 'react';
import './MovieInfo.css';
import Button from '../../Generic/Button/Button';

interface MovieInfoProps { openSearch: () => void }

const MovieInfo = ({ openSearch }: MovieInfoProps) => (
  <div className="search__container">
    <div className="btn-search__container">
      <Button className="btn_search" onClick={openSearch}>SEARCH</Button>
    </div>
    <div className="movie-info">
      <img
        className="movie-info__img"
        src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81277950/thumbnail/medium/pkdhjf35g"
        alt="movieImage"
      />
      <div className="movie-info__description">
        <h2 className="movie-info__title">Elona Holmes</h2>
        <p>Oscar-writing Movies</p>
        <div className="movie-info__video-parameters">
          <strong>1994</strong>
          <strong>154 min</strong>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sapiente veniam culpa sunt nam dolorem
          molestiae reprehenderit soluta nesciunt, nostrum non adipisci consectetur laudantium eaque ipsum pariatur
          inventore temporibus autem.
        </p>
      </div>
    </div>
  </div>
);

export default memo(MovieInfo);
