import Link from 'next/link';
import React, { FC } from 'react';

import { MovieItemType } from '../../App.types';
import { Image, Info, Title, MovieItemContainer, Year } from './MovieItem.styled';

const MovieItem: FC<MovieItemType> = ({ id, title, posterPath, releaseDate, genres }) => {
  return (
    <Link href={`/film/${id}`} passHref>
      <a href={`/film/${id}`}>
        <MovieItemContainer>
          <Image src={posterPath} alt={`poster from ${title}`} />
          <div>
            <Info>
              <Title>{title}</Title>
              <Year>{releaseDate?.split('-')[0]}</Year>
            </Info>
            <Info>{genres.join(', ')}</Info>
          </div>
        </MovieItemContainer>
      </a>
    </Link>
  );
};

export default MovieItem;
