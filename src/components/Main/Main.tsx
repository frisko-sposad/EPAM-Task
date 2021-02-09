import React from 'react';
import './Main.css';
import { connect } from 'react-redux';
import MovieItem from './MovieItem/MovieItem';
import { AppState, MovieItemType } from '../App.types';

interface MainProps {
  movies: MovieItemType[];
}

const Main = ({ movies }: MainProps) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <main className="main">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </main>
  );
};

const mapStateToProps = (state: AppState) => state;

export default connect(mapStateToProps, null)(Main);
