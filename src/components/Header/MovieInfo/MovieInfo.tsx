import React, { FC } from 'react';
import Link from 'next/link';
import Button from '../../Generic/Button/Button';
import { ConvertedMovie } from '../../App.types';
import { SearchContainer, MovieInfoContainer, Img, Description, Title, VideoInfo } from './MovieInfo.styled';
import VariantBtn from '../../Generic/Button/Button.types';

interface MovieInfoProps {
  movie: ConvertedMovie | null | undefined;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {};
  return (
    <>
      <SearchContainer>
        <Button active variant={VariantBtn.Search}>
          <Link href="/">SEARCH</Link>
        </Button>
      </SearchContainer>
      <MovieInfoContainer>
        <Img className="movie-info__img" src={posterPath} alt="movieImage" />
        <Description>
          <Title>{title}</Title>
          <p>{genres?.join(', ')}</p>
          <VideoInfo>
            <strong>{releaseDate?.split('-')[0]}</strong>
            {runtime && <strong> {runtime} min</strong>}
          </VideoInfo>
          <p>{overview}</p>
        </Description>
      </MovieInfoContainer>
    </>
  );
};
export default MovieInfo;
