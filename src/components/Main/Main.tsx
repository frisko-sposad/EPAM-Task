import React, { FC } from 'react';
import MovieItem from './MovieItem/MovieItem';
import { MovieItemType } from '../App.types';
import NoFilmsFound from '../NoFilmsFound/NoFilmsFound';
import { MainContainer, Container } from './Main.styled';

interface MainProps {
  movies?: MovieItemType[];
}

const Main: FC<MainProps> = ({ movies }) => {
  return (
    <MainContainer>
      {!movies || movies.length === 0 ? (
        <Container>
          <NoFilmsFound />
        </Container>
      ) : (
        <>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </>
      )}
    </MainContainer>
  );
};

export default Main;
