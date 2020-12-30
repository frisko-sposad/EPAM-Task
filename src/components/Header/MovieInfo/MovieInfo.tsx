import React, { Dispatch, FC } from 'react';
import './MovieInfo.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import { setIsSearchShown, setSearchByOption } from '../../App.actions';

export interface MovieItemProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  genres?: [];
}

const MovieInfo: FC<MovieItemProps> = ({ setIsSearchShown, setSearchByOption, movie }) => {
  const { title, overview, release_date, poster_path, genres } = movie;
  console.log(genres);
  return (
    <div className="search__container">
      <div className="btn-search__container">
        <Button
          className="btn_search"
          onClick={() => {
            setSearchByOption('title');
            setIsSearchShown(true);
          }}
        >
          SEARCH
        </Button>
      </div>
      <div className="movie-info">
        <img className="movie-info__img" src={poster_path} alt="movieImage" />
        <div className="movie-info__description">
          <h2 className="movie-info__title">{title}</h2>
          <p>{genres?.join(', ')}</p>
          <div className="movie-info__video-parameters">
            <strong>{release_date}</strong>
            <strong>154 min</strong>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      setIsSearchShown,
      setSearchByOption,
    },
    dispatch,
  );

const mapStateToProps = ({ movie }) => ({
  movie,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
