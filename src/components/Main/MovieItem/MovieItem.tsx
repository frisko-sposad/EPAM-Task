import React, { FC } from 'react';
import './MovieItem.css';

export interface MovieItemProps {
  image: string;
  name: string;
  year: string;
  genre: string;
}

const MovieItem: FC<MovieItemProps> = ({ image, name, year, genre }) => (
  <div className="movie-item">
    <img className="movie-item__img" src={image} alt="movieImage" />
    <div>
      <div className="movie-item__info">
        <div>{name}</div>
        <div className="movie-item__year">{year}</div>
      </div>
      <div className="movie-item__info">{genre}</div>
    </div>
  </div>
);

export default MovieItem;
