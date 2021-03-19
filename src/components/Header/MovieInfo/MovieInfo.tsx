import React, { FC, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../Generic/Button/Button';
import { VariantBtn, AppState, ConvertedMovie, AppDispatch } from '../../App.types';
import { clearMoviesAction, convertMovie, fetchMovieByIdAndRelatedMovies } from '../../App.actions';

import { Container, SearchContainer, MovieInfoContainer, Img, Description, Title, VideoInfo } from './MovieInfo.styled';

interface MovieInfoProps {
  searchMovieByIdAndRelatedMovies: (id: string) => void;
  clearMovies: () => void;
  movie: ConvertedMovie | null;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie, searchMovieByIdAndRelatedMovies, clearMovies }) => {
  const history = useHistory();;;;;;{

  const showMovieInfo = useCallback(() => {
    history.push('/');
    clearMovies();
  }, [clearMovies, history]);

  const { id } = useParams<Record<string, string>>();
  useEffect(() => {
    searchMovieByIdAndRelatedMovies(id);
  }, [id, searchMovieByIdAndRelatedMovies]);

  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {};
  return (
    <Container>
      <SearchContainer>
        <Button active={false} variantBtn={VariantBtn.Search} className="btn_search" onClick={showMovieInfo}>
          SEARCH
        </Button>
      </SearchContainer>
      <MovieInfoContainer>
        <Img className="movie-info__img" src={posterPath} alt="movieImage" />
        <Description>
          <Title>{title}</Title>
          <p>{genres?.join(', ')}</p>
          <VideoInfo>
            <strong>{releaseDate?.split('-')[0]}</strong>
            {runtime && <strong> {runtime} min</strong>}
          </VideoInfo>
          <p>{overview}</p>
        </Description>
      </MovieInfoContainer>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  movie: convertMovie(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      searchMovieByIdAndRelatedMovies: fetchMovieByIdAndRelatedMovies,
      clearMovies: clearMoviesAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
