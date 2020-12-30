import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { setIsSearchShown, searchMovieByIdAndRelatedMovies } from '../../App.actions';
import './MovieItem.css';

export interface MovieItemProps {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  genres: [];
}

const MovieItem: FC<MovieItemProps> = ({
  id,
  posterPath,
  title,
  releaseDate,
  genres,
  setIsSearchShown,
  searchMovieByIdAndRelatedMovies,
}) => (
  <div className="movie-item">
    {console.log(id, title)}
    <img
      className="movie-item__img"
      src={posterPath}
      alt={`poster from ${title}`}
      onClick={() => {
        setIsSearchShown(false);
        searchMovieByIdAndRelatedMovies(id);
      }}
    />
    <div>
      <div className="movie-item__info">
        <div className="movie-item__title">{title}</div>
        <div className="movie-item__year">{releaseDate}</div>
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
