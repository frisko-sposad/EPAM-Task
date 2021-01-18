import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { setIsSearchShown, searchMovieByIdAndRelatedMovies } from '../../App.actions';
import './MovieItem.css';
import { MovieItemType } from '../../App.types';

const MovieItem: FC<MovieItemType> = ({
  id,
  posterPath,
  title,
  releaseDate,
  genres,
  setIsSearchShown,
  searchMovieByIdAndRelatedMovies,
}) => (
  <div
    className="movie-item"
    onClick={() => {
      setIsSearchShown(false);
      searchMovieByIdAndRelatedMovies(id); // выключить правила
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      setIsSearchShown,
      searchMovieByIdAndRelatedMovies,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(MovieItem);
