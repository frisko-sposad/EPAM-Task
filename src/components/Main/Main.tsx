import React, { memo } from 'react';
import './Main.css';
import MovieItem, { MovieItemProps } from './MovieItem/MovieItem';

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c2c061a... lint jsx -> tsx,
=======
<<<<<<< HEAD
>>>>>>> f6e8b07... MovieItemProps - remove key
=======
<<<<<<< HEAD
>>>>>>> f3d4461... ts linter
=======
>>>>>>> f18e8e4... linted file
interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> c2c061a... lint jsx -> tsx,
=======
=======
interface MainProps { movieBase: (MovieItemProps & { id: number })[] }
=======
interface MainProps {
  movieBase: (MovieItemProps & { id: number })[];
}
>>>>>>> 28def4c... ts linter

const Main = ({ movieBase }: MainProps) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
>>>>>>> d7067df... MovieItemProps - remove key
>>>>>>> f6e8b07... MovieItemProps - remove key
=======
>>>>>>> f18e8e4... linted file
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default memo(Main);
