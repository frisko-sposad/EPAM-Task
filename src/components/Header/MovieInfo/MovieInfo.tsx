import React, { Dispatch, FC } from 'react';
import './MovieInfo.css';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import { setIsSearchShown, setSearchByOption } from '../../App.actions';
import { StateType, SetIsSearchShown, MovieInfoType } from '../../App.types';

interface MovieInfoProps {
  setIsSearchShown: SetIsSearchShown;
  setSearchByOption: (searchByOption: string) => void;
  movie: MovieInfoType;
  searchByOption: string;
}

const MovieInfo: FC<MovieInfoProps> = ({ setIsSearchShown, setSearchByOption, movie, searchByOption }) => {
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie;
  return (
    <div className="search__container">
      <div className="btn-search__container">
        <Button
          className="btn_search"
          onClick={() => {
            setSearchByOption(searchByOption);
            setIsSearchShown(true);
          }}
        >
          SEARCH
        </Button>
      </div>
      <div className="movie-info">
        <img className="movie-info__img" src={posterPath} alt="movieImage" />
        <div className="movie-info__description">
          <h2 className="movie-info__title">{title}</h2>
          <p>{genres?.join(', ')}</p>
          <div className="movie-info__video-parameters">
            <strong>{releaseDate?.split('-')[0]}</strong>
            <strong>{`${runtime === null ? '0' : runtime} min`}</strong>
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

const mapStateToProps = ({ movie, searchByOption }: Pick<StateType, 'movie' | 'searchByOption'>) => ({
  movie,
  searchByOption,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
