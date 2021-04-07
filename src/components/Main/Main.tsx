import React from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem/MovieItem';
import { AppState, MovieItemType } from '../App.types';
import NoFilmsFound from '../NoFilmsFound/NoFilmsFound';
import { MainContainer, Container } from './Main.styled';

interface MainProps {
  movies?: MovieItemType[];
}

const Main = ({ movies }: MainProps) => {
  return (
    <MainContainer>
      {!movies || movies.length === 0 ? (
        <Container>
          <NoFilmsFound />
        </Container>
      ) : (
        <>
          <>
            {movies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </>
        </>
      )}
    </MainContainer>
  );
};

const mapStateToProps = ({ movies }: AppState) => ({ movies });

export default connect(mapStateToProps, null)(Main);
