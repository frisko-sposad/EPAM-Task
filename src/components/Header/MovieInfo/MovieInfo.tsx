import React, { FC, useCallback, useEffect } from 'react';
import './MovieInfo.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../Generic/Button/Button';
import { fetchMovieByIdAndRelatedMovies, searchMoviesAction } from '../../App.actions';
import { AppState, ConvertedMovie, AppDispatch, SearchMoviesResult } from '../../App.types';

interface MovieInfoProps {
  searchMovieByIdAndRelatedMovies: (id: string) => void;
  clearSearchMovies: (result: SearchMoviesResult) => void;
  movie: ConvertedMovie | null;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie, searchMovieByIdAndRelatedMovies, clearSearchMovies }) => {
  const history = useHistory();

  const showMovieInfo = useCallback(() => {
    history.push('/');
    clearSearchMovies({ movies: [], moviesFound: 0 });
  }, [clearSearchMovies, history]);

  const { id } = useParams<Record<string, string>>();
  useEffect(() => {
    searchMovieByIdAndRelatedMovies(id);
  }, [id, searchMovieByIdAndRelatedMovies]);

  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {};
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
      searchMovieByIdAndRelatedMovies: fetchMovieByIdAndRelatedMovies,
      clearSearchMovies: searchMoviesAction,
    },
    dispatch,
  );

const mapStateToProps = ({ movie }: AppState) => ({
  movie,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
