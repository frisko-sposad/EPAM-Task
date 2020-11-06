import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c2c061a... lint jsx -> tsx,
interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
<<<<<<< HEAD
=======
=======
const Main = ({ movieBase }: { movieBase:MovieItemProps[] }) => (
  <main className="main">    
=======
const Main = ({ movieBase }: { movieBase: MovieItemProps[] }) => (
  <main className="main">
>>>>>>> 31bd3fc... lint jsx -> tsx,
    {movieBase.map(({ id, name, year, genre, image }: MovieItemProps) => (
>>>>>>> 7b7863b... fixed bugs,
>>>>>>> c2c061a... lint jsx -> tsx,
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default memo(Main);
