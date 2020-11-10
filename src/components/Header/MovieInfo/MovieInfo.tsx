import React, { memo } from 'react';
import './MovieInfo.css';
import Button from '../../Generic/Button/Button';

interface MovieInfoProps {
  openSearch: () => void;
}

const MovieInfo = ({ openSearch }: MovieInfoProps) => (
  <div className="search__container">
    <div className="btn-search__container">
<<<<<<< HEAD
<<<<<<< HEAD
      <Button className="btn_search" onClick={openSearch}>
        SEARCH
      </Button>
=======
      <Button className="btn_search" onClick={openSearch}>SEARCH</Button>
>>>>>>> c2c061a... lint jsx -> tsx,
=======
      <Button className="btn_search" onClick={openSearch}>
        SEARCH
      </Button>
>>>>>>> f3d4461... ts linter
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

<<<<<<< HEAD
export default memo(MovieInfo);
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default memo(MovieInfo);
=======
export default React.memo(MovieInfo);
>>>>>>> 7b7863b... fixed bugs,
=======
export default memo(MovieInfo);
>>>>>>> 31bd3fc... lint jsx -> tsx,
>>>>>>> c2c061a... lint jsx -> tsx,
