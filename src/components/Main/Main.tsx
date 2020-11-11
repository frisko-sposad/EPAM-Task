import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default memo(Main);
