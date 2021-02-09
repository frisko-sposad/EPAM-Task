import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';
import PageNotFound from '../PageNotFound/PageNotFound';
import { AppState } from '../App.types';

const Header: FC = () => {
  return (
    <header>
      <section className="header__container">
        <SiteTitle />
        <Switch>
          <Route path="/film/:id">
            <MovieInfo />
            <SortResultsSection isSearchShown />
          </Route>
          <Route>
            <SearchSection />
            <SortResultsSection isSearchShown={false} />
          </Route>
          <Route path="404">
            <PageNotFound />
          </Route>
        </Switch>
      </section>
    </header>
  );
};

const mapStateToProps = ({ movie, moviesFound }: AppState) => ({
  movie,
  moviesFound,
});

export default connect(mapStateToProps, null)(Header);
