import React, { FC, useCallback } from 'react';
import './MovieInfo.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../Generic/Button/Button';
import { setIsSearchShownAction, setSearchByOptionAction, setSearchQueryAction } from '../../App.actions';
import { AppState, ConvertedMovie, AppDispatch } from '../../App.types';

interface MovieInfoProps {
  setIsSearchShown: (isSearchShown: boolean) => void;
  setSearchByOption: (searchByOption: string) => void;
  setSearchQuery: (searchQuery: string) => void;
  movie: ConvertedMovie | null;
  searchByOption: string;
}

const MovieInfo: FC<MovieInfoProps> = ({ setIsSearchShown, setSearchByOption, movie, setSearchQuery }) => {
  const showMovieInfo = useCallback(() => {
    setSearchQuery('');
    setSearchByOption('title');
    setIsSearchShown(false);
  }, [setIsSearchShown, setSearchByOption, setSearchQuery]);

  if (movie === null) return null;
  const { title, overview, releaseDate, posterPath, genres, runtime } = movie;

  return (
    <div className="search__container">
      <div className="btn-search__container">
        <Button className="btn_search" onClick={showMovieInfo}>
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
            <strong>{`${runtime === null ? 'run time is unknown' : `${runtime} min`}`}</strong>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      setIsSearchShown: setIsSearchShownAction,
      setSearchByOption: setSearchByOptionAction,
      setSearchQuery: setSearchQueryAction,
    },
    dispatch,
  );

const mapStateToProps = ({ movie, searchByOption }: AppState) => ({
  movie,
  searchByOption,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
