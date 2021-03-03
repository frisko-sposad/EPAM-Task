import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieItemType } from '../../App.types';
import './MovieItem.css';
import { Image, Info, Title, MovieItemContainer, Year } from './MovieItem.styled';

const MovieItem: FC<MovieItemType> = ({ id, title, posterPath, releaseDate, genres }) => {
  return (
    <Link to={`/film/${id}`} style={{ textDecoration: 'none' }}>
      <MovieItemContainer>
        <Image src={posterPath} alt={`poster from ${title}`} />
        <div>
          <Info>
            <Title>{title}</Title>
            <Year className="movie-item__year">{releaseDate?.split('-')[0]}</Year>
          </Info>
          <Info>{genres.join(', ')}</Info>
        </div>
      </MovieItemContainer>
    </Link>
  );
};

export default MovieItem;
