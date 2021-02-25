import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import HeaderContainer from './Header.styled';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <SiteTitle />
      <Switch>
        <Route path="/film/:id">
          <MovieInfo />
          <SortResultsSection isSearchShown />
        </Route>
        <Route path="/">
          <SearchSection />
          <SortResultsSection isSearchShown={false} />
        </Route>
      </Switch>
    </HeaderContainer>
  );
};

export default Header;
