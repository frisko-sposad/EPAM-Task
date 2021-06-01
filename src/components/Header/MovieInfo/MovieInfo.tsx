import React, { FC } from 'react';
import { ConvertedMovie } from '../../App.types';
import { MovieInfoContainer, Img, Description, Title, VideoInfo } from './MovieInfo.styled';

const MovieInfo: FC<ConvertedMovie> = ({ title, overview, releaseDate, posterPath, genres, runtime }) => {
  return (
    <MovieInfoContainer>
      <Img className="movie-info__img" src={posterPath} alt="movieImage" />
      <Description>
        <Title>{title}</Title>
        {genres && <p>{genres.join(', ')}</p>}
        <VideoInfo>
          <strong>{releaseDate?.split('-')[0]}</strong>
          {runtime && <strong> {runtime} min</strong>}
        </VideoInfo>
        <p>{overview}</p>
      </Description>
    </MovieInfoContainer>
  );
};
export default MovieInfo;
