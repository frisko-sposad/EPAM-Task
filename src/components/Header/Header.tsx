import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import './Header.css';

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
          <Route path="/search">
            <SearchSection />
            <SortResultsSection isSearchShown={false} />
          </Route>
          <Route path="/" exact>
            <SearchSection />
            <SortResultsSection isSearchShown={false} />
          </Route>
          <Route path="*">
            <SearchSection />
            <SortResultsSection isSearchShown={false} />
          </Route>
        </Switch>
      </section>
    </header>
  );
};

export default Header;
