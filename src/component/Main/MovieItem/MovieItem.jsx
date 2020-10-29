import React from 'react';
import './MovieItem.css';

const MovieItem = ({ image, name, year, genre }) => (
  <div className="movie-item">
    <img className="movie-item__img" src={image} alt="movieImage" />
    <div>
      <div className="movie-item__info">
        <div>{name}</div>
        <div className="movie-item__year">{year}</div>
      </div>
      <div className="movie-item__info">
        <div>{genre}</div>
      </div>
    </div>
  </div>
);

export default MovieItem;
