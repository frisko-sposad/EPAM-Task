import React, { FC } from 'react';
import './MovieItem.css';

export interface MovieItemProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: string;
}

const MovieItem: FC<MovieItemProps> = ({ posterPath, title, releaseDate, genres }) => (
  <div className="movie-item">
    <img className="movie-item__img" src={posterPath} alt="movieImage" />
    <div>
      <div className="movie-item__info">
        <div>{title}</div>
        <div className="movie-item__year">{releaseDate}</div>
      </div>
      <div className="movie-item__info">{genres}</div>
    </div>
  </div>
);

export default MovieItem;
