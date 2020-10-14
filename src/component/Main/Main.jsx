import React from 'react';
import style from './Main.module.css';
import MovieItem from './MovieItem/MovieItem';

const Main = ({ movieBase }) => {
  return (
    <main className={style.Main}>
      {movieBase.map(({id, name, year, genre, image}) => {
        return (
          <MovieItem
            key={id}
            name={name}
            year={year}
            genre={genre}
            image={image}
          />
        );
      })}
    </main>
  );
};

export default Main;
