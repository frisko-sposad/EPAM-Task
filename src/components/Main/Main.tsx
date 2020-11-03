import React from 'react';
import './Main.css';
import MovieItem from './MovieItem/MovieItem';

interface movieBaseType { id: string, name: string, year: string, genre: string, image: string }

const Main = ({ movieBase } : any) => (
  <main className="main">
    {movieBase.map(({ id, name, year, genre, image }: movieBaseType) => (
      <MovieItem key={id} name={name} year={year} genre={genre} image={image} />
    ))}
  </main>
);

export default React.memo(Main);
