import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

<<<<<<< HEAD
interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
=======
const Main = ({ movieBase }: { movieBase:MovieItemProps[] }) => (
  <main className="main">    
    {movieBase.map(({ id, name, year, genre, image }: MovieItemProps) => (
>>>>>>> 7b7863b... fixed bugs,
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default memo(Main);
