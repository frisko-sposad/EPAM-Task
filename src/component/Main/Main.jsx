import React from 'react';
import style from './Main.module.css';
import MovieItem from './MovieItem/MovieItem';

const Main = () => {
  return (
    <main className={style.Main}>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </main>
  );
};

export default Main;
