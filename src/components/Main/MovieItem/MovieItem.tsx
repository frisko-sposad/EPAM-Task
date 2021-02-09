import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../App.types';
import './MovieItem.css';

const MovieItem: FC<MovieItemType> = ({ id, title, posterPath, releaseDate, genres }) => {
  return (
    <Link to={`/film/${id}`}>
      <div className="movie-item">
        <img className="movie-item__img" src={posterPath} alt={`poster from ${title}`} />
        <div>
          <div className="movie-item__info">
            <div className="movie-item__title">{title}</div>
            <div className="movie-item__year">{releaseDate?.split('-')[0]}</div>
          </div>
          <div className="movie-item__info">{genres.join(', ')}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
