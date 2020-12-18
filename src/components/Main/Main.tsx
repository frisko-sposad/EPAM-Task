import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, title, releaseDate, genres, posterPath }) => (
      <MovieItem key={id} title={title} releaseDate={releaseDate} genres={genres} posterPath={posterPath} />
    ))}
  </main>
);

export default memo(Main);
