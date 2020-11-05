import React from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

const Main = ({ movieBase }: { movieBase:MovieItemProps[] }) => (
  <main className="main">    
    {movieBase.map(({ id, name, year, genre, image }: MovieItemProps) => (
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default React.memo(Main);
