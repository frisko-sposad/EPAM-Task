import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';
import { AppState, MovieItemType } from '../App.types';
import PageNotFound from '../PageNotFound/PageNotFound';
import NoFilmsFound from '../NoFilmsFound/NoFilmsFound';
import { MainContainer, Container } from './Main.styled';

interface MainProps {
  movies?: MovieItemType[];
}

const Main = ({ movies }: MainProps) => (
  <MainContainer>
    {!movies || movies.length === 0 ? (
      <Container>
        <NoFilmsFound />
      </Container>
    ) : (
      <Switch>
        <Route path={['/search', '/film/:id']}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </Route>
        <Route path="/" exact>
          <Container>
            <NoFilmsFound />
          </Container>
        </Route>
        <Route path="*">
          <Container>
            <PageNotFound />
          </Container>
        </Route>
      </Switch>
    )}
  </MainContainer>
);

const mapStateToProps = ({ movies }: AppState) => ({ movies });

export default connect(mapStateToProps, null)(Main);
