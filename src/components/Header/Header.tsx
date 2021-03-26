import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchSection from './SearchSection/SearchSection';
import MovieInfo from './MovieInfo/MovieInfo';
import SiteTitle from './SiteTitle/SiteTitle';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import { HeaderContainer, Container } from './Header.styled';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <SiteTitle />
      </Container>
      <Switch>
        <Route path="/film/:id">
          <Container>
            <MovieInfo />
          </Container>
          <SortResultsSection isSearchShown />
        </Route>
        <Route path="/">
          <Container>
            <SearchSection />
          </Container>
          <SortResultsSection isSearchShown={false} />
        </Route>
      </Switch>
    </HeaderContainer>
  );
};

export default Header;
