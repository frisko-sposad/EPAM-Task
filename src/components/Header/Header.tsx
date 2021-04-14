import React, { FC } from 'react';
import SearchSection from './SearchSection/SearchSection';
import { Container, HeaderContainer } from './Header.styled';
import SortResultsSection from './SortResultsSection/SortResultsSection';
import SiteTitle from './SiteTitle/SiteTitle';
import MovieInfo from './MovieInfo/MovieInfo';
import { ConvertedMovie } from '../App.types';

interface HeaderProps {
  isSearchPage: boolean;
  movie?: ConvertedMovie | null | undefined;
  moviesFound?: number;
}

const Header: FC<HeaderProps> = ({ isSearchPage, movie, moviesFound }) => {
  return (
    <HeaderContainer>
      <Container>
        <SiteTitle />
      </Container>
      {isSearchPage ? (
        <>
          <Container>
            <SearchSection />
          </Container>
          <SortResultsSection isSearchPage movie={movie} moviesFound={moviesFound} />
        </>
      ) : (
        <>
          <Container>
            <MovieInfo movie={movie} />
          </Container>
          <SortResultsSection isSearchPage={false} movie={movie} />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
