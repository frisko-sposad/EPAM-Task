import React from 'react';
import './Main.css';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';
import { AppState, MovieItemType } from '../App.types';
import PageNotFound from '../PageNotFound/PageNotFound';
import NoFilmsFound from '../NoFilmsFound/NoFilmsFound';

interface MainProps {
  movies: MovieItemType[];
}

const Main = ({ movies }: MainProps) => (
  <main className="main">
    {movies.length === 0 ? (
      <NoFilmsFound />
    ) : (
      <Switch>
        <Route path={['/search', '/film/:id']}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </Route>
        <Route path="/" exact>
          <NoFilmsFound />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    )}
  </main>
);

const mapStateToProps = ({ movies }: AppState) => ({ movies });

export default connect(mapStateToProps, null)(Main);
