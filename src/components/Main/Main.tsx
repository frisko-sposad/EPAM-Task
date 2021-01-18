import React, { memo } from 'react';
import './Main.css';
import MovieItem from './MovieItem/MovieItem';
import { MovieItemType } from '../App.types';

interface MainProps {
  movies: MovieItemType[];
}

const Main = ({ movies }: MainProps) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <main className="main">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} /> // выключить правила
      ))}
    </main>
  );
};

export default memo(Main);
