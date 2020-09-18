import React from 'react';
import style from './Main.module.css';
import MovieItem from './MovieItem/MovieItem';

const Main = () => {
  return (
    <main className={style.Main}>
      <div className={style.main__container}>
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </main>
  );
};

export default Main;
