import React, { FC } from 'react';
import './MovieItem.css';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f6e8b07... MovieItemProps - remove key
export interface MovieItemProps {
  image: string;
  name: string;
  year: string;
  genre: string;
}
<<<<<<< HEAD

const MovieItem: FC<MovieItemProps> = ({ image, name, year, genre }) => (
=======
=======
export interface MovieItemProps {id?: number, key?: number, image: string, name: string, year: string, genre: string }
>>>>>>> 7b7863b... fixed bugs,
=======
export interface MovieItemProps { image: string, name: string, year: string, genre: string }
>>>>>>> d7067df... MovieItemProps - remove key

const MovieItem = ({ image, name, year, genre }: MovieItemProps) => (
  
>>>>>>> f6e8b07... MovieItemProps - remove key
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
