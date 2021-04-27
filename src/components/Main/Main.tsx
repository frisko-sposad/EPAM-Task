import React, { FC } from 'react';
import MovieItem from './MovieItem/MovieItem';
import { MovieItemType } from '../App.types';
import NoFilmsFound from './NoFilmsFound/NoFilmsFound';
import PageNotFound from './PageNotFound/PageNotFound';
import { MainContainer } from './Main.styled';

interface MainProps {
  movies?: MovieItemType[];
  isPageNotFound?: boolean;
}

const Main: FC<MainProps> = ({ movies, isPageNotFound }) => {
  if (isPageNotFound) {
    return <PageNotFound />;
  }
  return !movies || movies.length === 0 ? (
    <NoFilmsFound />
  ) : (
    <MainContainer>
      {movies?.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </MainContainer>
  );
};

export default Main;
