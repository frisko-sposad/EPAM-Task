import React from 'react';
import './Main.css';
import MovieItem from './MovieItem/MovieItem';

const Main = ({ movieBase }) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }) => (
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default Main;
