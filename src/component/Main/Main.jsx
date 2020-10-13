import React from 'react';
import style from './Main.module.css';
import MovieItem from './MovieItem/MovieItem';

const Main = (props) => {
  const movieItems = props.movieArr.map((el, index) => {
    return (
      <MovieItem
        key={index}
        name={el.name}
        year={el.year}
        genre={el.genre}
        image={el.image}
      />
    );
  });

  return <main className={style.Main}>{movieItems}</main>;
};

export default Main;
