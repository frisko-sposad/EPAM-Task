import React, { FC, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../Generic/Button/Button';
import { AppState, ConvertedMovie, AppDispatch } from '../../App.types';
import { clearMoviesAction, convertMovie, fetchMovieByIdAndRelatedMovies } from '../../App.actions';
import { SearchContainer, MovieInfoContainer, Img, Description, Title, VideoInfo } from './MovieInfo.styled';
import VariantBtn from '../../Generic/Button/Button.types';

interface MovieInfoProps {
  searchMovieByIdAndRelatedMovies: (id: string | string[] | undefined) => void;
  clearMovies: () => void;
  movie: ConvertedMovie | null;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie, searchMovieByIdAndRelatedMovies, clearMovies }) => {
  const router = useRouter();
  const { id } = router.query;

  const showMovieInfo = useCallback(() => {
    router.push('/');
    clearMovies();
  }, [clearMovies, router]);

  useEffect(() => {
    return searchMovieByIdAndRelatedMovies(id);
  }, [id, searchMovieByIdAndRelatedMovies]);

  const { title, overview, releaseDate, posterPath, genres, runtime } = movie ?? {};
  return (
    <>
      <SearchContainer>
        <Button active variant={VariantBtn.Search} onClick={showMovieInfo}>
          <Link href="/">SEARCH</Link>
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
    </>
  );
};

const mapStateToProps = ({ movie }: AppState) => ({
  movie: convertMovie(movie),
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
