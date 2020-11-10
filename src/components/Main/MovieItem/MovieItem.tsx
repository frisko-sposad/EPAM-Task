import React from 'react';
import './MovieItem.css';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 28def4c... ts linter
export interface MovieItemProps {
  image: string;
  name: string;
  year: string;
  genre: string;
}
<<<<<<< HEAD
=======
export interface MovieItemProps {id?: number, key?: number, image: string, name: string, year: string, genre: string }
>>>>>>> 7b7863b... fixed bugs,
=======
export interface MovieItemProps { image: string, name: string, year: string, genre: string }
>>>>>>> d7067df... MovieItemProps - remove key
=======
>>>>>>> 28def4c... ts linter

const MovieItem = ({ image, name, year, genre }: MovieItemProps) => (
  <div className="movie-item">
    <img className="movie-item__img" src={image} alt="movieImage" />
    <div>
      <div className="movie-item__info">
        <div>{name}</div>
        <div className="movie-item__year">{year}</div>
      </div>
      <div className="movie-item__info">
        <div>{genre}</div>
      </div>
    </div>
  </div>
);

export default MovieItem;
