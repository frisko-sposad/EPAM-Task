import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchMovieByIdAndRelatedMovies, setIsSearchShownAction } from '../../App.actions';
import { Action, StateType } from '../../App.types';
import './MovieItem.css';

interface MovieItemProps {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  genres: string[];
  setIsSearchShown: (isSearchShown: boolean) => void;
  searchMovieByIdAndRelatedMovies: (movieId: number) => void;
}

const MovieItem: FC<MovieItemProps> = ({
  id,
  title,
  posterPath,
  releaseDate,
  genres,
  setIsSearchShown,
  searchMovieByIdAndRelatedMovies,
}) => {
  return (
    <div
      className="movie-item"
      onClick={() => {
        setIsSearchShown(false);
        searchMovieByIdAndRelatedMovies(id);
      }}
    >
      <img className="movie-item__img" src={posterPath} alt={`poster from ${title}`} />
      <div>
        <div className="movie-item__info">
          <div className="movie-item__title">{title}</div>
          <div className="movie-item__year">{releaseDate?.split('-')[0]}</div>
        </div>
        <div className="movie-item__info">{genres.join(', ')}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, void, Action>) =>
  bindActionCreators(
    {
      setIsSearchShown: setIsSearchShownAction,
      searchMovieByIdAndRelatedMovies: fetchMovieByIdAndRelatedMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(MovieItem);
