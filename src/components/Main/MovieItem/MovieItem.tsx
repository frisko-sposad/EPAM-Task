import Link from 'next/link';
import React, { FC } from 'react';
import { ConvertedMovie } from '../../App.types';
import { Image, Info, Title, MovieItemContainer, Year } from './MovieItem.styled';

interface MovieItemProps {
  movie: ConvertedMovie;
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const { id, title, posterPath, releaseDate, genres } = movie;

  return (
    <Link href={`/film/${id}`} passHref>
      <a href={`/film/${id}`}>
        <MovieItemContainer>
          <Image src={posterPath} alt={`poster from ${title}`} />
          <div>
            <Info>
              <Title>{title}</Title>
              {releaseDate ? <Year>{releaseDate?.split('-')[0]}</Year> : null}
            </Info>
            {genres ? <Info>{genres?.join(', ')}</Info> : null}
          </div>
        </MovieItemContainer>
      </a>
    </Link>
  );
};

export default MovieItem;
