import React, { FC, memo } from 'react';
import { ConvertedMovie } from '../../App.types';
import { MovieInfoContainer, Img, Description, Title, Container, VideoInfo } from './MovieInfo.styled';

interface MovieInfoProps {
  movie: ConvertedMovie;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie;
  return (
    <MovieInfoContainer>
      <Img className="movie-info__img" src={posterPath} alt="movieImage" />
      <Description>
        <Title>{title}</Title>
        {genres ? <p>{genres.join(', ')}</p> : <p>Unknown genre</p>}
        <Container>
          {releaseDate ? <VideoInfo>{releaseDate?.split('-')[0]}</VideoInfo> : null}
          {runtime ? <VideoInfo> {runtime} min</VideoInfo> : null}
        </Container>
        <p>{overview}</p>
      </Description>
    </MovieInfoContainer>
  );
};
export default memo(MovieInfo);
