import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

interface MainProps {
  movies: (MovieItemProps & { id: number })[];
}

const Main = ({ movies }: MainProps) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <main className="main">
      {movies.map(({ id, title, releaseDate, genres, posterPath }) => (
        <MovieItem key={id} id={id} title={title} releaseDate={releaseDate} genres={genres} posterPath={posterPath} />
      ))}
    </main>
  );
};

export default memo(Main);
